import React from 'react';

export default class LoadMore extends React.Component {
    constructor() {
        super();
        this.load = React.createRef();
    }

    componentDidMount(){
        const that = this;
        let timer = null;
        const winHeight = document.documentElement.clientHeight;
        window.onscroll = function(event) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function() {
                if(that.load.current.getBoundingClientRect().top < winHeight) {
                    console.log('快加载更多数据');
                    that.props.onloadMore();
                  }
            },300);
          
        }
    }

    render() {
        return(
<div ref={this.load}>加载更多</div>
        );
    }
}