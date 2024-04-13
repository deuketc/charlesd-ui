import { useEffect, useState } from 'react';

const useImagesPreloader = (imageUrls: string[]): boolean => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = imageUrls.map(url => {
      return new Promise<void>(resolve => {
        const image = new Image();
        image.src = url;
        image.onload = () => resolve();
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoaded(true);
    });

    // Clean up event listeners and abort loading if component unmounts
    return () => {
      imagePromises.forEach(promise => promise.catch(() => {}));
    };
  }, [imageUrls]);

  return loaded;
};

export default useImagesPreloader;
