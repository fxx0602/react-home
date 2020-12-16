import React from 'react';
import './style.less';

export default class HotCity extends React.Component {
    ClickHaneleCity(cityName) {
      this.props.cityNameHandle(cityName);
    }
    render() {
        return(
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                 <li>
                     <span onClick={this.ClickHaneleCity.bind(this,'北京')}>
                        北京
                     </span>
                 </li>
                 <li>
                     <span onClick={this.ClickHaneleCity.bind(this,'上海')}>
                        上海
                     </span>
                 </li>
                 <li>
                     <span onClick={this.ClickHaneleCity.bind(this,'重庆')}>
                        重庆
                     </span>
                 </li>
                 <li>
                     <span onClick={this.ClickHaneleCity.bind(this,'郑州')}>
                        郑州
                     </span>
                 </li>
                 <li>
                     <span onClick={this.ClickHaneleCity.bind(this,'广州')}>
                        广州
                     </span>
                 </li>
                 <li>
                     <span onClick={this.ClickHaneleCity.bind(this,'武汉')}>
                        武汉
                     </span>
                 </li>
                 <li>
                     <span onClick={this.ClickHaneleCity.bind(this,'成都')}>
                        成都
                     </span>
                 </li>
                </ul>

            </div>

        );
    }
}