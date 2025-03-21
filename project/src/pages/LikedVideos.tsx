import React from 'react';
import { ThumbsUp } from 'lucide-react';

const likedVideos = [
  {
    id: 1,
    title: "10 JavaScript Tips You Need to Know",
    channel: "JS Ninja",
    views: "200K",
    likedAt: "2 days ago",
    thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=600",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 2,
    title: "Building Responsive Layouts",
    channel: "WebDev Pro",
    views: "150K",
    likedAt: "1 week ago",
    thumbnail: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80&w=600",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
  }
];

function LikedVideos() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <ThumbsUp className="w-8 h-8" />
        <div>
          <h1 className="text-2xl font-bold">Liked Videos</h1>
          <p className="text-gray-400 text-sm">{likedVideos.length} videos</p>
        </div>
      </div>

      <div className="space-y-6">
        {likedVideos.map(video => (
          <div key={video.id} className="flex gap-4 hover:bg-[#272727] p-4 rounded-lg cursor-pointer">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-48 h-28 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-medium text-lg">{video.title}</h3>
              <div className="flex items-center gap-2 mt-2">
                <img
                  src={video.avatar}
                  alt={video.channel}
                  className="w-6 h-6 rounded-full"
                />
                <p className="text-sm text-gray-400">{video.channel}</p>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                {video.views} views • Liked {video.likedAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikedVideos;