import React from 'react';
import Item from './Item';
import './style.less';

export default class SearchListView extends React.Component {
    render() {
        const data = this.props.data;
        return(
       <div className="list-container">
       {
           data.data.map((ele,index) => {
               return <Item data={ele} key={index} />
           })
       }
           </div>
        );
    }
}