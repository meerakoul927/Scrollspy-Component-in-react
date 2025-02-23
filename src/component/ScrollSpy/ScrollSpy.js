import React , {useState} from 'react'
import NavigationBar from '../NavigationBar/NavigationBar.js'
import Body from '../Body/Body.js'

function ScrollSpy(props) {
  const {menus, navRef , menuRef , sectionRef} = props;
  const [currentSection , setCurrentSection] = useState();
  const [navBarHeight , setNavBarHeight] = useState();

  return (
   <>
     <NavigationBar
      menus = {menus}
      navRef={navRef}
      menuRef={menuRef}
      setNavBarHeight={setNavBarHeight}
      navBarHeight={navBarHeight}
     />
     <Body
       
       menus={menus}
      
       sectionRef={sectionRef}
       navBarHeight={navBarHeight}
       setNavBarHeight={setNavBarHeight}
     />
   </>
  )
}

export default ScrollSpy