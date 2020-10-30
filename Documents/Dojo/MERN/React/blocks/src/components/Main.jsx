import React, {Component} from 'react';

export default class Main extends Component{

    render(){
        return (
            <div className="col-8 row p-3 mr-2" style={{height: "400px", backgroundColor: "red"}}>
                {this.props.children}
            </div>
        )
    }
}