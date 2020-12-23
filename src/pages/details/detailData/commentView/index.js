import React from 'react';
import Item from './Item';


export default class CommentView extends React.Component {
    render() {
        return(
            <div className="comment-list">
                {
                   this.props.comments.map((ele,index) => {
                       return <Item  key={index} data={ele}/>
                   }) 
                }

            </div>
        );
    }
}