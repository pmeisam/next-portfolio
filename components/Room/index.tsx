'use client'
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";

// Define types for your room content
type RoomContentProps = {
  position: THREE.Vector3;
  color: string;
};

// A simple component to represent portfolio items
const PortfolioItem: React.FC<RoomContentProps> = ({ position, color }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Room Component
const Room: React.FC = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  // Positions of camera
  const cameraPositions = [
    new THREE.Vector3(0, 1, 5),
    new THREE.Vector3(2, 1, 2),
    new THREE.Vector3(-2, 1, -1),
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScrollHeight = document.body.offsetHeight - window.innerHeight;
      const sectionProgress = scrollY / totalScrollHeight;

      const cameraIndex = Math.floor(
        sectionProgress * (cameraPositions.length - 1)
      );

      if (cameraRef.current) {
        const cameraPosition = cameraPositions[cameraIndex];

        gsap.to(cameraRef.current.position, {
          x: cameraPosition.x,
          y: cameraPosition.y,
          z: cameraPosition.z,
          duration: 1,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [cameraPositions]);

  return (
    <Canvas>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={cameraPositions[0]}
      />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <PortfolioItem position={new THREE.Vector3(0, 1, 0)} color="tomato" />
      <PortfolioItem position={new THREE.Vector3(2, 1, -2)} color="blue" />
      <PortfolioItem position={new THREE.Vector3(-2, 1, -2)} color="green" />
      {/* Add more items and structure here */}
    </Canvas>
  );
};

export default Room;
