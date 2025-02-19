import React , {useState} from 'react'
import NavigationBar from '../NavigationBar/NavigationBar.js'
import Body from '../Body/Body.js'

function ScrollSpy(props) {
  const {menus , currentActiveSection} = props;
  const [currentSection , setCurrentSection] = useState();
  return (
   <>
     <NavigationBar
      menus = {menus}
      currentSection = {currentSection}
     />
     <Body
       currentActiveSection = {currentActiveSection}
       setCurrentSection={setCurrentSection}
      
     />
   </>
  )
}

export default ScrollSpy