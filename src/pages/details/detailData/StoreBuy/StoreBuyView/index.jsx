import React from "react"
import "./style.less"

export default class StoreBuyView extends React.Component{



    render(){
    
        return(
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        this.props.collected ? 
                        <button className="selected o" onClick={this.props.onStoreHandle}>已收藏</button>
                        :
                        <button className="selected" onClick={this.props.onStoreHandle}>收藏</button>
                    }
               
               
                </div>
                <div className="item-container float-right">
                    <button onClick={this.props.onBugHandle}>购买</button>
                </div>
            </div>
        )
    }
}