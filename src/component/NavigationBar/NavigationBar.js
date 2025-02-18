import React from 'react'

function NavigationBar() {
{/* we will keep four items in navaigation bar - Home , Contact , About me */}

  return (

    <div
     style = {{
         display : 'flex',
         alignItems:'center',
         justifyContent:'flexEnd'
     }}
    >
        <ul>
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Contact
          </li>

        </ul>
      
    </div>
   
  )
}

export default NavigationBar