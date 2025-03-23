import { Trash2 } from 'lucide-react';

const historyVideos = [
  {
    id: 1,
    title: "Building a Modern Web Application",
    channel: "TechMaster",
    views: "120K",
    watchedAt: "2 hours ago",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 2,
    title: "Learn React in 2024 - Complete Guide",
    channel: "CodePro",
    views: "250K",
    watchedAt: "Yesterday",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100"
  }
];

function History() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Watch History</h1>
        <button className="flex items-center gap-2 text-red-500 hover:text-red-600">
          <Trash2 className="w-5 h-5" />
          Clear History
        </button>
      </div>

      <div className="">
        {historyVideos.map(video => (
          <div key={video.id} className="flex gap-4 hover:bg-[#272727] p-4 rounded-lg cursor-pointer">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-48 h-28 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-medium text-lg">{video.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{video.channel}</p>
              <p className="text-sm text-gray-400">
                {video.views} views • Watched {video.watchedAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;