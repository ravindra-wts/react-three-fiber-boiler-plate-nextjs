"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./components/Box";

export default function Home() {
  return (
    <main className="w-full h-screen relative">
      <h1 className="text-center bg-red-500 absolute top-0 left-0 right-0 z-10">
        Hello world
      </h1>
      <Canvas className="w-full h-full">
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </main>
  );
}
