import { Image, Text, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { easing } from "maath";
import * as THREE from "three";

export default function Frame({ url, c = new THREE.Color(), ...props }) {
  const image = useRef();
  const frame = useRef();
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const isActive = true;
  useCursor(hovered);
  useFrame((state, dt) => {
    if (image.current && frame.current) {
      image.current.material.zoom = 1;
      // 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
      easing.damp3(
        image.current.scale,
        [
          0.85 * (!isActive && hovered ? 0.85 : 1),
          0.9 * (!isActive && hovered ? 0.905 : 1),
          1,
        ],
        0.1,
        dt
      );
      easing.dampC(
        frame.current.material.color,
        hovered ? "orange" : "white",
        0.1,
        dt
      );
    }
  });
  return (
    <group {...props}>
      <mesh
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[3, 2, 0.05]}
        position={[0, 0, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.7]}
          url={url}
        />
      </mesh>
      <Text
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        position={[0.55, 2, 0]}
        fontSize={0.025}
      >
        www.AcademyMuseum.org
      </Text>
    </group>
  );
}
