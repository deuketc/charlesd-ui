import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Coffee = () => {
  const { nodes, materials } = useGLTF('/coffee_mug-uv-map-compressed.glb');
  const cup = useRef();
  useFrame(({ clock }) => {
    cup.current.rotation.y = clock.getElapsedTime() / 5;
  });
  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <group scale={3.5} ref={cup} dispose={null}>
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
