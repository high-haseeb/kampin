import React, { useRef } from "react";
import { useGLTF, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Van(props) {
  const { nodes, materials } = useGLTF("/models/Van and house.gltf");
  const modelRef = useRef(null);
  useFrame(() => {
    if (!modelRef.current) return;
    modelRef.current.rotation.y += 0.004;
  });
  return (
    <Center ref={modelRef}>
      <group {...props} dispose={null} scale={6}>
        <mesh
          geometry={nodes.pCube1.geometry}
          material={materials.body}
          position={[0, 0.099, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.046}
        />
        <mesh
          geometry={nodes.pCube8.geometry}
          material={materials.house}
          position={[-0.857, 0.099, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.046}
        />
        <mesh
          geometry={nodes.polySurface1.geometry}
          material={materials.oth}
          position={[0, 0.099, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.046}
        />
      </group>
    </Center>
  );
}

useGLTF.preload("models//Van and house.gltf");
