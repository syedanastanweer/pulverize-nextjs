import anime from "animejs";
import { useRef, useMemo } from "react";
import { map_obj } from "../Utils/Utils";

interface keyFrameObj {
  time: number;
  val: number;
  easing: string;
  duration: number;
}

export const useTimeline = (keyframes: Object) => {
  const axes = useRef<Object>(); // set axes from keyframe first value

  const timeline = useMemo(() => {
    const axesFromArray = map_obj(
      keyframes,
      (array: keyFrameObj[]) =>
        array.sort((a, b) => (a.time < b.time ? -1 : 1))[0].val // orders keyframe array and gets first value
    );

    axes.current = axesFromArray;

    let tl = anime.timeline({
      targets: axes.current,
      easing: "linear",
      autoplay: false,
      loop: false,
    });

    map_obj(keyframes, (array: keyFrameObj[], axKey: number) => {
      array.sort((a, b) => (a.time < b.time ? -1 : 1));
      array.map(({ time, val, easing = "linear" }, index) => {
        let prvT = index > 0 ? array[index - 1].time : 0;
        const duration = index > 0 ? time - prvT : 0.00001;
        tl.add({ [axKey]: val, duration: duration, easing: easing }, prvT);
      });
    });
    return tl;
  }, [keyframes]);

  return [timeline, axes];
};
