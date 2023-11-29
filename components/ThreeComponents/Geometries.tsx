import * as THREE from "three";
import { useMemo } from "react";
import { Float } from "@react-three/drei";
import { MathUtils } from "three";
import { colors } from "theme/colors";

const material = new THREE.MeshStandardMaterial({
  color: colors.premier.red,
  wireframe: true,
});
const geometries = [
  { geometry: new THREE.TetrahedronGeometry(2) },
  { geometry: new THREE.CylinderGeometry(0.8, 0.8, 2, 32) },
  { geometry: new THREE.ConeGeometry(1.1, 1.7, 32) },
  { geometry: new THREE.SphereGeometry(1.5, 16, 16) },
  { geometry: new THREE.IcosahedronGeometry(2) },
  { geometry: new THREE.TorusGeometry(1.1, 0.35, 16, 32) },
  { geometry: new THREE.OctahedronGeometry(2) },
  { geometry: new THREE.SphereGeometry(1.5, 32, 32) },
  { geometry: new THREE.BoxGeometry(2.5, 2.5, 2.5) },
];

export default function Geometries({ position }) {
  const n = 20;
  const randProps = useMemo(
    () =>
      Array.from(
        { length: n },
        () => geometries[Math.floor(Math.random() * geometries.length)]
      ),
    []
  );
  return randProps.map((prop) => {
    return (
      <group position={position}>
        <Float>
          <mesh
            scale={MathUtils.randFloat(0.25, 0.5)}
            position={[
              MathUtils.randFloat(-4, 4),
              MathUtils.randFloat(-4, 4),
              MathUtils.randFloat(-4, 4),
            ]}
            geometry={prop.geometry}
            material={material}
          />
        </Float>
      </group>
    );
  });
}
