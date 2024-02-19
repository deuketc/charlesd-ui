import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';

const Coffee = () => {
  const { nodes, materials } = useGLTF('/coffee_mug-uv-map-compressed.glb');
  const cup = useRef(null);
  // useFrame(({ clock }) => {
  // setTimeout(() => {
  //   cup.current.rotation.y = clock.getElapsedTime() / 5;
  // }, 1);
  // });

  useEffect(() => {
    console.log('cup.current', cup.current);
    let ctx = gsap.context(() => {
      gsap.to(cup.current.scale, {
        y: 3.5,
        x: 3.5,
        z: 3.5,
        duration: 1,
      });

      gsap.to(cup.current.rotation, {
        y: 2.9,
        duration: 1,
      });

      gsap.to(cup.current.rotation, {
        y: 9.18,
        duration: 23,
        delay: 1,
        repeat: -1,
        ease: 'none',
      });

      return () => ctx.revert();
    });
  }, []);

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <group scale={6} ref={cup} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cup.geometry}
          material={materials.cup}
          scale={[0.5, 1, 0.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cup_rim.geometry}
          material={materials.cup}
          position={[0, 0.54, 0]}
        />
        <group position={[0, 0.221, 0]} scale={0.545}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_2.geometry}
            material={materials.Material}
          />
        </group>
      </group>
    </>
  );
};

export default Coffee;
