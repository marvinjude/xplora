import React, { useState } from "react";

interface ImageLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc: string;
}

function ImageLoader({ src, fallbackSrc, ...delegated }: ImageLoaderProps) {
  const [state, setState] = useState({
    error: false,
  });

  const onImageError = () => {
    setState((prev) => ({ ...prev, error: true }));
  };

  const { error } = state;
  let imgSrc = !error ? src : fallbackSrc;

  return (
    <img
      alt="icon"
      loading="lazy"
      {...delegated}
      src={imgSrc}
      onError={onImageError}
    />
  );
}

export default ImageLoader;
