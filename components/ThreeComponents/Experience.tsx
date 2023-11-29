"use client";
import React, { Suspense } from "react";
import { Perf } from "r3f-perf";
import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  ContactShadows,
  Environment,
  RandomizedLight,
  Sparkles,
  Stats,
} from "@react-three/drei";

import Scene from "components/ThreeComponents/Scene";
import CubeMap from "components/ThreeComponents/CubeMap";
// import Loader from "components/Loader";
// import CubeMap from "components/CubeMap";

const Experience = ({ homeData }) => {
  return (
    <>
      <Canvas shadows>
        <Perf position="bottom-right" />
        {/* <Suspense fallback={<Loader />}> */}
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#202020", 5, 20]} />
        <hemisphereLight groundColor="red" />
        {/* <AccumulativeShadows
          frames={100}
          color="#9d4b4b"
          colorBlend={0.5}
          alphaTest={0.9}
          scale={20}
        >
          <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
        </AccumulativeShadows> */}
        <Environment background preset="dawn" blur={0.8} />
        <ContactShadows
          position={[0, -3, 0]}
          opacity={0.7}
          scale={40}
          blur={1}
        />

        <Scene homeData={homeData} />
        <CubeMap />
        {/* <Sparkles count={20000} position={[200,0,0]} scale={[600, 100, 600]} size={2} speed={2} /> */}

        <Stats />
        {/* </Suspense> */}
      </Canvas>
    </>
  );
};

export default Experience;
