import React, {
  Dispatch,
  Ref,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { Canvas, RootState, useFrame } from "@react-three/fiber";
import ErrorBoundary from "../../singleComponents/ErrorBoundary/ErrorBoundary";
import useStore from "../../singleComponents/Hooks/useStore";
import ExampleScene from "../../Home/Scene";
import ErrorMessage from "../../singleComponents/ErrorBoundary/ErrorMessage";
import { PerformanceMonitor } from "@react-three/drei";
import AdaptPixelRatio from "../../singleComponents/Performance/AdaptPixelRatio";
import ImprovedGpu from "../../singleComponents/Performance/ImprovedGPU";

function getMousePos(e: React.MouseEvent<Element, MouseEvent>) {
  return { x: e.clientX, y: e.clientY };
}

export default function CanvasWrapper(props: {
  fwdRef: RefObject<HTMLDivElement | null>;
  setReveal: Dispatch<SetStateAction<boolean>>;
}) {
  const GPUTier = useStore((state) => state.GPUTier);
  const mouse = useRef({ x: 0, y: 0 });

  const onCanvasCreated = (state: RootState) => {
    state.gl.physicallyCorrectLights = true;
    if (state.events.connect) {
      state.events.connect(props.fwdRef.current);
    }
  };

  useEffect(() => {
    console.log(GPUTier);
  }, [GPUTier]);

  return (
    <div className="canvas_wrapper">
      <ErrorBoundary fallback={<ErrorMessage />}>
        <Canvas
          onMouseMove={(e) => (mouse.current = getMousePos(e))}
          onCreated={(state) => {
            onCanvasCreated(state);
          }}
        >
          <PerformanceMonitor
            factor={1}
            step={0.1}
            iterations={4}
            bounds={() => [30, 35]}
            ms={250}
            flipflops={10}
          >
            <ExampleScene setReveal={props.setReveal} />
            <AdaptPixelRatio />
          </PerformanceMonitor>
          <ImprovedGpu />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
