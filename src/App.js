import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter'
import FirstComponent from './learning-example/FirstComponent/FirstComponent';
import SecondComponent from './learning-example/SecondComponent/SecondComponent';
import ThirdComponent from './learning-example/ThirdComponent/ThirdComponent';

class App extends React.Component {
 render() {
   return (
     <div className = "App">
      <Counter/>
     </div>
   );
 }
}

class LearningExamples extends React.Component {
  render() {
    return (
      <div className = "App">
       <h1>Hello World</h1>
       <FirstComponent/>
       <SecondComponent/>
       <ThirdComponent/>
      </div>
    );
  }
}

export default App;
