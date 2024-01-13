
import { Home } from './Home';
import {motion} from "framer-motion-3d"

import { Avatar } from './Avatar';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { Background } from "./Background"
import { Incubator } from './Incubator';


export const Experience = (props) => {
  const { section } =props
  const { buttonOn, setButton } =props
  const { rotationOn, setRotationOn} = props
  const { value, setValue } = props;
  

  const {viewport} =useThree();
  const characterContainer = useRef();
 
  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(()=> {
    setCharacterAnimation("Falling");
    setTimeout(()=>{
      setCharacterAnimation(section === 1 ? "Typing" : "Typing")
    }, 400)
  }, [section])
  return (
    <>
    <Background />
    <group scale={window.innerWidth<500?0.7:1} position-y={window.innerWidth<500?-3:""}>
    
    <motion.group position={[-0.620905669536915, 0.2619163670338383 - 7.9, 3.9140268375961]}
    rotation={[-3.141592653589793, 0, -3.141592653589793]}
    scale={[1.8, 1.66, 1.8]}
    animate={"" + section}
    transition={{
      duration: 0.6
    }}
    variants={{
      1: {
        
      },
//       2: {
//         y: -viewport.height - 9,
//         x: 0,
// rotateY:3.5,
//       }
    }}
    >
    <Avatar animation={characterAnimation} />
    </motion.group>
    
    <ambientLight intensity={1} />
      <motion.group
      position={[0, -8, 3]}
      scale={[0.6, 0.665, 0.6]}
      rotation-y = {1.575+(value*6.3)/360}
      animate={{
        y: section === 1 ? -8 : -9 ,
      }}>
      <Home />
      {/* <group position={[-1.523, 0.311, -1.119]}
            rotation={[0, 1.569, 0]}
            scale={2.989}
            ref={characterContainer}>
              

      </group> */}
      </motion.group >
      </group>
      <group>
        
      <Incubator buttonOn={buttonOn} setButton={setButton} rotationOn={rotationOn} setRotationOn={setRotationOn} 
       rotation={[-0.2,0,0]}
       position={[0, -17.5, 3]} 
        scale={[1.2, 1.1, 1.2]}/>
      </group>

     
      {/* <motion.group position={[0, -9, 3]}>
      <motion.group scale={[2, 2, 2]} position-y={-1.5}

       animate={{

        y: section === 2 ? -viewport.height : '',}
      }>
      <Avatar animation={section === 1 ? "Falling" : "Standing"} />
      </motion.group>
      </motion.group> */}
      
    </>
  );
};
