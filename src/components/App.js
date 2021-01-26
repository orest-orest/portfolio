import logo from '../logo.svg';
import '../App.css';
import Clock from './clock.js'
import ShowMonth from './ShowMonth.js'
import Background from './backgound-image.js'
import NameInput from  './NameInput.js'
import Weather from './Weather.js'
import Quote from './Quote.js'

function App() {
  return <div className="app">
      <Clock />
      <ShowMonth />
      <Background />
      <NameInput />
      <Weather />
      <Quote />
  </div>

}

export default App;
