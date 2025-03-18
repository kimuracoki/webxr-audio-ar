import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

const GiftBox = () => {
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/webxr-audio-ar/giftbox.glb", // /public/ のパスに合わせてください
      (gltf) => {
        if (modelRef.current) {
          const model = gltf.scene;
          model.traverse((child: any) => {
            if (child.isMesh) {
              child.material = new THREE.MeshStandardMaterial({ color: 0xffffff }); // モデルのマテリアルを標準的なものに設定
            }
          });
          modelRef.current.add(model);
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
    <Canvas camera={{ position: [0, 2, 5] }} shadows>
      {/* 照明の設定 */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* AR 用のコンテンツ */}
      <GiftBox />
    </Canvas>
  );
}
