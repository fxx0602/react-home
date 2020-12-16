import React from 'react';
import './style.less';


export default class HomeHotView extends React.Component {


    render() {
        const { data = [],title } = this.props;
        return (
            <div className="hotproduct">
                 <h3>{title}</h3>
                <div className="hot-container">
                    <ul className="clear-fix">
                        {
                            data.map((ele, index) => {
                                return (
                                    <li key={ele.id}>
                                        <a href={ele.link}>
                                            <img src={ele.img} alt={ele.title} />
                                            <span>{ele.title}</span>
                                        </a>

                                    </li>
                                )
                            })

                        }

                    </ul>
                </div>

            </div>
        );
    }


}