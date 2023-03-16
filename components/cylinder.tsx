import { useRef } from 'react';
import { ThreeElements, useFrame, useLoader } from 'react-three-fiber';
import { Mesh, RepeatWrapping, TextureLoader } from 'three';

const Cylinders = (props: ThreeElements['mesh']) => {
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
        <cylinderGeometry args={[1.3, 1.3, 1.3, 30]} />

        <meshStandardMaterial color="lightGray" map={firstTexture} />
      </mesh>

      <mesh
        {...props}
        ref={rightCylinderRef}
        rotation={[0, 0, Math.PI / 2]}
        position={[0.75, 0, 0]}
      >
        <cylinderGeometry args={[1.3, 1.3, 1.3, 30]} />
        <meshStandardMaterial
          color="lightGray"
          map={secondTexture}
          roughness={0.3}
        />
      </mesh>
    </>
  );
};

export default Cylinders;
