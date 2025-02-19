import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar.js'
import Body from '../Body/Body.js'

function ScrollSpy(props) {
  const {menus} = props
  return (
   <>
     <NavigationBar
      menus = {menus}
     />
     <Body/>
   </>
  )
}

export default ScrollSpy