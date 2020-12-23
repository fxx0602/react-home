import React from "react"
import StoreBuyView from "./StoreBuyView"
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as collectActions from '../../../../actions/collect';

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

    componentDidMount() {
        const flag = this.isStore();
        this.setState({
            collected:flag,
        });
    }

    storeHandle =() => {
        const username = this.props.userinfo.name
        if (username) {
            if (this.isStore()) {
               this.props.collectActions.cancelCollect({
                   id:this.props.id,
               });
               this.setState({
                collected:false,
            });
            } else {
                this.props.collectActions.setCollect({
                    id:this.props.id
                  });
                  this.setState({
                    collected:true,
                });
            }

        } else {
         this.props.history.push("/login")
        }
    }

    /**
     * 收藏判断
     *
     */
    isStore() {
        // 
        const {id,collect } = this.props;
        return collect.some((ele) =>{
            return ele.id === id
        })
    }

    bugHandle = ()=> {
    console.log('买');
    }


    render() {
        return (
            <div>
                <StoreBuyView 
                   collected={this.state.collected}
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
        collect:state.collect,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        collectActions:bindActionCreators(collectActions,dispatch)
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(StoreBuy)