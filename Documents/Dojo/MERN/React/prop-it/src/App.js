import React,{Component} from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      person: []
    }
  }
  render(){
    return(
    <div className="wrapper">
      <div>
        <Person
          lastname ="Doe" firstname = "Jane"
          age = {45}
          haircolor = "Black"
        />
        <Person
          lastname ="Smith" firstname = "John"
          age = {88}
          haircolor = "Brown"
        />
        <Person
          lastname ="Fillmore" firstname = "Millard"
          age = {55}
          haircolor = "Brown"
        />
        <Person
          lastname ="Smith" firstname = "Maria"
          age = {62}
          haircolor = "Brown"
        />
      </div>
    </div>
    );
  }
}

export default App;
