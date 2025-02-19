import React , {useState} from 'react'
import NavigationBar from '../NavigationBar/NavigationBar.js'
import Body from '../Body/Body.js'

function ScrollSpy(props) {
  const {menus } = props;
  const [currentSection , setCurrentSection] = useState();
  return (
   <>
     <NavigationBar
      menus = {menus}
      
     />
     <Body
       
       menus={menus}
      
     />
   </>
  )
}

export default ScrollSpy