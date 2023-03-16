import { useRef } from 'react';
import { ThreeElements, useFrame, useLoader } from 'react-three-fiber';
import { Mesh, TextureLoader } from 'three';

const Cylinders = (props: ThreeElements['mesh']) => {
  const leftCylinderRef = useRef<Mesh>(null);
  const rightCylinderRef = useRef<Mesh>(null);

  const firstTexture = useLoader(TextureLoader, 'digital.png');
  const secondTexture = useLoader(TextureLoader, 'emotions.png');

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
        <cylinderGeometry args={[0.8, 0.8, 1.3, 30]} />

        <meshStandardMaterial color="lightGray" map={firstTexture} />
      </mesh>

      <mesh
        {...props}
        ref={rightCylinderRef}
        rotation={[0, 0, Math.PI / 2]}
        position={[0.75, 0, 0]}
      >
        <cylinderGeometry args={[0.8, 0.8, 1.3, 30]} />

        <meshStandardMaterial color="lightGray" map={secondTexture} />
      </mesh>
    </>
  );
};

export default Cylinders;
