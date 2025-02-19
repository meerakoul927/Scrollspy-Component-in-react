import React from "react";
import { StyledButton, StyledDiv, StyledList } from "./style.js";

function NavigationBar({ menus }) {
  {
    /* we will keep four items in navaigation bar - Home , Contact , About me */
  }

  return (
    <StyledDiv>
      <StyledList
        style={{
          display: "flex",
          gap: "1.333rem",
          listStyleType: "none",
          cursor: "pointer",
        }}
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
