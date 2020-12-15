import React from 'react'
import FootNav from '../../components/FootNav';
import HomeHeader from './HomeHeader'
import Swiper from '../../components/Swiper';

// 引入图片
import banner1 from '../../static/image/banner1.png';
import banner2 from '../../static/image/banner2.png';
import banner3 from '../../static/image/banner3.png';
export default class Home extends React.Component {
  render() {
      return (
          <div>
            <HomeHeader />
            <Swiper banners={ [banner1,banner2,banner3]} />
            <FootNav />
            </div>
      )
  }
}