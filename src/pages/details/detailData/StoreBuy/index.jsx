import React from "react"
import StoreBuyView from "./StoreBuyView"
import {connect } from 'react-redux';

class StoreBuy extends React.Component {
    /**
     * 详情页视图页面 - >收藏与购买的业务逻辑 -> 收藏与购买的视图
     * 
     */

    constructor(){
        super();
        this.state = {
            collected:false
        }
    }

    storeHandle =() => {
        console.log('收藏');
        const username = this.props.userinfo.name
        if (username) {
          console.log('收藏实现')
        } else {
         this.props.history.push("/login")
        }

    }

    bugHandle = ()=> {
    console.log('买');
    }


    render() {
        return (
            <div>
                <StoreBuyView
                   onStoreHandle={this.storeHandle}
                   onBugHandle={this.bugHandle}
                />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return{
        userinfo:state.userinfo,
    }
}


export default connect(mapStateToProps)(StoreBuy)