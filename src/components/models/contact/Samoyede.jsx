import { useGLTF } from "@react-three/drei";

export function Samoyede(props) {
  const { nodes, materials } = useGLTF(
    "/models/samoyede.glb"
  );

  return (
    <group {...props} dispose={null}>
      {/* Depending on the model structure, update the node and material names */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Samoyed}
      />
    </group>
  );
}

useGLTF.preload("/models/samoyede.glb");

export default Samoyede;
