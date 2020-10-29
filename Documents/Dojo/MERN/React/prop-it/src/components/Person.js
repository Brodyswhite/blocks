import React,{Component} from 'react';

class Person extends Component{
    constructor(props){
        super(props);
        this.state = {
            age : props.age
        }
    }

    render(){
        const {firstname, lastname, haircolor} = this.props;
        return(
            <div>
                <h2>{lastname}, {firstname}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {haircolor}</p>
                <button onClick={() => this.setState({age: this.state.age +1})}>
                    Birthday for {firstname} {lastname}</button>
            </div>
        );
    }
}

export default Person;