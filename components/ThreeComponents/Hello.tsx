import React, { useRef } from "react";
import { useControls } from "leva";
import { Text3D, useMatcapTexture } from "@react-three/drei";

const Hello = ({ ...props }) => {
  const [matcapTexture] = useMatcapTexture("161B1F_C7E0EC_90A5B3_7B8C9B", 256);

  return (
    <group {...props}>
      <Text3D
        castShadow
        receiveShadow
        scale={[2, 2, 3]}
        position={[-3, -1, -0.2]}
        font="./fonts/helvetiker_regular.typeface.json"
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        Hello
        <meshMatcapMaterial matcap={matcapTexture} />
      </Text3D>
    </group>
  );
};

export default Hello;
