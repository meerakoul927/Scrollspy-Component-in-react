import React from "react";
import { StyledButton, StyledDiv, StyledList } from "./style.js";

function NavigationBar({ menus , currentSection}) {
  {
    /* we will keep four items in navaigation bar - Home , Contact , About me */
  }

  return (
    <StyledDiv>
      <StyledList
       
      >
        {menus.map((item) => {
          return (
            <li>
              <StyledButton>{item}</StyledButton>
            </li>
          );
        })}
      </StyledList>
    </StyledDiv>
  );
}

export default NavigationBar;
