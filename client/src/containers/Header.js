import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitLogin, submitRegister } from '../actions/authActions';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            login: {
                username: '',
                password: ''
            }
        }

        this.updateInputs = this.updateInputs.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    updateInputs(e) {
        let userInfo = Object.assign({}, this.state.login);
        userInfo[e.target.id] = e.target.value;
        this.setState({
            login: userInfo
        });
        console.log(this.props);
    }
    login(e) {
        e.preventDefault();
        this.props.dispatch(submitLogin(this.state.login))
    }
    register(e) {
        e.preventDefault();
        this.props.dispatch(submitRegister(this.state.login))
    }
    render() {
        const notLoggedInDisplay = (
            <div>
                <h1>President</h1>
                <form className='login' onSubmit={this.login}>
                    <label for="username">Username</label><br/>
                    <input name='username' id='username' type='text' 
                        onChange={this.updateInputs} 
                        value={this.state.username}
                    /><br/>
                    <label for="password">Password</label><br/>
                    <input name='password' id='password' type='password' 
                        onChange={this.updateInputs} 
                        value={this.state.password}
                    /><br/>
                    <button id='login' type='submit'>Log In</button>
                    <button id='register' onClick={this.register}>Register</button>
                    <br/><br/>
                </form>
            </div>
        )
        const loggedInDisplay = (
            <div>
                <h1>President</h1>
                <p>{this.props.username}</p>
            </div>
        )
        return (
            <header>{this.props.loggedIn ? loggedInDisplay : notLoggedInDisplay}</header>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        loggedIn: state.auth.loggedIn,
        username: state.auth.username
    };
}
export default connect(mapStateToProps)(Header);