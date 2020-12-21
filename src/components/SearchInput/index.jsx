import React from 'react';
import './index.less';

export default class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values:'',
        }
    }

    onKeyUpHandle(ev) {
        if (ev.keyCode === 13) { //按了回车
          this.props.history.push("/search/"+this.state.values);
        }
    }

    getValuesHandle(ev) {
        this.setState({
            values:ev.target.value,
        })
    }
    render() {
          return (
              <input
              type="text"
              className="search-input"
              value={this.state.values}
              placeholder="请输入搜索内容"
              onKeyUp={ this.onKeyUpHandle.bind(this)}
              onChange={ this.getValuesHandle.bind(this)}
               />

          );
    }
}