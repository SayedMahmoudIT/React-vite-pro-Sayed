import { Component } from 'react'
import SystemCard from '../Card/SystemCard';

export default class LandingPage extends Component {
    undo = [];
    constructor() {
        super();
        console.log('constructor');

        this.state = {
            username: 'Mohamed',
            address: {
                city: 'Alex',
                street: 'Port Said'
            },
            age: 35,
            frindes: []
        }
    }


    //changeUserName()
    changeUserName = (user) => {
        setTimeout(() => {
            this.setState({ username: user })
        }, 1000);
    }

    undoChange = () => {
        let changes = this.undo.pop();
        console.log(changes);
        this.setState(changes);
    }


    componentDidMount() {
        console.log('componentDidMount');
        //Call API
        //Promise
        //Athink Await
    }

    componentDidUpdate(prevProps, prevState) {
        this.undo.push(prevState);
        console.log(prevProps, prevState, 'componentDidUpdate');
    }

    render() {
        console.log('render');

        //this.changeUserName();
        return <>

            <div className="container">
                <h1>Hello, {this.state.username}</h1>
                <h2>{this.state.address.street},{this.state.address.city}</h2>
                <button className='btn btn-success' onClick={() => { this.changeUserName('Sayed') }}>Click to change userName</button>
                <button className='btn btn-danger' onClick={() => { this.undoChange() }}>undo change</button>
                <button className='btn btn-danger' onClick={this.undoChange}>undo change2</button>
            </div>

            <div className="my-3">
                <div className="row gy-3">
                    <SystemCard col={'col-md-4'} friendName={'Sayed'} email={'sayed@yahoo.com'} />
                    <SystemCard col={'col-md-4'} friendName={'Mohamed'} email={'sayed@yahoo.com'} />
                    <SystemCard col={'col-md-4'} friendName={'Mahmoud'} />
                    <SystemCard col={'col-md-6'} friendName={'Ahmed'} />
                    <SystemCard col={'col-md-6'} friendName={'Elsayed'} />
                    <SystemCard col={'col-md-12'} friendName={'Ali'} email={'sayed@yahoo.com'} />
                </div>
            </div>
        </>
    }
}


// <button className='btn btn-success' onClick={this.changeUserName}>Click to change userName</button> 