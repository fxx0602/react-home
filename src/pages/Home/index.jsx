import React from 'react'
import FootNav from '../../components/FootNav';
import HomeHeader from './HomeHeader'
import Swiper from '../../components/Swiper';
import HomeHot from './HomeHot';
import { connect} from 'react-redux';


// 引入图片
import banner1 from '../../static/image/banner1.png';
import banner2 from '../../static/image/banner2.png';
import banner3 from '../../static/image/banner3.png';

// 被路由直接包裹的才有history
class Home extends React.Component {
  render() {
      return (
          <div>
            <HomeHeader city={this.props.city.cityName} history={this.props.history} />
            <Swiper banners={ [banner1,banner2,banner3]} />
            <HomeHot city={this.props.city.cityName} />
            <FootNav />
            </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    city:state.city,
  }
}

export default connect(mapStateToProps)(Home);