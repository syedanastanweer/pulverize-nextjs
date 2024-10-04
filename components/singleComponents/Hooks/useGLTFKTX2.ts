import { useLoader, useThree } from "@react-three/fiber";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { suspend } from "suspend-react";
// @ts-ignore
import { buildGraph } from "@react-three/fiber";

const ktxLoader = new KTX2Loader();
ktxLoader.setTranscoderPath(
  "https://cdn.jsdelivr.net/gh/pmndrs/drei-assets@master/basis/"
);
ktxLoader.setWorkerLimit(6);

const useGLTFKTX2 = (path: string) => {
  const gl = useThree((state) => state.gl);

  return useLoader(GLTFLoader, path, (loader) => {
    ktxLoader.detectSupport(gl);
    // @ts-ignore
    loader.setKTX2Loader(ktxLoader);
  });
};

const useKTX2Loader = (input: Array<string> | string) => {
  const gl = useThree((state) => state.gl);
  ktxLoader.detectSupport(gl);

  const keys = Array.isArray(input) ? input : [input];

  const results = suspend((...keys) => {
    const onProgress = () => {};
    return Promise.all(
      keys.map(
        (keys) =>
          new Promise((res, reject) =>
            ktxLoader.load(
              keys,
              (data) => {
                // @ts-ignore
                if (data.scene) Object.assign(data, buildGraph(data.scene));
                res(data);
              },
              onProgress,
              (error) =>
                reject(new Error(`Could not load ${input}: ${error.message})`))
            )
          )
      )
    );
  }, keys);

  return Array.isArray(input) ? results : results[0];
};

export { useGLTFKTX2, useKTX2Loader };
