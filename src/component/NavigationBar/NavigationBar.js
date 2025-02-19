import React from "react";
import { StyledButton , StyledDiv , StyledList} from "./style.js";

function NavigationBar() {
  {
    /* we will keep four items in navaigation bar - Home , Contact , About me */
  }

  return (
    <StyledDiv
      
    >
      <StyledList
        style={{
          display: "flex",
          gap: "1.333rem",
          listStyleType: "none",
          cursor: "pointer",
        }}
      >
        <li>
          <StyledButton>Home</StyledButton>
        </li>
        <li>
          <StyledButton>Contact</StyledButton>
        </li>
        <li>
          <StyledButton>About</StyledButton>
        </li>
        <li>
          <StyledButton>Contact</StyledButton>
        </li>
      </StyledList>
    </StyledDiv>
  );
}

export default NavigationBar;
