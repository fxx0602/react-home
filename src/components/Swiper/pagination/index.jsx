import React from 'react';
import './style.less';



export default class Pagination extends React.Component {
    render() {
        const { dots = 0, index: currentIndex } = this.props;
        const dotsArr = new Array(dots).fill(1);
        return (
            <div className="swiper-pagination">
                <ul>
                {
                        dotsArr.map((ele, index) => {
                            return (
                                <li className={currentIndex === index ? 'selected' : ''} key={index}></li>
                            )
                        })
                    }


                </ul>

            </div>
        );
    }
}