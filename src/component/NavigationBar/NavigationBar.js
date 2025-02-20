import React from "react";
import { StyledButton, StyledDiv, StyledList } from "./style.js";

function NavigationBar({ menus , navRef , menuRef }) {
  {
    /* we will keep four items in navaigation bar - Home , Contact , About me */
  }

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
