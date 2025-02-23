import React , {useEffect , useState} from "react";
import { StyledButton, StyledDiv, StyledList } from "./style.js";

function NavigationBar({ menus , navRef , menuRef, navBarHeight , setNavBarHeight }) {
  {
    /* we will keep four items in navaigation bar - Home , Contact , About me */
  }

  const [menuBarHeight, setMenuBarHeight] = useState()
  useEffect(()=>{
       const navHeight = navRef.current.offsetHeight;
       setNavBarHeight(navHeight);

  },[navRef]);
  useEffect(()=>{
    const menuHeight = menuRef.current.offsetHeight;
    setMenuBarHeight(menuHeight);
  },[menuRef]);

  console.log("menu and nav height",navBarHeight,menuBarHeight)
  return (
    <StyledDiv
      ref = {navRef}
    >
      <StyledList
       
      >
        {menus.map((item) => {
          return (
            <li
              ref={menuRef}
            >
              <StyledButton>{item}</StyledButton>
            </li>
          );
        })}
      </StyledList>
    </StyledDiv>
  );
}

export default NavigationBar;
