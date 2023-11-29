import React from "react";
import { Float, Html, Text } from "@react-three/drei";

import Geometries from "components/ThreeComponents/Geometries";
import { DoubleSide } from "three";
import { colors } from "theme/colors";

type Props = {
  rest: any;
  position: any;
};

const AboutPage = ({ position, ...rest }: Props) => {
  const fontProps = {
    font: "./fonts/Inter-Bold.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  return (
    <group position={position}>
      <Geometries position={[8, 2, 10]} />
      {/* <Float floatIntensity={10} rotationIntensity={4}> */}
      <group position={[0, 1, 0]} rotation={[0, 0.3, 0]}>
        <Text
          {...fontProps}
          color={colors.premier.red}
          position={[-0.77, 0.6, 0]}
          fontSize={1}
        >
          I'M MEISAM.
        </Text>
        <Text maxWidth={7} fontSize={0.25} position={[0, -1, 0]}>
          Full-stack software engineer with a background in computer science. I
          am a motivated self-starter with a persistent drive to succeed. I am
          currently seeking new opportunities to learn and develop new skills in
          the field. My passion lies in utilizing development as a means of
          making positive social change by teaching others the value and
          potential of technology. With a focus on building intuitive,
          user-friendly applications, my ultimate goal is to improve the overall
          user experience.
        </Text>
      </group>
      {/* </Float> */}
    </group>
  );
};

export default AboutPage;
