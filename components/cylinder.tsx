import { MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { ThreeElements, useFrame, useLoader } from 'react-three-fiber';
import { DoubleSide, Mesh, RepeatWrapping, TextureLoader } from 'three';

const Cylinders = (props: ThreeElements['mesh']) => {
  const meshRef = useRef();

  const cyliderRef = useRef();

  const leftCylinderRef = useRef<Mesh>(null);
  const rightCylinderRef = useRef<Mesh>(null);

  const firstTexture = useLoader(TextureLoader, 'digital.png');
  firstTexture.wrapS = RepeatWrapping;
  firstTexture.wrapT = RepeatWrapping;
  firstTexture.repeat.set(2, 1);

  const secondTexture = useLoader(TextureLoader, 'emotions.png');
  secondTexture.wrapS = RepeatWrapping;
  secondTexture.wrapT = RepeatWrapping;
  secondTexture.repeat.set(2, 1);

  useFrame(() => {
    leftCylinderRef.current!.rotation.x += 0.01;
    rightCylinderRef.current!.rotation.x -= 0.01;
  });

  return (
    <>
      <mesh
        {...props}
        ref={leftCylinderRef}
        rotation={[0, 0, Math.PI / 2]}
        position={[-0.75, 0, 0]}
      >
        <cylinderBufferGeometry args={[1.3, 1.3, 1.3, 30, 8, true]} />

        <MeshDistortMaterial
          ref={meshRef}
          map={firstTexture}
          roughness={1}
          metalness={0.001}
          bumpScale={0.005}
          clearcoat={0.5}
          clearcoatRoughness={1}
          radius={1}
          distort={0.3}
          side={DoubleSide}
          specularColor={'#fff'}
          specularIntensity={1}
          shadowSide={1}
        />
      </mesh>

      <mesh
        {...props}
        ref={rightCylinderRef}
        rotation={[0, 0, Math.PI / 2]}
        position={[0.75, 0, 0]}
      >
        <cylinderBufferGeometry
          ref={cyliderRef}
          args={[1.3, 1.3, 1.3, 90, 100, true]}
        />
        <MeshDistortMaterial
          ref={meshRef}
          map={secondTexture}
          roughness={1}
          metalness={0.001}
          bumpScale={0.005}
          clearcoat={0.5}
          clearcoatRoughness={1}
          radius={1}
          distort={0.3}
          side={DoubleSide}
          specularColor={'#fff'}
          specularIntensity={1}
          shadowSide={1}
        />
      </mesh>
    </>
  );
};

export default Cylinders;
