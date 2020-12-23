import React from 'react';
import { connect } from 'react-redux';
import OrderView from './OrderView';
import UserView from './UserView';
import ShopCarHeader from '../../components/Header';
import api from '../../api';

 
class ShopCar extends React.Component {
    constructor(props) {
    super(props);
    this.state ={
     orderData:[],
    }
    }

    componentWillMount() {
        // 判断是否登录
     if (this.props.userinfo.name) {
        api.order.orderData(this.props.userinfo.name)
        .then(res => res.json())
        .then(data => {
            this.setState({
                orderData:data,
            });
        })
         return;
     } else {
         this.props.history.push('/login');
     }
    
    }

    componentDidMount() {

    }
    render() {
        return(
            <div>
               <ShopCarHeader title="购物车" />
                <UserView user={this.props.userinfo.name} city={this.props.city.cityName}/>
               {
                   this.state.orderData.length >0 ?
<OrderView data={this.state.orderData}/>
:<div>正在加载</div>
               }
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        userinfo:state.userinfo,
        city:state.city
    }
}

export default connect(mapStateToProps)(ShopCar)