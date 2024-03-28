"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PresentationControls } from "@react-three/drei";

const FiberContainer = () => {
  return (
    <div className="w-1/2">
      <Canvas className="">
        <PresentationControls>
          <Model />
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};
const Model = () => {
  const torusRef = useRef<any>(null);
  useFrame(() => {
    if (!torusRef.current) return;
    torusRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={torusRef}>
      <torusKnotGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};
export default FiberContainer;
