import React from 'react';
import api from '../../../api';
import DetailsViews from './detailsViews';

export default class DetailData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{}
        }
    }

    componentDidMount() {
      api.details.searchData(this.props.id)
      .then(resp => resp.json())
      .then(data => {
         this.setState({
             data:data,
         })
      });
    }

    render() {
        return(
            <div>
                  {
                this.state.data.imgs ? <DetailsViews data={this.state.data} />
                :
                <div>加载中</div>
            }

            </div>
          
        );
    }
}