import React, { Suspense, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import { useTexture } from "@react-three/drei";

export default function Smoke() {
  const tempObject = useMemo(() => new THREE.Object3D(), []);
  const ref = useRef();
  const texture = useTexture('/images/smokes.png');

  const particles = useMemo(() => {
    const cloudParticles = [];
    for (let p = 0; p < 5; p++) {
      const positionX = Math.random() * 400 - 200;
      const positionZ = Math.random() * 200 - 200;
      const rotationZ = Math.random() * 2 * Math.PI;
      
      cloudParticles.push({
        positionX,
        positionZ,
        rotationZ,
      });
    }
    return cloudParticles;
  },[]);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { positionX, positionZ, rotationZ } = particle;
      tempObject.position.set(positionX, 0, positionZ);
      tempObject.rotation.set(0, 0, rotationZ);
      tempObject.updateMatrix();
      ref.current.setMatrixAt(i, tempObject.matrix);
    });
    particles.forEach((particle) => (particle.rotationZ -= 0.001));
    ref.current.instanceMatrix.needsUpdate = true;
  });


  return (
    <instancedMesh ref={ref} args={[null, null, 40]}>
      <planeBufferGeometry attach="geometry" args={[300, 300]} />
      <meshLambertMaterial
        attach="material"
        map={texture}
        depthWrite={false}
        transparent
        opacity={0.03}
        // position={[0,0,-10]}
      />
    </instancedMesh>
  );
}