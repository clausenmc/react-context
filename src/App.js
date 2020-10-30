import React, {useState} from 'react';
import GrowAYearOlder from './GrowAYearOlder';
import ThemeContext, {theme} from "./ThemeContext";

function PhotosList() {
  const [newTheme, setNewTheme] = useState(theme.light);
  const toggleTheme = () => 
    newTheme === theme.light
    ? setNewTheme(theme.dark)
    : setNewTheme(theme.light)

  
  return(
    <div>
      <ThemeContext.Provider value={theme.light}>
        <div style={newTheme}>
          <p>{JSON.stringify(newTheme)}</p>
          <button onClick={toggleTheme}>Change Theme</button> 
        </div>
      </ThemeContext.Provider>

      <GrowAYearOlder></GrowAYearOlder>
    </div>
  )
}

export default PhotosList;




/* import cx from'classnames';
import {Component} from 'react';
export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state=  {
      counter: 42
    }
    this.handleOnClick= this.handleOnClick.bind(this)
  }
  handleOnClick = (e) => {
    this.state.counter = this.state.counter +1;
  }

  render (){
    return(
      <div>
        <h2 className="counter">{this.state.counter}</h2>
        <button className="counter-btn" type="button" onClick={() => this.setState}>Click</button>
      </div>
    )
  }

} */