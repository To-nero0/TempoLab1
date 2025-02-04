import React from "react";

const PlayButton: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[100px]">
      <button
        className="bg-gray-800 w-14 h-14 rounded-full flex items-center justify-center border-2 border-white cursor-pointer transition-all duration-300 transform hover:bg-gray-900 hover:translate-y-1"
      >
        <div className="relative flex items-center justify-center transform -rotate-6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              d="M17.49 9.59965L5.6 16.7696C4.9 17.1896 4 16.6896 4 15.8696V7.86965C4 4.37965 7.77 2.19965 10.8 3.93965L15.39 6.57965L17.48 7.77965C18.17 8.18965 18.18 9.18965 17.49 9.59965Z"
              fill="#FFFFFF"
            />
            <path
              d="M18.0888 15.4606L14.0388 17.8006L9.99883 20.1306C8.54883 20.9606 6.90883 20.7906 5.71883 19.9506C5.13883 19.5506 5.20883 18.6606 5.81883 18.3006L18.5288 10.6806C19.1288 10.3206 19.9188 10.6606 20.0288 11.3506C20.2788 12.9006 19.6388 14.5706 18.0888 15.4606Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default PlayButton;
