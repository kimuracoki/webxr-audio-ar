import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";  // ARButtonを使用

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
              child.material = new THREE.MeshStandardMaterial({ color: 0xffffff });
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
  const canvasRef = useRef(null);

  useEffect(() => {
    // AR モード用のボタンを作成
    if (canvasRef.current) {
      const arButton = ARButton.createButton(canvasRef.current);
      document.body.appendChild(arButton);
    }
  }, []);

  return (
    <Canvas ref={canvasRef} camera={{ position: [0, 2, 5] }} shadows>
      {/* 照明の設定 */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* AR 用のコンテンツ */}
      <GiftBox />
    </Canvas>
  );
}
