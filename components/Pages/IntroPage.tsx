import React from "react";

import { motion } from "framer-motion-3d";

import Earth from "components/ThreeComponents/Earth";
import { Text3D, useMatcapTexture } from "@react-three/drei";

type Props = {
  props: any;
};

const IntroPage = ({ props }: Props) => {
  const [matcapTexture] = useMatcapTexture("3B3C3F_DAD9D5_929290_ABACA8", 256);
  const variants = {
    hidden: { opacity: 0, scale: 0.2 },
    visible: { opacity: 1, scale: 0.8 },
  };
  return (
    <group {...props}>
      <group position={[-2.5, 0, -6]}>
        <group scale={0.8}>
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
        <Earth scale={1.5} position-x={4.5} position-y={0.5} />
      </group>

      {/* <group scale={0.8} position={[-2.5, -1.5, -6]}>
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
          I'm Meisam.
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </group> */}
    </group>
  );
};

export default IntroPage;
