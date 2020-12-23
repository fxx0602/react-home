import React from 'react';
import SearchInput from "../../../components/SearchInput";
import { Link } from 'react-router-dom'
import './index.less';


export default class HomeHeader extends React.Component {
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.city}</span>
                    </Link>
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-right float-right">
                    <Link to="/shopCar">
                       <i className="iconfont icon-car"></i>
                    </Link>
                    
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput history={this.props.history} />
                    </div>
                </div>
            </div>
        );
    }
}