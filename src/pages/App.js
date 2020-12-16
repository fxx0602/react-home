import React from 'react';
import { connect} from 'react-redux';
import * as cityActions from '../actions/city';
import { bindActionCreators } from 'redux';

class App extends React.Component {
  /**
   * 初始化项目
   * 1.城市初始化
   */

   componentDidMount() {
     const city = localStorage.getItem("city");

     this.props.cityActions.initCity({
       cityName:city || '上海',
     })
   }
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    city:state.city,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cityActions:bindActionCreators(cityActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
