import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export function Abe(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/glbs/AbeTwo.glb')
  const { actions, mixer } = useAnimations(animations, group)

  useEffect(() => {
    if (mixer && animations.length) {
      // Play all animations if available
      animations.forEach((clip) => {
        const action = mixer.clipAction(clip, group.current)
        action.reset().fadeIn(0.5).play()
      })
      console.log('All available animations are playing')
    } else {
      console.error('No animations or mixer found')
    }
  }, [animations, mixer])

  // Debug statements to check loaded nodes, materials, and animations new
  console.log('Loaded nodes:', nodes)
  console.log('Loaded materials:', materials)
  console.log('Loaded animations:', animations)
  console.log('Actions:', actions)

  return (
    <group ref={group} {...props} dispose={null} scale={[2, 2, 2]}>
      <group name="Scene">
        {Object.keys(nodes).map((key) => {
          const node = nodes[key]
          if (node.type === 'SkinnedMesh') {
            return (
              <skinnedMesh
                key={key}
                frustumCulled={false}
                geometry={node.geometry}
                material={materials[node.material.name]}
                skeleton={node.skeleton}
              />
            )
          } else if (node.type === 'Object3D') {
            return <primitive key={key} object={node} />
          } else {
            return null
          }
        })}
      </group>
    </group>
  )
}

useGLTF.preload('/glbs/Abe.glb')

// Usage example with Canvas
export default function App() {
  return (
    <Canvas>
      <Abe position={[0, 0, 0]} />
    </Canvas>
  )
}
