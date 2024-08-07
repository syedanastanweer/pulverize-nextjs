import React, { useEffect, useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { useSpring, config } from "@react-spring/three";
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'

export function KeyframedCamera(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/glbs/camera-frames.glb')
  const { actions } = useAnimations(animations, group)
  const cameraRef = useRef()

  useEffect(() => {
    if (actions["camera-animation"] !== undefined) {
      actions["camera-animation"].play().paused = true;
    }
  }, [actions])

  const [{ y }, setScroll] = useSpring(() => ({
    y: [1],
    config: config.molasses
  }))

  const handleScroll = () => {
    setScroll({
      y: [1 - window.scrollY / (document.body.offsetHeight - window.innerHeight)]
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  useFrame(() => {
    y.to((y) => {
      actions["camera-animation"].time = actions["camera-animation"].getClip().duration * y
    })
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Camera"
          position={[0.05, 1.58, 0.91]}
          rotation={[1.55, 0, 0]}
        >
          <PerspectiveCamera
            ref={cameraRef}
            name="Camera_Orientation"
            makeDefault={true}
            fov={22.9}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glbs/camera-frames.glb')
