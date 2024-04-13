import {
  useGLTF,
  Html,
  Text,
  OrbitControls,
  PerspectiveCamera,
  OrthographicCamera,
  Bounds,
  PresentationControls,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { Mesh } from 'three';

const Coffee = () => {
  const { nodes, materials } = useGLTF('/coffee_mug-uv-map-compressed.glb');
  const cup = useRef<Mesh>(null!);
  const button = useRef(null!);

  // console.log('nodes', nodes);

  // useFrame(({ clock }) => {
  // setTimeout(() => {
  //   cup.current.rotation.y = clock.getElapsedTime() / 5;
  // }, 1);
  // });

  useLayoutEffect(() => {
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

      // gsap.to(cup.current.position, {
      //   x: -1,
      //   z: -0.8,
      //   duration: 1,
      //   delay: 1,
      // });

      // gsap.to(cup.current.rotation, {
      //   z: 0.01,
      //   duration: 1,
      //   delay: 1,
      // });

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

      {/* <PresentationControls
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 1, Math.PI / 1]}
        azimuth={[-Infinity, Infinity]}
        snap={true}
        config={{ mass: 3, tension: 250 }}
      > */}
      <group
        position={[0, 0, 0]}
        scale={6}
        // @ts-ignore
        ref={cup}
        dispose={null}
      >
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore
          geometry={nodes.cup.geometry}
          material={materials.cup}
          scale={[0.5, 1, 0.5]}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore
          geometry={nodes.cup_rim.geometry}
          material={materials.cup}
          position={[0, 0.54, 0]}
        />
        <group position={[0, 0.221, 0]} scale={0.545}>
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Cylinder002.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Cylinder002_2.geometry}
            material={materials.Material}
          />
        </group>
      </group>
      {/* </PresentationControls> */}
      {/* <Text 
        rotation={[0, -0.5, 0]}
        color={'black'}
        fontSize={1}
        position={[2, 0.75, 0.75]}
      >
        Text
      </Text> */}
    </>
  );
};

export default Coffee;
