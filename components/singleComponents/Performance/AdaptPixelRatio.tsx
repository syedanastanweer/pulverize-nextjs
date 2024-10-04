import { useDetectGPU, usePerformanceMonitor } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function AdaptPixelRatio() {
  const { gl } = useThree();
  const gput = useDetectGPU();
  //   { factor, fps, refreshrate, frames, averages }
  usePerformanceMonitor({
    onDecline: () => null,
    onIncline: () => null,
    onChange: ({ factor, averages }) => {
      gl.setPixelRatio(0.5 + 0.5 * factor);
    },
    onFallback: ({ factor }) => {
      gl.setPixelRatio(0.5 + 0.5 * factor);
    },
  });

  return null;
}
