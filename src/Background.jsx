import { Sphere, Environment, Stars } from "@react-three/drei"
import { useRef, useEffect } from "react";
import * as THREE from 'three';
import { useScroll } from "@react-three/drei";
import { gsap } from "gsap"
import { useFrame } from '@react-three/fiber';
import { Gradient } from "lamina";

export const Background = () => {
    const material = useRef();
    const color = useRef({
        color: "#232946",
         
    });
   
    const data = useScroll();
    const timeLine = useRef();

    useFrame(() => {
        timeLine.current.progress(data.scroll.current);
        material.current.color = new THREE.Color(color.current.color);
      });

    useEffect(()=>{
        timeLine.current = gsap.timeline();
        timeLine.current.to(color.current, {
            color:  "#7a7ca5"
        });
       
        timeLine.current.to(color.current, {
            color: "#7a7ca5"
        });
        timeLine.current.to(color.current, {
            color: "#faeee7"
        });
        timeLine.current.to(color.current, {
            color: "#212121"
        });
       
        
    }, []);
    return(
        <group>
            <Sphere scale={40}>
                <meshBasicMaterial ref={material} side={THREE.BackSide}  toneMapped={false}/>
            </Sphere>
            {/* <Stars/>
            <mesh position={[0, 0, 0]} >
            <planeBufferGeometry args={[100, 100]}/>
            <meshLambertMaterial ref={material}/>
           </mesh> */}
            
          
           
        </group>
    )
}











// import { Sphere, Environment } from "@react-three/drei"
// import { useRef, useEffect } from "react";
// import * as THREE from 'three';
// import { useScroll } from "@react-three/drei";
// import { gsap } from "gsap"
// import { useFrame } from '@react-three/fiber';
// import { LayerMaterial, Gradient} from "lamina"
 


// export const Background = () => {
//     const material = useRef();
//     const gradient = useRef();
//     const data = useScroll();
//     const timeLine = useRef();

//     // Define an array of colors
//     const colors = [
//         new THREE.Color("blue"),
//         new THREE.Color("white"),
//         new THREE.Color("black")
// ,
//         new THREE.Color("red"),
//         new THREE.Color("black"),
//         // Add more colors as needed
//     ];

//     useFrame(() => {
//         timeLine.current.progress(data.scroll.current);

//         // Calculate dynamic gradient color based on scroll position
//         const colorIndex = Math.floor(data.scroll.current * (colors.length - 1));
//         const dynamicColorA = colors[colorIndex];
//         const dynamicColorB = colors[colorIndex + 1] || colors[colorIndex]; // Handle end of array

//         // Update Gradient colors
//         gradient.current.colorA = dynamicColorA;
//         gradient.current.colorB = dynamicColorB;

//         // Update material color
//         material.current.color = dynamicColorA.clone().lerp(dynamicColorB, data.scroll.current * (colors.length - 1) - colorIndex);
//     });

//     useEffect(() => {
//         timeLine.current = gsap.timeline();
//         timeLine.current.to(data.scroll, {
//             value: 1, // Adjust this value based on your scroll range
//             duration: 1,
//             ease: 'power2.out',
//             onUpdate: () => {
//                 // Update material color during the animation
//                 material.current.color = new THREE.Color(data.scroll.current);
//             },
//         });
//     }, [data.scroll]);

//     return (
//         <group>
//             <Sphere scale={[40, 40, 40]}>
//                 <meshBasicMaterial ref={material} side={THREE.BackSide} toneMapped={false} />
//                 <LayerMaterial lighting="physical" transmission={1} side={THREE.BackSide}>
//                     <Gradient
//                         ref={gradient}
//                         colorA={colors[0]}
//                         colorB={colors[1]}
//                         axes="y"
//                         start={0}
//                         end={-0.7}
//                     />
//                 </LayerMaterial>
//             </Sphere>
//         </group>
//     );
// };
