"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Environment, PresentationControls } from "@react-three/drei";
import { Van } from '@/components/Van'

const FiberContainer = () => {
  return (
    <div className="flex-grow">
      <Canvas className="">
        <PresentationControls>
          <Van />
        </PresentationControls>
        <Environment preset="forest" />
      </Canvas>
    </div>
  );
};

export default FiberContainer;
