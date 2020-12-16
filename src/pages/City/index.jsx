import React from 'react'
import CityHeader from '../../components/Header';
import CurrentCity from './CurrentCity';
import HotCity from './hotCity';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cityActions from '../../actions/city';

/**
 * 城市初始化来源：
 * 
 */

class City extends React.Component {

  onCityNameHandle = (cityName) => {
    this.props.cityActions.updateCity({
      cityName:cityName,
    });
    window.history.back(-1);
    localStorage.setItem("city",cityName);
  }
  render() {
      return (
          <div>
            <CityHeader title="热门城市" />
            <CurrentCity title={this.props.city.cityName} />
            <HotCity cityNameHandle={this.onCityNameHandle} />
            </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    city:state.city,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cityActions:bindActionCreators(cityActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(City);