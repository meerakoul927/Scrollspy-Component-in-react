import React , {useRef} from 'react'
import ReactDOM from 'react-dom';
import ScrollSpy from './src/component/ScrollSpy/ScrollSpy';

function App() {

  const currentActiveSection = useRef();
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
     currentActiveSection = {currentActiveSection}
    />
    </div>
  )
}
export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);