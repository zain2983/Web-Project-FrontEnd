import { useEffect, useState } from "react";

interface Video {
  _id: string;
  title: string;
  uploader: string;
  views: number;
  thumbnailUrl: string;
  videoLength: number;
  createdAt: string;
  // Add other fields you might need
}

const accessKey = "EusJ7VabPFmmBXfAtm9ld5O1lrlIfjLahY54ANTTVV3pzLgLyLiMqk11"; // Replace with your Pexels API key
const TILE_COUNT = 15; // Set the number of tiles to generate

console.log("PEXELS API KEY : ",accessKey)
console.log("TILE COUNT : ",TILE_COUNT)


function Home() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3001/videos/getVideos");
        const data = await response.json();
        
        // Check if data.videos exists
        if (data && data.videos) {
          console.log("Received videos:", data.videos);
          setVideos(data.videos);
        } else {
          console.error("Invalid response format:", data);
          setError("Invalid response format from server");
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError("Failed to fetch videos");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // Format date to "X days ago"
  const formatDate = (dateString: string) => {
    const videoDate = new Date(dateString);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - videoDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return `${diffDays} days ago`;
  };

  // Format video length (assuming it's in seconds)
  const formatVideoLength = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  if (isLoading) {
    return <div className="p-4 text-center">Loading videos...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos && videos.length > 0 ? (
          videos.map((video) => (
            <div key={video._id} className="cursor-pointer">
              <div className="relative">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full aspect-video object-cover rounded-lg"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 px-2 py-1 text-xs rounded">
                  {formatVideoLength(video.videoLength)}
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <img
                  src="https://via.placeholder.com/100" // You might want to get actual avatar URLs later
                  alt={video.uploader}
                  className="w-9 h-9 rounded-full"
                />
                <div>
                  <h3 className="font-medium line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{video.uploader}</p>
                  <p className="text-sm text-gray-400">
                    {video.views} views • {formatDate(video.createdAt)}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center text-gray-500">No videos found</div>
        )}
      </div>
    </div>
  );
}

export default Home;