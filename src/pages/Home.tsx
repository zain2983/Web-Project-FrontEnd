import { useEffect, useState } from "react";

interface Video {
  id: number;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  thumbnail: string;
  avatar: string;
}

const accessKey = "EusJ7VabPFmmBXfAtm9ld5O1lrlIfjLahY54ANTTVV3pzLgLyLiMqk11"; // Replace with your Pexels API key
const TILE_COUNT = 15; // Set the number of tiles to generate

function Home() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/curated?per_page=${TILE_COUNT}`,
          {
            headers: {
              Authorization: accessKey
            }
          }
        );
        const data = await response.json();
        
        const generatedVideos = data.photos.map((image: any, index: number) => ({
          id: index + 1,
          title: image.photographer,
          channel: "Pexels",
          views: `${Math.floor(Math.random() * 500)}K`,
          timestamp: `${Math.floor(Math.random() * 10)} days ago`,
          thumbnail: image.src.medium,
          avatar: "https://via.placeholder.com/100"
        }));

        setVideos(generatedVideos);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map((video) => (
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
    </div>
  );
}

export default Home;