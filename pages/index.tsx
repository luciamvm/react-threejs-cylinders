import Cylinder from '@/components/cylinder';
import { Displacement } from '@/components/distortionEffect';
import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { useState } from 'react';

export default function Home() {
  const [values, setValues] = useState<{
    arg1: number;
    arg2: number;
    arg3: number;
  }>({ arg1: 2.3, arg2: 1.8, arg3: 0.1 });
  console.log('values', values);

  const updateValue = (position: number, value: number) => {
    console.log('uodate values');
    setValues({ ...values, [`arg${position}`]: value });
  };

  const argArray: number[] = [values.arg1, values.arg2, values.arg3];
  return (
    <>
      <div
        style={{
          position: 'absolute',
          right: '10px',
          top: '10px',
          zIndex: 10,
          backgroundColor: 'white',
          width: '200px',
        }}
      >
        <h4>Args</h4>
        <input
          type="number"
          onChange={(event) => {
            updateValue(1, parseFloat(event.currentTarget.value));
          }}
          value={values.arg1}
          style={{ width: '100%', margin: '2px' }}
        />
        <input
          type="number"
          onChange={(event) => {
            updateValue(2, parseFloat(event.currentTarget.value));
          }}
          value={values.arg2}
          style={{ width: '100%', margin: '2px' }}
        />
        <input
          type="number"
          onChange={(event) => {
            updateValue(3, parseFloat(event.currentTarget.value));
          }}
          value={values.arg3}
          style={{ width: '100%', margin: '2px' }}
        />
      </div>

      <Canvas
        style={{ width: '100vw', height: '100vh' }}
        gl={{
          powerPreference: 'high-performance',
          antialias: false,
          stencil: false,
          depth: false,
        }}
        // pixelRatio={window.devicePixelRatio}
        // camera={{
        //   position: [5, 5, 5],
        // }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[0, -100, 0]} />
        {/* <pointLight position={[100, 20, 20]} /> */}
        <Cylinder />
        <EffectComposer>
          <Displacement args={argArray} />
        </EffectComposer>
      </Canvas>
    </>
  );
}
