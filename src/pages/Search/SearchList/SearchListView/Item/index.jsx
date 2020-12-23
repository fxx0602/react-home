import React from 'react';
import './style.less';
import { Link } from 'react-router-dom';

import banner1 from '../../../../../static/image/banner1.png';

export default class Item extends React.Component {
    render() {
        var item = this.props.data
        return (
            <div className="list-item">
                <Link to={'/details/'+item.id}>
                <img src={banner1} alt="" />
                <div className="mask">
                    <div className="left">
                        <p>{item.title}</p>
                        <p>{item.houseType}</p>
                    </div>
                    <div className="right">
                        <div className="btn">
                            {item.rentType}
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: item.price + '月' }}></p>
                    </div>
                </div>
                </Link>
            </div>
        );
    }
}
