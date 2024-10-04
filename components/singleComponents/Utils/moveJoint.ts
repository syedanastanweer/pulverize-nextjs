import * as THREE from "three";
import { Bone } from "three";
import { getMouseDegrees } from "../../singleComponents/Utils/Utils";

interface mouseObject {
  x: number;
  y: number;
}

export default function moveJoint(
  mouse: mouseObject,
  joint: Bone,
  degreeLimit = 40
) {
  let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit);
  // @ts-ignore
  joint.rotation.xD = THREE.MathUtils.lerp(
    // @ts-ignore
    joint.rotation.xD || 0,
    degrees.y,
    0.1
  );
  // @ts-ignore
  joint.rotation.yD = THREE.MathUtils.lerp(
    // @ts-ignore
    joint.rotation.yD || 0,
    degrees.x,
    0.1
  );
  // @ts-ignore
  joint.rotation.x = THREE.MathUtils.degToRad(joint.rotation.xD);
  // @ts-ignore
  joint.rotation.y = THREE.MathUtils.degToRad(joint.rotation.yD);
}
