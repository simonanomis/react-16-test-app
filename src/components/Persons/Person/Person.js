import React, {Component} from "react";
import cssClasses from './Person.css'

class Person extends Component {
    render() {
        return (
            <div className={cssClasses.Person}>
                <p onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children }</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>

        )
    }
}

export default Person;