import { useEffect } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

const CubeMap = () => {
  const { scene } = useThree();
  const loader = new THREE.CubeTextureLoader();
  const texture = loader.load([
    "./background/cubeMaps/px.png",
    "./background/cubeMaps/nx.png",
    "./background/cubeMaps/py.png",
    "./background/cubeMaps/ny.png",
    "./background/cubeMaps/pz.png",
    "./background/cubeMaps/nz.png",
  ]);

  scene.background = texture;
  return null;
};

export default CubeMap;
