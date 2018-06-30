import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitLogin, submitRegister, logoutUser } from '../actions/authActions';

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
        this.logout = this.logout.bind(this);
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
        this.props.submitLogin(this.state.login);
    }
    register(e) {
        e.preventDefault();
        this.props.submitRegister(this.state.login);
    }

    logout(){
        this.props.logoutUser();
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
                <p>Logout {this.props.username} ?</p>
                <button onClick={this.logout}> Logout </button>
            </div>
        )
        return (
            <header>{this.props.loggedIn ? loggedInDisplay : notLoggedInDisplay}</header>
        )
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.auth.loggedIn,
        username: state.auth.username
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitLogin, submitRegister, logoutUser }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);