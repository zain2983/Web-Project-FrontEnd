import React from 'react';

interface Video {
  id: number;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  thumbnail: string;
  avatar: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "Building a Modern Web Application",
    channel: "TechMaster",
    views: "120K",
    timestamp: "2 days ago",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 2,
    title: "Learn React in 2024 - Complete Guide",
    channel: "CodePro",
    views: "250K",
    timestamp: "1 week ago",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 3,
    title: "Amazing Nature Documentary 2024",
    channel: "NatureExplorer",
    views: "500K",
    timestamp: "3 days ago",
    thumbnail: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=600",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=100"
  }
];

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {videos.map(video => (
        <div key={video.id} className="cursor-pointer">
          <div className="relative">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full aspect-video object-cover rounded-lg"
            />
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 px-2 py-1 text-xs rounded">
              8:24
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <img
              src={video.avatar}
              alt={video.channel}
              className="w-9 h-9 rounded-full"
            />
            <div>
              <h3 className="font-medium line-clamp-2">{video.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{video.channel}</p>
              <p className="text-sm text-gray-400">
                {video.views} views • {video.timestamp}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;