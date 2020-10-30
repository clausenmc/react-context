import React from 'react';
import { Component } from 'react';

const MyContext = React.createContext();

//This Component will be my provider
class MyProvider extends Component {
    state = {
        name: 'Clausen',
        age: 30
    }
    render() {
        return(
            <MyContext.Provider 
                value={{
                    state: this.state,
                    growAYearOlder : () => this.setState({
                        age: this.state.age +1
                    }) 
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

const Person = (props) => (
    <div>
        How do I access my data here???? 
        <MyContext.Consumer>
            {(context) => (
                <React.Fragment>
                    <p>Name: {context.state.name} </p>
                    <p>Age: {context.state.age} </p>
                    <button onClick={context.growAYearOlder} >Grow Up</button>
                </React.Fragment>
            )}
        </MyContext.Consumer>
    </div>
)

const Family  = (props) => (
    <div>
        Hey I'm Family component
        <Person></Person>
    </div>
)

class GrowAYearOlder extends Component {
    render() {
        return (
            <MyProvider>
                <div>
                    Hey I'm Grow A Year Old Component
                    <Family ></Family>
                </div>

            </MyProvider>
        )
    }
}

export default GrowAYearOlder;