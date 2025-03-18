import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const GiftBox = () => {
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/webxr-audio-ar/giftbox.glb", // `public/` にある場合
      (gltf) => {
        if (modelRef.current) {
          modelRef.current.add(gltf.scene);
        }
      },
      undefined,
      (error) => {
        console.error("GLTF loading error:", error);
      }
    );
  }, []);

  return <group ref={modelRef} />;
};

export default function App() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <GiftBox />
    </Canvas>
  );
}
