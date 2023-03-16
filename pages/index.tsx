import Cylinder from '@/components/cylinder';
import { Canvas } from 'react-three-fiber';

export default function Home() {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      // pixelRatio={window.devicePixelRatio}
      // camera={{
      //   position: [5, 5, 5],
      // }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[0, -100, 0]} />
      {/* <pointLight position={[100, 20, 20]} /> */}
      <Cylinder />
    </Canvas>
  );
}
