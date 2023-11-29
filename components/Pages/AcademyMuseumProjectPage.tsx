import React from "react";

import Frame from "components/ThreeComponents/Frame";

type Props = {
  position: any;
  rotation: any;
};

const AcademyMuseumProjectPage = ({ position, rotation }: Props) => {
  return (
    <group rotation={rotation} position={position}>
      <Frame
        rotation={[0, 0, 0]}
        position={[+3, 0, 0]}
        url={"./images/academy-museum.png"}
      />
    </group>
  );
};

export default AcademyMuseumProjectPage;
