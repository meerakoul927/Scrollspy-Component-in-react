import React , {useRef} from 'react'
import ReactDOM from 'react-dom';
import ScrollSpy from './src/component/ScrollSpy/ScrollSpy';

function App() {
 const navRef = useRef();
 const sectionRef = useRef();
 const menuRef = useRef();
 
  const menus = ['Home' , 'About' , 'Portfolio' , 'Contact']
  return (
    <div
      style = {{
         width : '100vw',
         height : '100vh',
         position:'relative'
      }}
    >
    <ScrollSpy
     menus = {menus}
     navRef={navRef}
     sectionRef={sectionRef}
     menuRef={menuRef}
    />
    </div>
  )
}
export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);