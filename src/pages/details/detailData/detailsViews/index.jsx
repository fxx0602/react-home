import React from 'react';
import './style.less'
import Swiper from '../../../../components/Swiper';
import DetailsHeader from '../../../../components/Header';
import Tabs from '../../../../components/Tabs';
import CommentView from '../commentView';

// 引入图片
import banner1 from '../../../../static/image/banner2.png';
import banner2 from '../../../../static/image/banner2.png';
import banner3 from '../../../../static/image/banner3.png';



export default class DetailsViews extends React.Component {



    render() {
        const data = this.props.data;
        console.log(data);
        return (
            <div className="detail-info">
                <DetailsHeader title="详情页" />
                <Swiper banners={[banner1, banner2, banner3]} />
                <Tabs>
                    <tab tabname="房屋信息">
                        <h3>{data.title}</h3>
                        <div className="box">
                            <ul>
                                <li>
                                    <span>{data.price}/月</span>
                                    <p>租金</p>
                                </li>
                                <li>
                                    <span>{data.info.type}/月</span>
                                    <p>房型</p>
                                </li>
                                <li>
                                    <span>{data.houseType}</span>
                                    <p>面积</p>
                                </li>
                            </ul>
                        </div>
                        <div className="info">
                            <div className="info-list">
                                <p>楼层：{data.info.level}</p>
                                <p>装修：{data.info.style}</p>
                            </div>
                            <div className="info-list">
                                <p>类型：{data.info.type}</p>
                                <p>朝向：{data.info.orientation}</p>
                            </div>
                            <div className="info-list">
                                <p>年代：{data.info.years}</p>
                            </div>
                        </div>
                    </tab>
                    <tab tabname="房屋评价">
                      <CommentView comments={this.props.comments} />               
                    </tab>

                </Tabs>


            </div>
        );
    }
}