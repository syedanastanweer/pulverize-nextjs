import { useDetectGPU } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import useStore from "../Hooks/useStore";

export default function ImprovedGpu() {
  const { size } = useThree();

  const GPUT = useDetectGPU();
  const baseResolution = 1920 * 1080;

  const userAgent = navigator.userAgent;

  const setIGPUT = useStore((state) => state.setGPUTier);
  const IGPUT = useStore((state) => state.GPUTier);

  const setImprovedGPUTier = () => {
    // Because the detect-gpu api is broken of firefox we set the IGPUT to the lowest teir on firefox to be safe
    if (userAgent.match(/firefox|fxios/i)) {
      if (GPUT.isMobile) {
        setIGPUT(1);
      } else {
        setIGPUT(4);
      }
    } else {
      // Sets a more accurate teir system by estimating fps capability using the actual size of the canvas
      if (GPUT.fps) {
        // Catch for if fps is undefined
        const fps =
          GPUT.fps && (GPUT.fps * baseResolution) / (size.width * size.height);
        const improvedGPUT =
          fps && fps >= 60
            ? 3
            : fps && fps >= 30
            ? 2
            : fps && fps >= 15
            ? 1
            : 0;
        const GPUTier =
          improvedGPUT < 1
            ? 0
            : GPUT.isMobile
            ? improvedGPUT
            : improvedGPUT + 3;
        setIGPUT(GPUTier);
      } else {
        const GPUTier =
          GPUT.tier < 1 ? 0 : GPUT.isMobile ? GPUT.tier : GPUT.tier + 3;

        return GPUT.tier && setIGPUT(GPUTier);
      }
    }
  };
  //   This is a catch to prevent infinite loops when setting IGPUT to the lowest teir from outside of this component
  if (IGPUT === 4 || IGPUT === 1) {
    return null;
  } else {
    setImprovedGPUTier();
    return null;
  }
}
