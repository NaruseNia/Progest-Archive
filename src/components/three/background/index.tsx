import { useMemo } from "react";
import { useFrame } from "@react-three/fiber"
import { NoiseShader } from "../shader";

export const NoiseBackground = () => {
  const shaderArgs = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 }
    },
    vertexShader: NoiseShader.vertexShader,
    fragmentShader: NoiseShader.fragmentShader
  }), [])

  useFrame(() => {
    shaderArgs.uniforms.uTime.value++;
  })

  return (
    <group>
      <ambientLight />
      <mesh>
        <planeGeometry args={[window.innerWidth, window.innerHeight, 1, 1]} />
        <shaderMaterial
          args={[shaderArgs]}
          transparent
          depthTest={false}
          depthWrite={false} />
      </mesh>
    </group>
  )
}
