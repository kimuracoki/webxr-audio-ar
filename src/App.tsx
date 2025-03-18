import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import WebXRPolyfill from "webxr-polyfill";

const Model = () => {
  const { scene } = useGLTF("/src/asset/giftbox.glb");
  return <primitive object={scene} scale={0.5} />;
};

const App = () => {
  const sessionRef = useRef<XRSession | null>(null);

  useEffect(() => {
    new WebXRPolyfill(); // WebXR Polyfill を適用

    if (navigator.xr) {
      navigator.xr
        .requestSession("immersive-ar", { requiredFeatures: ["local-floor"] })
        .then((session) => {
          console.log("AR セッション開始!", session);
          sessionRef.current = session;
        })
        .catch((error) => {
          console.error("AR セッション開始失敗:", error);
        });
    } else {
      console.error("WebXR に未対応");
    }
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default App;
