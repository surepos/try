import { button } from "leva";
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion';


export const Menu = (props) => {
  const menuSlide = {
    initial: {x: "calc(100% + 100px)"},
    enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
    exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}

 const slide = {
    initial: {x: 80},
    enter: i => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
    exit: i => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}

const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}
  
  const { onSectionChange, menuOpened, setMenuOpened } = props;
  return (
    <>
      <div className="nav-container">
        <div className="navbar">
          <img src="models/me.jpg" alt="Sura" />
          <button
            onClick={() => setMenuOpened(!menuOpened)}
            className={`button-container ${menuOpened ? 'active' : ''}`}>
            <div className="row-1"></div>
            <div className="row-2"></div>
            <div className="row-3"></div>
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">
      <motion.div className={`side-bar ${menuOpened ? 'active' : ''}`}>
        
        <MenuButton icon = "fa-solid fa-circle-question" label = "About" onClick = {()=>onSectionChange(0)}/>
        <MenuButton icon = "fa-solid fa-house" label = "My Home" onClick = {()=>onSectionChange(1)}/>
        <MenuButton icon = " fa-solid fa-bars-progress" label = "Skills" onClick = {()=>onSectionChange(2)}/>
        <MenuButton icon = " fa-solid fa-diagram-project " label = "Projects" onClick = {()=>onSectionChange(3)}/>
        <MenuButton icon = "fa-solid fa-address-book" label = "Contact" onClick = {()=>onSectionChange(4)}/>
        <div className="sidebar-icons">
        <div className='icon-div'><i className="fa-brands fa-discord "></i></div>
        <div className='icon-div'><i className="fa-brands fa-square-instagram"></i></div>
        <div className='icon-div'><i className="fa-brands fa-x-twitter"></i></div>
        <div className='icon-div'><i class="fa-brands fa-facebook-f"></i></div>
        <div className='icon-div'><i className="fa-solid fa-envelope"></i></div>
      
        </div>
        
      </motion.div>
      </AnimatePresence>
    </>
  );
};
 const MenuButton = (props) => {
  const { label, onClick, icon } = props;
  return (
    <button 
    onClick={onClick} className="">
      <i className={icon}></i>
      {label}

    </button>
  )
 }
