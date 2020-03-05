import React, { Component } from 'react';

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>Birthday Button for {props.firstName} {props.lastName} </button>
    );
}
class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            clickCount: 0
        }
    }
    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }
    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {age + this.state.clickCount}</p>
                <p>Hair Color: {hairColor}</p>
                <Button handleClick={this.handleClick} count={this.state.clickCount} firstName = {firstName} lastName = {lastName}> </Button>
            </div>
        );
    }
}
export default PersonCard;