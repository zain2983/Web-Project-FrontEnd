import React from "react";
import {
  ChevronUp,
  ChevronDown,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Share2,
  MoreVertical,
} from "lucide-react";

interface Short {
  id: number;
  video: string;
  title: string;
  channel: string;
  likes: string;
  description: string;
  avatar: string;
}

const shorts: Short[] = [
  {
    id: 1,
    video:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1080&h=1920",
    title: "Amazing Sunset Time-lapse",
    channel: "NatureVibes",
    likes: "1.2M",
    description:
      "Watch this incredible sunset transform the sky! 🌅 #sunset #nature #timelapse",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 2,
    video:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1080&h=1920",
    title: "Street Food Adventures",
    channel: "FoodieFinds",
    likes: "856K",
    description: "Exploring the best street food in Tokyo! 🍜 #foodie #japan #streetfood",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100",
  },
];

function Shorts() {
  const [currentShort, setCurrentShort] = React.useState(0);

  const nextShort = () => {
    if (currentShort < shorts.length - 1) {
      setCurrentShort((curr) => curr + 1);
    }
  };

  const previousShort = () => {
    if (currentShort > 0) {
      setCurrentShort((curr) => curr - 1);
    }
  };

  return (
    <div className="flex justify-center min-h-100vhvh px-2 sm:px-0">
      <div className="relative w-full max-w-[400px] h-[calc(100vh-120px)]">
        {/* Video Display */}
        <img
          src={shorts[currentShort].video}
          alt={shorts[currentShort].title}
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2 flex flex-col gap-4">
          <button
            onClick={previousShort}
            className="text-white p-2 rounded-full bg-black/50 disabled:opacity-50"
            disabled={currentShort === 0}
          >
            <ChevronUp className="w-6 h-6" />
          </button>
          <button
            onClick={nextShort}
            className="text-white p-2 rounded-full bg-black/50 disabled:opacity-50"
            disabled={currentShort === shorts.length - 1}
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>

        {/* Interaction Buttons */}
        <div className="absolute right-4 bottom-24 flex flex-col gap-6">
          {[{ icon: ThumbsUp, label: shorts[currentShort].likes },
            { icon: ThumbsDown, label: "Dislike" },
            { icon: MessageCircle, label: "Comments" },
            { icon: Share2, label: "Share" },
            { icon: MoreVertical, label: "More" }].map(({ icon: Icon, label }, index) => (
            <button key={index} className="flex flex-col items-center text-white">
              <div className="bg-black/50 p-2 rounded-full">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm mt-1">{label}</span>
            </button>
          ))}
        </div>

        {/* Video Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
          <h3 className="text-white font-semibold">{shorts[currentShort].title}</h3>
          <div className="flex items-center gap-2 mt-2">
            <img
              src={shorts[currentShort].avatar}
              alt={shorts[currentShort].channel}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-white">{shorts[currentShort].channel}</span>
          </div>
          <p className="text-white text-sm mt-2">{shorts[currentShort].description}</p>
        </div>
      </div>
    </div>
  );
}

export default Shorts;
