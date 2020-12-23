import React from 'react';
import LoginView from './LoginView';
import {connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import  * as userActions from '../../actions/user';

class Login extends React.Component{


    onLoginHandler =(user)=> {
       console.log(user);
       console.log(this.props);
       this.props.userInfoActions.loginUser({
           name:user,
       });
       window.history.back(-1);
    }


    render() {
        return(
    <LoginView onLoginHandler={this.onLoginHandler}/>
        );
    }
}


function mapStateToProps(state){
    return{
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return{
        userInfoActions:bindActionCreators(userActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)