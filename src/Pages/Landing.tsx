import { Canvas } from '@react-three/fiber';
import Coffee from '../components/Coffee/Coffee';
import useWindowDimensions from '../hooks/UseWindowDimensions';
import { useEffect, useState } from 'react';

const Landing = () => {
  const [footerHeight, setFooterHeight] = useState(0);
  const { height } = useWindowDimensions();

  useEffect(() => {
    const footer = document.getElementsByTagName('footer')[0].clientHeight;
    setFooterHeight(footer);
  }, [height]);

  return (
    <div style={{ height: `${height - footerHeight}px` }}>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Coffee />
      </Canvas>
    </div>
  );
};

export default Landing;
