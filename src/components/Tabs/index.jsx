import React from 'react';
import './style.less';

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex:0,
        }
    }

    /**
     * 内容非固定，获取具体的div结构
     */


     check_title_index(index) {
         return index === this.state.currentIndex ? 'Tab_title active' : 'Tab_title';
     }

     check_item_index(index) {
        return index === this.state.currentIndex ? 'show' : 'hide';
    }

     clickHandle(index) {
       this.setState({
           currentIndex:index,
       })
     }

  render() {
      return (
          <div>
             <div className="Tab_title_wrap">
                {
                    React.Children.map(this.props.children,(ele,index) => {
                       return(
                           <div className={this.check_title_index(index)} onClick={this.clickHandle.bind(this,index)}> 
                              {ele.props.tabname}
                           </div>
                       )
                    })
                }
             </div>
             <div className="Tab-item-wrap">
             {
                    React.Children.map(this.props.children,(ele,index) => {
                       return(
                           <div className={index === this.state.currentIndex ? 'show' : 'hide'}> {ele.props.children}</div>
                       )
                    })
                }
             </div>
            </div>
      )
  }
}