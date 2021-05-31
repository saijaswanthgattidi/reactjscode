import logo from './logo.svg';
import './App.css';
import React, { Component, useState} from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

 function App() {
    const [name, setName]= useState('KOHLI');
    const [name1, setName1]= useState('JASWANTH');
    const [age, setAge]= useState(23);

    const incAge = () => {
      setAge(age+1);
    }
   return (
     <div className="App">
       <form>
        <p>Enter your name:</p>
        <input type="text"
        />
      </form>   
        
        
        <Child1 childName={name} childAge={age} childIncAge={incAge}/>
        <Child2 childName={name1} childAge={age} childIncAge={incAge} />

     </div>
   );
 }

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       name: 'Kohli',
//       age: 23
//     }

//   }
//   incage = () => {
//     let temp = this.state.age;
//     temp=temp+1;
//     this.setState({age: temp});
//   }
//   render() {
//     return(
//        <div className="App">
//          <button onClick={this.incage}>Increment Age</button>
//         <h1>{this.state.name}</h1>
//         <p>{this.state.age}</p>
//       </div>
//     )
//   }  
// }
 export default App;
