import React from 'react';

export const InstagramColorIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="url(#global-ig-grad)"/>
    <path d="M12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6.5c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5zM17.5 8c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 4h9c1.93 0 3.5 1.57 3.5 3.5v9c0 1.93-1.57 3.5-3.5 3.5h-9C5.57 20 4 18.43 4 16.5v-9C4 5.57 5.57 4 7.5 4zm0 1.5C6.4 5.5 5.5 6.4 5.5 7.5v9c0 1.1.9 2.5 2 2.5h9c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-9z" fill="white"/>
    <defs>
      <linearGradient id="global-ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f09433"/>
        <stop offset="0.25" stopColor="#e6683c"/>
        <stop offset="0.5" stopColor="#dc2743"/>
        <stop offset="0.75" stopColor="#cc2366"/>
        <stop offset="1" stopColor="#bc1888"/>
      </linearGradient>
    </defs>
  </svg>
);

export const LinkedinColorIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#0A66C2"/>
    <path d="M7.5 8H4.5v11h3V8zM6 6.5C5.17 6.5 4.5 5.83 4.5 5S5.17 3.5 6 3.5 7.5 4.17 7.5 5 6.83 6.5 6 6.5zm13.5 12.5h-3v-5.5c0-1.38-.62-2-1.5-2s-1.5.62-1.5 2v5.5h-3V8h3v1.5c1-1.5 2.5-2 4-2 2 0 3 1.5 3 4.5v7z" fill="white"/>
  </svg>
);

export const GithubColorIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#181717" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.48 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.152-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.52-4.477-10-10-10z"/>
  </svg>
);

export const FiverrColorIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#1DBF73"/>
    <path d="M11 18H8.082V10.723H5.975V8.601h2.107V6.751c0-1.636 1.065-2.58 2.654-2.58s1.868.106 2.308.212v2.247c-.201-.064-.537-.106-.906-.106-.55 0-.745.212-.745.658V8.6h2.122v2.123H11.31V18z M17.076 8.37c.84 0 1.52.68 1.52 1.52s-.68 1.52-1.52 1.52s-1.52-.68-1.52-1.52s.68-1.52 1.52-1.52z M15.688 18h2.776v-7.35h-2.776V18z" fill="white" />
  </svg>
);
