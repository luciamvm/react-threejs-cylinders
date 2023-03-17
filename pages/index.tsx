import Cylinders from '@/components/cylinder';
import { Canvas } from '@react-three/fiber';

export default function Home() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh', background: 'white' }}>
      <ambientLight intensity={0.3} />

      {/* top light */}
      <directionalLight
        intensity={1}
        position={[0, 2, -1.5]}
        castShadow
        color="#8F79ED"
      />
      {/* bottom light */}
      <directionalLight
        intensity={0.8}
        position={[0, -2, -1]}
        castShadow
        color="#F79CFD"
      />
      {/* front light */}
      <directionalLight intensity={0.3} position={[0, 0, 5]} />
      {/* left light */}
      <directionalLight
        intensity={1}
        position={[-10, 0, 0.5]}
        color="#3A00FF"
      />
      <Cylinders />
    </Canvas>
  );
}
