import React, { useRef, useState, useEffect} from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { motion, useAnimation } from 'framer-motion';




export function Incubator(props) {
  const { buttonOn, setButton } =props
  const [rotation, setRotation] = useState([-Math.PI, 1.515, -Math.PI]);
  const { rotationOn, setRotationOn} = props
  const { nodes, materials } = useGLTF("models/incub.gltf");
   const handleGroupClick = () => {
    setRotation([-Math.PI, 1.515, -Math.PI])
    setButton(!buttonOn);
    if (!buttonOn) {
      setRotationOn(false);
    }
  };

  useEffect(() => {
    let timeoutId;

    if (buttonOn) {
      setRotationOn(true);

      timeoutId = setTimeout(() => {
        setRotationOn(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [buttonOn]);

  useFrame(() => {
    if (buttonOn) {
      setRotation((prevRotation) => [
        prevRotation[0],
        prevRotation[1] - 0.1,
        prevRotation[2],
      ]);
    }
  });
 
  
  
 //changing position when button 
//rotating dinaol when button clicked
  
 return (
  // <group {...props} dispose={null}>
  //   <directionalLight intensity={1} decay={2} position={[5, 10, 7.5]} />
  //   <group position={[0, 0.622, 0]}>
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes.Cable.geometry}
  //       material={materials.RubberDark}
  //       position={[-1.215, -0.118, 1.873]}
  //       rotation={[0, Math.PI / 2, 0]}
  //       scale={0.581}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes.Cable001.geometry}
  //       material={materials.RubberDark}
  //       position={[-0.032, 0.043, -3.038]}
  //       rotation={[0, Math.PI / 2, 0]}
  //       scale={0.664}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes.Cylinder.geometry}
  //       material={materials.BaseDark}
  //       position={[0, 0, 1.705]}
  //       rotation={[-Math.PI / 2, Math.PI / 2, 0]}
  //       scale={[0.212, 0.074, 0.212]}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes.Cylinder001.geometry}
  //       material={materials.BaseDark}
  //       position={[0, 3.049, 0.747]}
  //       rotation={[Math.PI / 2, 0, 0]}
  //       scale={[0.12, 0.039, 0.12]}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes.Cylinder002.geometry}
  //       material={materials.BaseDark}
  //       position={[-0.752, 3.049, 0.012]}
  //       rotation={[Math.PI / 2, 0, Math.PI / 2]}
  //       scale={[0.12, 0.039, 0.12]}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes.Glass.geometry}
  //       material={materials.Glass}
  //       scale={[1.537, 0.274, 1.537]}
  //     />
  //     <group scale={[1.537, 0.274, 1.537]}>
  //       <mesh
  //         castShadow
  //         receiveShadow
  //         geometry={nodes.Cylinder_1.geometry}
  //         material={materials.BaseGrey}
  //       />
  //       <mesh
  //         castShadow
  //         receiveShadow
  //         geometry={nodes.Cylinder_2.geometry}
  //         material={materials.GreenEmission}
  //       />
  //       <mesh
  //         castShadow
  //         receiveShadow
  //         geometry={nodes.Cylinder_3.geometry}
  //         material={materials.BaseDark}
  //       />
  //       <mesh
  //         castShadow
  //         receiveShadow
  //         geometry={nodes.Cylinder_4.geometry}
  //         material={materials.LightGray}
  //       />
  //     </group>
  //   </group>
  //   <group
  //     position={[-0.005, 1.393, 0.036]}
  //     rotation={buttonOn && rotationOn ? rotation :[-Math.PI, 1.515, -Math.PI] }
  //   >
  //     <skinnedMesh
  //     frustumCulled = {false}
  //       name="EyeLeft"
  //       geometry={nodes.EyeLeft.geometry}
  //       material={materials.Wolf3D_Eye}
  //       skeleton={nodes.EyeLeft.skeleton}
  //       morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
  //       morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
  //     />
  //     <skinnedMesh
  //     frustumCulled = {false}
  //       name="EyeRight"
  //       geometry={nodes.EyeRight.geometry}
  //       material={materials.Wolf3D_Eye}
  //       skeleton={nodes.EyeRight.skeleton}
  //       morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
  //       morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
  //     />
  //     <skinnedMesh
  //     frustumCulled = {false}
  //       name="Wolf3D_Body"
  //       geometry={nodes.Wolf3D_Body.geometry}
  //       material={materials.Wolf3D_Body}
  //       skeleton={nodes.Wolf3D_Body.skeleton}
  //       morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary}
  //       morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences}
  //     />
  //     <skinnedMesh
  //     frustumCulled = {false}
  //       geometry={nodes.Wolf3D_Hair.geometry}
  //       material={materials.Wolf3D_Hair}
  //       skeleton={nodes.Wolf3D_Hair.skeleton}
  //     />
  //     <skinnedMesh
  //     frustumCulled = {false}
  //       name="Wolf3D_Head"
  //       geometry={nodes.Wolf3D_Head.geometry}
  //       material={materials.Wolf3D_Skin}
  //       skeleton={nodes.Wolf3D_Head.skeleton}
  //       morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
  //       morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
  //     />
  //     <skinnedMesh
  //     frustumCulled = {false}
  //       name="Wolf3D_Outfit_Bottom"
  //       geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
  //       material={materials.Wolf3D_Outfit_Bottom}
  //       skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
  //       morphTargetDictionary={
  //         nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary
  //       }
  //       morphTargetInfluences={
  //         nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences
  //       }
  //     />
  //     <skinnedMesh
  //     frustumCulled = {false}
  //       name="Wolf3D_Outfit_Footwear"
  //       geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
  //       material={materials.Wolf3D_Outfit_Footwear}
  //       skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
  //       morphTargetDictionary={
  //         nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary
  //       }
  //       morphTargetInfluences={
  //         nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences
  //       }
  //     />
  //     <skinnedMesh
  //     frustumCulled = {false}
  //       name="Wolf3D_Outfit_Top"
  //       geometry={nodes.Wolf3D_Outfit_Top.geometry}
  //       material={materials.Wolf3D_Outfit_Top}
  //       skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
  //       morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
  //       morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
  //     />
  //     <skinnedMesh
  //     frustumCulled = {false}
  //       name="Wolf3D_Teeth"
  //       geometry={nodes.Wolf3D_Teeth.geometry}
  //       material={materials.Wolf3D_Teeth}
  //       skeleton={nodes.Wolf3D_Teeth.skeleton}
  //       morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
  //       morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
  //     />
  //     <primitive object={nodes.Hips} />
  //   </group>
  //   <group
  //     position={[1.587, 1.05, -1.067]}
  //     rotation={[-Math.PI / 2, 0, Math.PI / 2]}
  //     scale={0.108}
  //   >
  //     <group position={[0, 0, 0.722]} scale={0.849}>
  //       <group position={[0, 0, 0.399]} onClick={handleGroupClick} >
  //         <mesh
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.pushButton.geometry}
  //           material={materials["Material.004"]}
  //           position={buttonOn ? [-10.309, 0.05, -2.661] : [-10.309, 0.05, -1.661]}
  //           scale={1.838}
  //         />
  //       </group>
  //       <mesh
  //         castShadow
  //         receiveShadow
  //         geometry={nodes.Sphere001_0.geometry}
  //         material={materials.BaseGrey}
  //         position={[-10.309, 0.05, -0.699]}
  //         scale={[1.838, 1.838, 0.704]}
  //       />
  //     </group>
  //   </group>
  //   <mesh
  //     castShadow
  //     receiveShadow
  //     geometry={nodes.Circle.geometry}
  //     material={materials.BaseGrey}
  //     position={[1.587, 1.05, -0.12]}
  //     rotation={[0, Math.PI / 2, 0]}
  //     scale={0.338}
  //   />
  //   <mesh
  //     castShadow
  //     receiveShadow
  //     geometry={nodes.Cylinder001_1.geometry}
  //     material={materials.BaseGrey}
  //     position={[1.587, 1.123, -0.12]}
  //     rotation={[0, Math.PI / 2, 0]}
  //     scale={[0.217, 0.047, 0.217]}
  //   />
  //   <mesh
  //     castShadow
  //     receiveShadow
  //     geometry={nodes.Plane.geometry}
  //     material={materials.BaseGrey}
  //     position={[1.587, 1.05, -0.12]}
  //     rotation={[0, Math.PI / 2, 0]}
  //     scale={[0.671, 0.338, 0.427]}
  //   />
  // </group>
  <group {...props} dispose={null}>
  <directionalLight
    intensity={2}
    decay={2}
    position={[0.855, 9.783, 8.092]}
  />
  <group position={[0.012, 1.22, -0.354]} rotation={buttonOn && rotationOn ? rotation :[-0,0,0]} 
  scale={[1, 1.1, 1.1]}>
    <primitive object={nodes.Hips} />
    <skinnedMesh
      name="EyeLeft"
      geometry={nodes.EyeLeft.geometry}
      material={materials.Wolf3D_Eye}
      skeleton={nodes.EyeLeft.skeleton}
      morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
      morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
    />
    <skinnedMesh
      name="EyeRight"
      geometry={nodes.EyeRight.geometry}
      material={materials.Wolf3D_Eye}
      skeleton={nodes.EyeRight.skeleton}
      morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
      morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
    />
    <skinnedMesh
      name="Wolf3D_Head"
      geometry={nodes.Wolf3D_Head.geometry}
      material={materials.Wolf3D_Skin}
      skeleton={nodes.Wolf3D_Head.skeleton}
      morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
    />
    <skinnedMesh
      name="Wolf3D_Teeth"
      geometry={nodes.Wolf3D_Teeth.geometry}
      material={materials.Wolf3D_Teeth}
      skeleton={nodes.Wolf3D_Teeth.skeleton}
      morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
    />
    <skinnedMesh
      geometry={nodes.Wolf3D_Hair.geometry}
      material={materials.Wolf3D_Hair}
      skeleton={nodes.Wolf3D_Hair.skeleton}
    />
    <skinnedMesh
      name="Wolf3D_Outfit_Top"
      geometry={nodes.Wolf3D_Outfit_Top.geometry}
      material={materials.Wolf3D_Outfit_Top}
      skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
    />
    <skinnedMesh
      name="Wolf3D_Outfit_Bottom"
      geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
      material={materials.Wolf3D_Outfit_Bottom}
      skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      morphTargetDictionary={
        nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary
      }
      morphTargetInfluences={
        nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences
      }
    />
    <skinnedMesh
      name="Wolf3D_Outfit_Footwear"
      geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
      material={materials.Wolf3D_Outfit_Footwear}
      skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      morphTargetDictionary={
        nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary
      }
      morphTargetInfluences={
        nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences
      }
    />
    <skinnedMesh
      name="Wolf3D_Body"
      geometry={nodes.Wolf3D_Body.geometry}
      material={materials.Wolf3D_Body}
      skeleton={nodes.Wolf3D_Body.skeleton}
      morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences}
    />
  </group>
  <group
    position={[0, 0.491, -0.305]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={9.056}
  >
    <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface341_Glass_0.geometry}
        material={materials["Glass.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface341_Glow_0.geometry}
        material={materials.Glow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface341_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface341_Metall1_0.geometry}
        material={materials.Metall1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface341_Metall2_0.geometry}
        material={materials.Metall2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface341_Metall_0.geometry}
        material={materials.Metall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface341_Metall_0001.geometry}
        material={materials.Metall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface341_MetallTube_0.geometry}
        material={materials.MetallTube}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface341_Plastic1_0.geometry}
        material={materials.Plastic1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface341_Plastic_0.geometry}
        material={materials.Plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface341_Red1_0.geometry}
        material={materials.Red1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface341_Red_0.geometry}
        material={materials.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface341_Tube1_0.geometry}
        material={materials.Tube1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface341_Tube_0.geometry}
        material={materials.Tube}
      />
    </group>
  </group>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Circle.geometry}
    material={materials.Metall}
    position={[0.014, 0.606, 0.976]}
    rotation={[-2.701, 0.009, -3.134]}
    scale={[0.153, 0.188, 0.16]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder001_1.geometry}
    material={materials["BaseGrey.001"]}
    position={[0.014, 0.644, 0.99]}
    rotation={[-2.701, 0.009, -3.134]}
    scale={[0.098, 0.026, 0.103]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane.geometry}
    material={materials.Metall}
    position={[0.014, 0.606, 0.976]}
    rotation={[-2.701, 0.009, -3.134]}
    scale={[0.303, 0.188, 0.202]}
  />
  <group
    position={[1.587, 1.05, -1.067]}
    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
    scale={0.108}
  >
    <group position={[0, 0, 0.722]} scale={0.849}>
      <group position={[0, 0, 0.399]}>
        <mesh
          castShadow
          receiveShadow
          onClick={handleGroupClick}
          geometry={nodes.pushButton.geometry}
          material={materials["Material.001"]}
          position={buttonOn ? [-22.181, 17.128, -6.91] : [-22.181, 17.128, -6.31]}
          rotation={[0.008, -0.441, 1.565]}
          scale={[0.829, 0.87, 1.021]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001_0.geometry}
        material={materials["BaseGrey.001"]}
        position={[-22.287, 17.126, -5.62]}
        rotation={[0.008, -0.441, 1.565]}
        scale={[0.829, 0.87, 0.391]}
      />
    </group>
  </group>
</group>
 )
}
useGLTF.preload("models/incub.gltf");
