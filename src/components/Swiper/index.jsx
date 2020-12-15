import React from 'react';
import './index.less';
import SwipeableViews from 'react-swipeable-views';
import Pagination from './pagination'



export default class Swiper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        }
    }

    handleChangeIndex = (index) => {
        this.setState({
            currentIndex: index,
        })
    }

    render() {
        const { banners } = this.props;

        return (
            <div className="swiper">
                <SwipeableViews onChangeIndex={this.handleChangeIndex}>
                    {
                        banners.map((element, index) => {
                            return (
                                <div className="swiper-view" key={index}>
                                    <img src={element} alt="" />
                                </div>
                            )
                        })
                    }


                </SwipeableViews>
                <Pagination index={this.state.currentIndex} dots={banners.length} />
            </div>
        );
    }
}