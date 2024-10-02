import React, { Dispatch, SetStateAction, RefObject } from "react";
import { Canvas, RootState } from "@react-three/fiber";
import ErrorBoundary from "../../singleComponents/ErrorBoundary/ErrorBoundary";
import useStore from "../../singleComponents/Hooks/useStore";
import ExampleScene from "../../Home/Scene";
import ErrorMessage from "../../singleComponents/ErrorBoundary/ErrorMessage";
import { PerformanceMonitor } from "@react-three/drei";
import AdaptPixelRatio from "../../singleComponents/Performance/AdaptPixelRatio";
import ImprovedGpu from "../../singleComponents/Performance/ImprovedGPU";

const CanvasWrapper = (props: {
  fwdRef: RefObject<HTMLDivElement>;
  setReveal: Dispatch<SetStateAction<boolean>>;
}) => {
  const GPUTier = useStore((state) => state.GPUTier);

  const onCanvasCreated = (state: RootState) => {
    state.gl.physicallyCorrectLights = true;
    if (state.events.connect && props.fwdRef.current) {
      state.events.connect(props.fwdRef.current);
    }
  };

  return (
    <div className="canvas_wrapper">
      <ErrorBoundary fallback={<ErrorMessage />}>
        <Canvas
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
};

export default CanvasWrapper;
