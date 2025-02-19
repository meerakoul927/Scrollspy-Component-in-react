import React from 'react'
import ReactDOM from 'react-dom';
import ScrollSpy from './src/component/ScrollSpy/ScrollSpy';

function App() {
  return (
    <ScrollSpy/>
  )
}
export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);