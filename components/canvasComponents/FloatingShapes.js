import React, { useEffect, useRef } from 'react'
import { EffectComposer, Noise, Bloom, SelectiveBloom, Select, Selection } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { UnrealBloomPass } from 'three-stdlib'

import { Cylinder, Box, Float, Effects, Torus } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

export function FloatingShapes(props) {

  const lightRef = props.lightRef;
  const boxRef = useRef()
  const cylinderRef = useRef()
  const tempLight = useRef()

  return (
    <>
          {/* <Effects disableGamma>
        <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
      </Effects> */}
    {/* <Selection> */}
      <EffectComposer
      autoClear={false}
      multisampling={0}
      >
              {/* <Noise opacity={.6} premultiply blendFunction={BlendFunction.ADD} /> */}

        {/* <Bloom 
          mipmapBlur
          intensity={10}
          luminanceThreshold={0}
        >
          
        </Bloom> */}
      <SelectiveBloom 
        // lights ={[lightRef]}
        selection={[boxRef, cylinderRef]}
        // selectionLayers={[1]}
        // kernelSize={2}
        intensity={6}
        luminanceThreshold={1} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0.8}       
        mipmapBlur
        // radius={1.75}
      />
      </EffectComposer>

    {/* <SelectiveBloom
      lights={[lightRef]} // ⚠️ REQUIRED! all relevant lights
      selection={[boxRef, cylinderRef]} // selection of objects that will have bloom effect
      selectionLayer={10} // selection layer
      intensity={1.0} // The bloom intensity.
      blurPass={undefined} // A blur pass.
      // width={Resizer.AUTO_SIZE} // render width
      // height={Resizer.AUTO_SIZE} // render height
      // kernelSize={KernelSize.LARGE} // blur kernel size
      luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
      luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
    /> */}
    {/* <Select enabled> */}
    {/* <ambientLight ref={tempLight} /> */}
    <Float>
      <Cylinder ref={cylinderRef} args={[.1,.1,5]} scale={.1} position={[-.9,1.7,-2]}> 
        <meshStandardMaterial emissive={'white'} emissiveIntensity={1} toneMapped={false}/>
      </Cylinder>

      <Cylinder ref={boxRef} args={[.1,.1,5]} rotation={[2,4,0]} scale={.2} position={[1,1.6,0]}> 
        <meshStandardMaterial emissive={'white'}  emissiveIntensity={1} toneMapped={false}/>
      </Cylinder>
    </Float>
    {/* </Select> */}
        {/* </Selection> */}

    {/* <Cylinder frustumCulled={false} args={[10,10,10]} scale={10}>
      <meshStandardMaterial/>
    </Cylinder> */}

    {/* <Box /> */}
    </>
  )

}