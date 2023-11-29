import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

export function Earth({ scale, ...props }) {
  const { nodes, materials } = useGLTF("./models/earth.glb");

  const group = useRef();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += Math.PI / 2000;
    }
  });

  // const glowBlue = new THREE.MeshBasicMaterial({
  //   color: new THREE.Color(0, 0.5, 20),
  //   toneMapped: false,
  // });

  return (
    <group>
      <group scale={scale} {...props} dispose={null}>
        <group ref={group} name="Sketchfab_Scene">
          <group name="Sketchfab_model" scale={0.6}>
            <group name="fc09fa6deb6c45f687e724438fed81adfbx">
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Earth" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Earth_Earth_0"
                      castShadoww
                      receiveShadow
                      geometry={nodes.Earth_Earth_0.geometry}
                      material={materials.Earth}
                    />
                    <mesh
                      name="Earth_Earth_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.Earth_Earth_0_1.geometry}
                      material={materials.Earth}
                    />
                    <mesh
                      name="Earth_Earth_0_2"
                      castShadow
                      receiveShadow
                      geometry={nodes.Earth_Earth_0_2.geometry}
                      material={materials.Earth}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/earth.glb");

export default Earth;
