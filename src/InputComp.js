import React, { Component } from 'react';
import './App.css';


//EXPLANATION:

//This component renders an input element and a button.

//Moreover, it is responsible for (A) keeping track
//of the content of the input box and (B) reporting that
//content back to its parent component when the SUBMIT button
//is pressed.

//(A) is achieved by attaching a "onChange" (line 53) event handler 
//to the input element -> every time the content of the input box
//changes, a function we choose (in this case the "updateWord"
//function) is called. In this function we can retrieve the actual
//text (value) of the input field via the "event">"target" object.
//Once we have the value, we update the state (that is the state of
//this very component) with it.

//(B) is achieved by attaching a "onClick" (line 54) event handler to 
//the button. Everytime the button is clicked, the "submitWord" 
//function is called. Inside that function we read the current value
//of the inpurt field from this component's state ("this.state.currentWord")
//and then pass it into a function that the parent component has 
//given to this component in the form of a prop ("this.props.submit"). 
//As defined in the parent component, that function then adds the new
//word to the words array in the parent's state.



class InputComp extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentWord: "",
    }
  }
  
  updateWord = (event) => {
    this.setState({
      currentWord: event.target.value
    });
  }
  submitWord = () => {
    this.props.submit(this.state.currentWord);
  }

 

  render() {
    return (
      <div className="inputComp">
        <input placeholder="Enter your tag" onChange={this.updateWord}></input> 
        <button onClick={this.submitWord}>SUBMIT</button>
      </div>
    );
  }
}

export default InputComp;
