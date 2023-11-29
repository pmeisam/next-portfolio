import React from "react";
import {
  MeshReflectorMaterial,
  useMatcapTexture,
  useScroll,
  SpotLight,
  useDepthBuffer,
  Grid,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import IntroPage from "components/Pages/IntroPage";
import AboutPage from "components/Pages/AboutPage";
import AcademyMuseumProjectPage from "components/Pages/AcademyMuseumProjectPage";

const CURR_OTHER_AXIS_CAMERA_POSITION_IN_PAGE = [
  0, -100, 100, -200, 200, -300, 300, -400, 400, -500, 500,
];
const CURR_AXIS_CAMERA_POSITION_IN_PAGE = [
  0, 0, -100, 100, -200, 200, -300, 300, -400, 400, -500,
];

const Objects = () => {
  const scroll = useScroll();
  const [matcapTexture] = useMatcapTexture("392307_B3AE7D_6D5618_847C42", 256);

  const calculateCurrentPage = (offset, totalPages) => {
    return Math.floor(offset / (1 / totalPages));
  };

  const calculatePageOffset = (offset, currentPage, pageHeight) => {
    return offset - currentPage * pageHeight;
  };

  const getCameraPositions = (pageOffset, currentPage, direction) => {
    const movementScale = 1000;
    if (direction === "x") {
      return {
        x:
          pageOffset * movementScale +
          CURR_AXIS_CAMERA_POSITION_IN_PAGE[currentPage],
        z: CURR_OTHER_AXIS_CAMERA_POSITION_IN_PAGE[currentPage],
      };
    } else {
      return {
        z:
          -pageOffset * movementScale +
          CURR_AXIS_CAMERA_POSITION_IN_PAGE[currentPage],
        x: CURR_OTHER_AXIS_CAMERA_POSITION_IN_PAGE[currentPage],
      };
    }
  };

  useFrame(({ camera }) => {
    const totalPages = scroll.pages;
    const currentPage = calculateCurrentPage(scroll.offset, totalPages);
    const pageOffset = calculatePageOffset(
      scroll.offset,
      currentPage,
      1 / totalPages
    );
    const moveDirection = currentPage % 2 === 0 ? "z" : "x";

    if (currentPage < 10) {
      const targetRotationY = moveDirection === "x" ? -Math.PI / 2 : 0;
      camera.rotation.y = THREE.MathUtils.lerp(
        camera.rotation.y,
        targetRotationY,
        0.02
      );
    }

    const { x, z } = getCameraPositions(pageOffset, currentPage, moveDirection);
    camera.position.x = x;
    camera.position.z = z;
    console.log(camera.position);
  });
  const depthBuffer = useDepthBuffer({ frames: 1 });

  return (
    <>
      {/* <ambientLight intensity={8} /> */}
      <IntroPage position={[0, -2, -7]} scale={0.3} />
      <AboutPage position={[0, 0, -80]} />
      <AcademyMuseumProjectPage
        position={[50, 0, -100]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      {/* <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[150, -4, -400]}
      >
        <planeGeometry args={[800, 800]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh> */}
      {/* <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[150, -4, -400]}
      >
        <planeGeometry args={[800, 800]} />
        <meshMatcapMaterial matcap={matcapTexture} />
      </mesh> */}
      <Ground />
      <mesh scale={0.5} position={[20, -2, -100]}>
        <torusKnotGeometry />
        <meshStandardMaterial wireframe color={"hotpink"} />
      </mesh>
      <mesh position={[0, -2, -100]}>
        <boxGeometry />
        <meshStandardMaterial color={"hotpink"} />
      </mesh>
      <mesh position={[100, -2, -100]}>
        <boxGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh position={[100, -2, -200]}>
        <boxGeometry />
        <meshStandardMaterial color={"yellow"} />
      </mesh>
      <mesh position={[200, -2, -200]}>
        <boxGeometry />
        <meshStandardMaterial color={"yellow"} />
      </mesh>
      <mesh position={[200, -2, -300]}>
        <boxGeometry />
        <meshStandardMaterial color={"purple"} />
      </mesh>
      <mesh position={[300, -2, -300]}>
        <boxGeometry />
        <meshStandardMaterial color={"skyblue"} />
      </mesh>
      <mesh position={[300, -2, -400]}>
        <boxGeometry />
        <meshStandardMaterial color={"skyblue"} />
      </mesh>
      <mesh position={[400, -2, -400]}>
        <boxGeometry />
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh position={[400, -2, -500]}>
        <boxGeometry />
        <meshStandardMaterial color={"green"} />
      </mesh>
      <mesh position={[500, -2, -500]}>
        <boxGeometry />
        <meshStandardMaterial color={"green"} />
      </mesh>
      <mesh position={[500, -2, -600]}>
        <boxGeometry />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <mesh position={[600, -2, -600]}>
        <boxGeometry />
        <meshStandardMaterial color={"brown"} />
      </mesh>
      <mesh position={[600, -2, -700]}>
        <boxGeometry />
        <meshStandardMaterial color={"brown"} />
      </mesh>
      <mesh position={[700, -2, -700]}>
        <boxGeometry />
        <meshStandardMaterial color={"pink"} />
      </mesh>
    </>
  );
};

function Ground() {
  const gridConfig = {
    cellSize: 0.5,
    cellThickness: 0.5,
    cellColor: "#6f6f6f",
    sectionSize: 3,
    sectionThickness: 1,
    sectionColor: "#9d4b4b",
    fadeDistance: 30,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true,
  };
  return <Grid position={[0, -1.5, 0]} args={[1000, 1000]} {...gridConfig} />;
}

export default Objects;
