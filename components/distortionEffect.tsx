import { Effect } from 'postprocessing';
import { forwardRef, useMemo } from 'react';
import { Uniform } from 'three';

const fragmentShader = /* glsl */ `
  uniform vec3 args;

  void mainUv(inout vec2 uv) {
    uv = vec2(uv.x, uv.y + sin(uv.x * 10.0 * args.x) * 0.1 * args.y * tan(args.z));
  }
`;

let _uArgs: any;

class DisplacementEffect extends Effect {
  constructor({ args = null }: any = {}) {
    super('DisplacementEffect', fragmentShader, {
      uniforms: new Map([['args', new Uniform(args)]]),
    });

    _uArgs = args;
  }

  public update = (renderer: any, inputBuffer: any, deltaTime: any) => {
    // @ts-ignore. @ts-expect-error
    this.uniforms.get('args').value = _uArgs;
  };
}

const Displacement = forwardRef(({ args }: { args?: number[] }, ref) => {
  const effect = useMemo(() => new DisplacementEffect({ args }), [args]);
  return <primitive ref={ref} object={effect} dispose={null} />;
});
Displacement.displayName = 'displacementEffect';
export { Displacement };
