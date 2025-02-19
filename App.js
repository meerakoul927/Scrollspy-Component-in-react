import React from 'react'
import ReactDOM from 'react-dom';
import ScrollSpy from './src/component/ScrollSpy/ScrollSpy';

function App() {
  const menus = ['Home' , 'About' , 'Portfolio' , 'Contact']
  return (
    <ScrollSpy
     menus = {menus}
    />
  )
}
export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);