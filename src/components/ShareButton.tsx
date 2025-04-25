// src/components/ShareButton.tsx
import React, { useState, useRef, useEffect } from 'react';
import { FaWhatsapp, FaTwitter, FaLink } from 'react-icons/fa'; // Import icons

interface ShareButtonProps {
  url: string; // The URL to share
  title: string; // The title or description for sharing
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null); // Reference for the popup

  const handleShare = (platform: string) => {
    let shareUrl = '';
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title)} ${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        return;
      default:
        return;
    }
    window.open(shareUrl, '_blank');
    setIsOpen(false); // Close the popup after sharing
  };

  // Close the popup when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-600 text-white px-4 py-2 rounded">
        Share
      </button>
      {isOpen && (
        <div ref={popupRef} className="absolute z-10 bg-black shadow-lg rounded mt-2 p-2">
          <div className="flex gap-2">
            <button onClick={() => handleShare('whatsapp')} className="flex items-center">
              <FaWhatsapp className="text-green-500 mr-1" />
              <span>WhatsApp</span>
            </button>
            <button onClick={() => handleShare('twitter')} className="flex items-center">
              <FaTwitter className="text-blue-500 mr-1" />
              <span>Twitter</span>
            </button>
            <button onClick={() => handleShare('copy')} className="flex items-center">
              <FaLink className="text-gray-500 mr-1" />
              <span>Copy Link</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;