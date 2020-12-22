import React from 'react';
import Item from './Item';
import './style.less';

export default class SearchListView extends React.Component {

    /**
     * 数据会发生改变时，key坚决杜绝使用index作为唯一索引
     * 
     */
    render() {
        const data = this.props.data;
        return(
       <div className="list-container">
       {
           data.map((ele,index) => {
               return <Item data={ele} key={index} />
           })
       }
           </div>
        );
    }
}