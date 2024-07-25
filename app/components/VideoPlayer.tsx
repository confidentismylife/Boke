// // components/VideoPlayer.js
// 'use server';

// import React from 'react';
// import ReactPlayer from 'react-player';

// interface UrlProps {
//   url: string;
// }

// const VideoPlayer: React.FC<UrlProps> = ({ url }) => {
//   return (
//     <div className="relative overflow-hidden bg-gray-900 rounded-lg shadow-lg">
//       <div className="aspect-w-16 aspect-h-9">
//         <ReactPlayer
//           url={url}
//           className="react-player"
//           width="100%"
//           height="100%"
//           controls={true}
//         />
//       </div>
//     </div>
//   );
// };

//  export default VideoPlayer;
// // components/VideoPlayer.js
// import React from 'react';

// const VideoPlayer = () => {
//   return (
//     <div className="table_image">
//       <video
//         className="video-player"
//         x5-video-player-type="h5"
//         x-webkit-airplay="true"
//         webkit-playsinline="true"
//         loop
//         autoPlay
//         muted
//         controls
//       >
//         <source src="test.mp4" type="video/mp4" />
//         您的浏览器不支持 HTML5 视频标签。
//       </video>
//     </div>
//   );
// };

'use client';

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

// 定义组件的属性接口
interface VideoPlayerProps {
  publicId: string; // 明确指定publicId的类型为string
}

// 使用定义的接口来指定组件的属性类型
const VideoPlayer: React.FC<VideoPlayerProps> = ({ publicId }) => {
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src={ publicId}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;