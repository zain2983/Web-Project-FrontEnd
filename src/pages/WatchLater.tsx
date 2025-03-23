import { Clock, Trash2 } from 'lucide-react';

const watchLaterVideos = [
  {
    id: 1,
    title: "Advanced TypeScript Patterns",
    channel: "TypeScript Guru",
    views: "85K",
    addedAt: "1 week ago",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 2,
    title: "Modern CSS Techniques",
    channel: "CSS Master",
    views: "120K",
    addedAt: "3 days ago",
    thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=600",
    avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=100"
  }
];

function WatchLater() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <Clock className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">Watch Later</h1>
            <p className="text-gray-400 text-sm">{watchLaterVideos.length} videos</p>
          </div>
        </div>
        <button className="flex items-center gap-2 text-red-500 hover:text-red-600">
          <Trash2 className="w-5 h-5" />
          Clear All
        </button>
      </div>

      <div className="">
        {watchLaterVideos.map(video => (
          <div key={video.id} className="flex gap-4 hover:bg-[#272727] p-4 rounded-lg cursor-pointer group">
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-48 h-28 object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 bg-black/70 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Trash2 className="w-4 h-4 text-white" />
              </button>
            </div>
            <div>
              <h3 className="font-medium text-lg">{video.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{video.channel}</p>
              <p className="text-sm text-gray-400">
                {video.views} views • Added {video.addedAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchLater;