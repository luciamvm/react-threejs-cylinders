import { useScrollDirection } from '@/hooks/useScrollDirection';
import { GradientTexture, Text } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { Mesh, TextureLoader } from 'three';

const DigitalEmotions = () => {
  const textRef = useRef<Mesh>(null);

  const scrollDirection = useScrollDirection();

  console.log('scrollDirection', scrollDirection);

  const gradient = useLoader(TextureLoader, 'gradient.png');

  const fragmentShader = `
  varying vec2 vUv;
  
  vec3 colorA = vec3(0.912,0.191,0.652);
  vec3 colorB = vec3(1.000,0.777,0.052);
  
  void main() {
    // "Normalizing" with an arbitrary value
    // We'll see a cleaner technique later :)   
    vec2 normalizedPixel = gl_FragCoord.xy/600.0;
    vec3 strokeColor = mix(colorA, colorB, normalizedPixel.x);
  
    gl_FragColor = vec4(strokeColor,1.0);
  }
  
  `;

  useFrame(() => {
    // console.log(textRef.current?.position.x);

    if (scrollDirection == 'down' && textRef.current!.position.x > -5) {
      textRef.current!.position.x -= 0.01;
    } else if (scrollDirection == 'up' && textRef.current!.position.x < 7) {
      textRef.current!.position.x += 0.01;
    }
  });
  return (
    <mesh ref={textRef}>
      {/* <Html
        center
        sprite
        // transform
        distanceFactor={20}
        position={[0, 0, 0]}
        className={'outlineText'}
        zIndexRange={[-999, -9999]}
      >
        Digital Emotions
      </Html> */}

      <Text
        scale={[1, 1, 1]}
        fontSize={2}
        font="AbrilFatface-Regular.ttf"
        fillOpacity={0}
        strokeWidth={'2.5%'}
        strokeColor="#000"
        // strokeOpacity={0}
      >
        Digital Emotions
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshBasicMaterial>
      </Text>
    </mesh>
  );
};

export default DigitalEmotions;
