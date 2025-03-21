import React from 'react';
import { Clock, ThumbsUp, History } from 'lucide-react';
import { Link } from 'react-router-dom';

function Library() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Library</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/history" className="bg-[#272727] rounded-lg p-6 hover:bg-[#323232] transition-colors">
          <History className="w-8 h-8 mb-4" />
          <h2 className="text-xl font-semibold mb-2">History</h2>
          <p className="text-gray-400">Watch history and search history</p>
        </Link>

        <Link to="/watch-later" className="bg-[#272727] rounded-lg p-6 hover:bg-[#323232] transition-colors">
          <Clock className="w-8 h-8 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Watch Later</h2>
          <p className="text-gray-400">Videos you've saved for later</p>
        </Link>

        <Link to="/liked-videos" className="bg-[#272727] rounded-lg p-6 hover:bg-[#323232] transition-colors">
          <ThumbsUp className="w-8 h-8 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Liked Videos</h2>
          <p className="text-gray-400">Videos you've liked</p>
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Playlists</h2>
        <div className="bg-[#272727] rounded-lg p-8 text-center">
          <p className="text-gray-400">No playlists yet</p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Create Playlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Library;