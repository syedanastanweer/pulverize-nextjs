import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import {
  OrbitControls,
  Stars,
  Plane,
  Circle,
  MeshReflectorMaterial,
  Cloud,
  Sky,
  Sparkles,
  CameraShake,
  Stats,
  PerspectiveCamera,
  useHelper,
  useEnvironment,
  Environment,
  SpotLight,
  Float,
  Cylinder
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import useStore from "../singleComponents/Hooks/useStore";
import { useTimeline } from "../singleComponents/Hooks/useTimeLine";
import {Abe} from "../canvasComponents/Abe"
import { EffectComposer, Noise, Bloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Smoke from "../canvasComponents/Smoke"
import { KeyframedCamera } from "../canvasComponents/KeyframedCamera"
import { FloatingShapes } from "../canvasComponents/FloatingShapes"
import * as THREE from 'three'

export default function ExampleScene(props: {
  setReveal: Dispatch<SetStateAction<boolean>>;
}) {
  let meshRef = useRef<THREE.Mesh>();
  const { viewport, mouse } = useThree();

  //Importing global scroll function
  const scroll = useStore((state) => state.scroll);

  const GPUTier = useStore((state) => state.GPUTier);

  //Keyframes for scroll based animations
  const keyframes = {
    rotation: [
      { time: 0, val: 0 },
      { time: 500, val: -100, easing: "easeInSine" },
      { time: 1000, val: 100, easing: "easeInSine" },
    ],
  };

  const remapKeyframes = {
    frame: [
      { time: 0, val: 0 },
      { time: 1000, val: 1000, easing: "linear" },
    ],
  };

  const [timeline, axes] = useTimeline(keyframes);
  const [timeRemap, timeAxe] = useTimeline(remapKeyframes);

  useFrame(() => {
    if (meshRef.current !== undefined) {
      meshRef.current.rotateY((mouse.x * viewport.width) / 1500);
      meshRef.current.rotateZ((mouse.y * viewport.height) / 1500);
    }

    // scrubbing through the keyframes using the interpolated scroll value
    if (scroll?.animation.changed) {
      const y = scroll.get()[0];
      // @ts-ignore
      timeRemap.seek(timeRemap.duration * y);
      // @ts-ignore
      timeline.seek(timeAxe.current.frame);
      // @ts-ignore
      // meshRef.current?.rotateY(axes.current.rotation / 1500);
    }
  });
  
  const lightRef = useRef<THREE.PointLight>(null)
  // useHelper(lightRef, THREE.PointLightHelper, 2, 'red')

  // const cameraRef = useRef<THREE.PerspectiveCamera>(null)
  // useHelper(cameraRef, THREE.CameraHelper)

  const envMap = useEnvironment({path: "/cubemap/"})
  // const cameraShakeAmount = 0.02
  return (
    <>
    <EffectComposer>
      <Noise opacity={.5} premultiply blendFunction={BlendFunction.ADD} />
    </EffectComposer>

    <Environment map={envMap} background />
    <Abe />
    {/* <FloatingShapes lightRef={lightRef} /> */}
      <Plane
        args={[1.5, 15, 1]}
        rotation-x={-Math.PI / 2}
        position={[0, 0.01, -1]}
        scale={.5}
      >
        <MeshReflectorMaterial
          resolution={1024}
          blur={[200, 20]}
          mirror={5}
          mixBlur={0.05}
          mixStrength={15}
          transparent
          opacity={0.06}
          color="#555"
          metalness={5}
          roughness={1}
        />
      </Plane>
      {/* <Stats /> */}

      <KeyframedCamera />
      {/* <fog attach="fog" args={['#b764de', 4.5, 11]} /> */}
      {/* <Smoke /> */}
      <pointLight position={[1, 5, 20]} power={700} 
        color={'#e5d4a5'} 
        ref={lightRef}
      />
      {/* <OrbitControls /> */}
   
      <Sparkles
        frustumCulled={false}
        size={4}
        scale={3}
        position={[0,1,0]}
        count={200}
        opacity={.15}
        speed={.2}
        color={'rgba(229,212,165,1)'}  
      />
    </>
  );
}
