import React, { Component } from 'react';
import './App.css';
import Headline from './Headline.js';
import InputComp from './InputComp.js';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      words: ['scenery', 'cat', 'food'],
    }
  }
  
  
  addWord = (newWord) => {
    // the string that is passed it which the function is called
    // is available under the variable name "newWord" withing this 
    // function.

    // we make a copy (with the "slice()" method) of the 
    // words array as it currently is:

    // the ".concat()" method allows us to 
    // combine two arrays (or here one array and a string)
    // and return a NEW array. This new array we store in
    // store in the variable "newWords"
    let newWordsArray = this.state.words.concat(newWord);
    
    // overwrite the current words in our state
    // with the updated one
    this.setState({
      words: newWordsArray
    })

  }

  makeParagraph=(element)=>{
    return <p>{element}</p>
  }
  showWords = ()=>{
    let paragraphs = [
        //<p>{this.state.words[0]}</p>,
        //<p>{this.state.words[1]}</p>,
        //<p>{this.state.words[2]}</p>,
        //<p>{this.state.words[3]}</p>
    ];//for loop to fill

   // for(let i=0;i<=this.state.words.length;i++){
     // let currentWord=this.state.words[i];
     // paragraphs.push(<p>{currentWord}</p>);}

  paragraphs=this.state.words.map((words)=>{return <div className="box"><p>{words}</p> </div>} );
    return paragraphs
  }


  

  render() {
    return (
      <div className="App">

        

        <Headline text={"tag your interets"}></Headline> 
        

      

        <InputComp submit={this.addWord}></InputComp>

          <div className="display">
            
          {this.showWords()}

          </div>

      </div>
    );
  }
}

export default App;
