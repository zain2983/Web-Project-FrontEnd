import { useState } from 'react';

function UploadPopup({ onClose }) {
  const [title, setTitle] = useState('Sample Video');
  const [description, setDescription] = useState('This is a test upload');
  const [tags, setTags] = useState(['test', 'sample']);
  const [uploader, setUploader] = useState('USER_ID_HERE');
  const [thumbnailUrl, setThumbnailUrl] = useState('https://example.com/thumb.jpg');
  const [videoUrl, setVideoUrl] = useState('https://example.com/video.mp4');
  
  // Hardcoded video length
  const videoLength = 120; // Example length in seconds

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newVideo = {
      title,
      description,
      tags,
      videoUrl,
      thumbnailUrl,
      uploader,
      videoLength,
    };

    try {
      const response = await fetch('http://localhost:3001/videos/uploadvideo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVideo),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Video uploaded successfully:', data); // Log the response from the server
      onClose(); // Close the popup after successful submission
    } catch (error) {
      console.error('Error uploading video:', error); // Log any errors
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-[#272727] mx-5 p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4 text-white">Upload Video</h2>
        <form onSubmit={handleSubmit}>
          <label className="text-white mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Sample Video"
            className="border border-gray-600 p-2 mb-4 w-full bg-[#1a1a1a] text-white"
          />
          
          <label className="text-white mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="This is a test upload"
            className="border border-gray-600 p-2 mb-4 w-full bg-[#1a1a1a] text-white"
          />
          
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="flex-1">
              <label className="text-white mb-1">Tags (comma separated)</label>
              <input
                type="text"
                value={tags.join(', ')}
                onChange={(e) => setTags(e.target.value.split(','))}
                placeholder="test, sample"
                className="border border-gray-600 p-2 w-full bg-[#1a1a1a] text-white"
              />
            </div>
            <div className="flex-1">
              <label className="text-white mb-1">Uploader ID</label>
              <input
                type="text"
                value={uploader}
                onChange={(e) => setUploader(e.target.value)}
                placeholder="USER_ID_HERE"
                className="border border-gray-600 p-2 w-full bg-[#1a1a1a] text-white"
              />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="flex-1">
              <label className="text-white mb-1">Thumbnail URL</label>
              <input
                type="text"
                value={thumbnailUrl}
                onChange={(e) => setThumbnailUrl(e.target.value)}
                placeholder="https://example.com/thumb.jpg"
                className="border border-gray-600 p-2 w-full bg-[#1a1a1a] text-white"
              />
            </div>
            <div className="flex-1">
              <label className="text-white mb-1">Video URL</label>
              <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://example.com/video.mp4"
                className="border border-gray-600 p-2 w-full bg-[#1a1a1a] text-white"
              />
            </div>
          </div>
          
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"> 
            Upload
          </button>
          <button type="button" onClick={onClose} className="ml-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"> 
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadPopup;