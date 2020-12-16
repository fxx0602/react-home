import React from 'react';
import api from '../../../api';
import HomeHotView from './HomeHotView';
// 引入图片

import banner4 from '../../../static/image/banner4.png';
import banner5 from '../../../static/image/banner5.png';


export default class HomeHot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homehot1:[],
            homehot2:[],
        }
    }

    componentDidMount() {
        api.homehot.homehot1Data()
        .then(res => res.json())
        .then(data => {
            for(let i=0;i<data.length;i++) {
                data[i].img = banner4;
            }
            this.setState({
                homehot1:data,
            })
        });
        console.log('请求后');

        api.homehot.homehot2Data()
        .then(res => res.json())
        .then(data => {
            for(let i=0;i<data.length;i++) {
                data[i].img = banner5;
            }
            this.setState({
                homehot2:data,
            })
        })

    }

    render() {
        const { homehot1,homehot2} = this.state;
        return (
         <div>
             {
                 homehot1.length > 0 ? <HomeHotView data={homehot1} title="热销单品" /> : <div>正在请求数据</div>
             }
             {
                 homehot2.length > 0 ? <HomeHotView data={homehot2} title="家庭常用" /> : <div>正在请求数据</div>
             }
         </div>
        );
    }


}