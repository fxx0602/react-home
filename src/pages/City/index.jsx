import React from 'react'
import CityHeader from '../../components/Header';
import CurrentCity from './CurrentCity';
import HotCity from './hotCity';

export default class City extends React.Component {
  render() {
      return (
          <div>
            <CityHeader title="热门城市" />
            <CurrentCity title="北京" />
            <HotCity />
            </div>
      )
  }
}