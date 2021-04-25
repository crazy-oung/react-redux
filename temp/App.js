import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ColorBox id="red" color="red"></ColorBox>
      <ColorBox id="green"  color="green"></ColorBox>
      <ColorBox id="blue"  color="blue"></ColorBox>
      <ColorBox id="yellow"  color="yellow"></ColorBox>
    </div>
  );
}

function reducer(state, action) {
  if(state == undefined){
    return {color:'red'}
  }
}



var store = Redux.createStore(reducer);
console.log(store.getState());
Redux.createStore();


class ColorBox extends React.Component {
  state = {
    color : this.props.color,
  }


  render() {
    return (
      <div id={this.state.color} className="container">
      <h1>{this.props.color}</h1>
      <p>color(this.state.initNum): {this.state.color}</p>
      <input type="button" value="click" onClick={()=>{
        //  document.querySelector('#'+this.state.color).style.backgroundColor = this.state.color;
         document.querySelector('.container').style.backgroundColor = this.state.color;
      }}/>
    </div>
    )
  }
}


export default App;
