import React, { useEffect, useRef } from 'react';
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei';
import { useSpring, config } from "@react-spring/three";
import { useFrame } from '@react-three/fiber';

export function KeyframedCamera(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/glbs/camera-frames.glb');
  const { actions } = useAnimations(animations, group);
  const cameraRef = useRef();

  // Spring for scroll-based animation
  const [{ y }, setScroll] = useSpring(() => ({
    y: [0], // Initially, fully zoomed (animation start from 0)
    config: config.molasses,
  }));

  useEffect(() => {
    if (actions["camera-animation"]) {
      actions["camera-animation"].play().paused = true;
      // Initially set animation time to 0, meaning fully zoomed in
      actions["camera-animation"].time = 0;
    }
  }, [actions]);

  const handleScroll = () => {
    // Scroll adjusts the y value from 0 (zoomed) to 1 (normal)
    setScroll({
      y: [window.scrollY / (document.body.offsetHeight - window.innerHeight)], 
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply animation frame-by-frame as the scroll happens
  useFrame(() => {
    y.to((yValue) => {
      if (actions["camera-animation"]) {
        actions["camera-animation"].time = actions["camera-animation"].getClip().duration * yValue;
      }
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Camera"
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
  );
}

useGLTF.preload('/glbs/camera-frames.glb');
