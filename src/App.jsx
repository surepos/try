import { Canvas, useFrame } from '@react-three/fiber';
import { Interface } from './Interface';
import { Experience } from './Experience';
import './App.css';
import './Project.css'
import { ScrollControls, Scroll, useScroll, OrbitControls } from '@react-three/drei';
import { useEffect, useState, useRef } from 'react';
import { ScrollManager } from './ScrollManager';
import { Menu } from './Menu';
import { MotionConfig, color } from 'framer-motion';
import { Leva } from 'leva';
import * as THREE from 'three';
import { gsap } from "gsap";
import { LoadingScreen } from './LoadingScreen';

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [buttonOn, setButton] = useState(false);
  const [rotationOn, setRotationOn] = useState(false);
  const [ value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  
  
  useEffect(() => {
    setMenuOpened(false);
    
   
  }, [section]);

  
  

 


  return (
    <>
   <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig
        transition={{
          type: 'spring',
          mass: 5,
          stiffness: 500,
          restDelta: 0.001,
          }}>
      <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}  >
        {section===1&&<OrbitControls  enableZoom={false} maxPolarAngle={1.5}  minAzimuthAngle={-Math.PI / 4} maxAzimuthAngle={Math.PI / 4}/>}
       
        {/* <color attach="background" args={['#ffffff']} /> */}
        <ScrollControls pages={5} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />

          <Scroll>
            <Experience section={section} buttonOn={buttonOn} setButton={setButton} rotationOn={rotationOn} setRotationOn={setRotationOn} value={value} setValue={setValue} />
          </Scroll>
          <Scroll html>
            {
              started&& <Interface section={section} setSection={setSection} buttonOn={buttonOn} setButton={setButton} value={value} setValue={setValue}/>
            }
           
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      </MotionConfig >
      <Leva hidden/>
    </>
  )
}

export default App;
