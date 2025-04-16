import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

import Samoyede from "./Samoyede";

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      <ambientLight intensity={0.7} color="#fff4e6" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#000000"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[0, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>

      {/* Curved white arrow line */}


      {/* Label "Moka ❤️" at the start of the arrow */}
      <Text
        position={[2.1, 2.1, 0.5]} 
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Moka, le chien à nourrir
      </Text>
      <group scale={0.12} position={[0, -2, -1]} rotation={[-Math.PI / 1, 0, 0]} castShadow>
        <Samoyede />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
