import React from 'react';
import api from '../../../api';
import DetailsViews from './detailsViews';

export default class DetailData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{},
            commentData:[],
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

      api.comment.commenthData(this.props.id)
      .then(resp => resp.json())
      .then(data => {
          this.setState({
              commentData:data.data,
          })
      });
    }

    render() {
        return(
            <div>
                  {
                this.state.data.imgs && this.state.commentData ? <DetailsViews id={this.props.id} data={this.state.data} comments={this.state.commentData} history={ this.props.history }  />
                :
                <div>加载中</div>
            }

            </div>
          
        );
    }
}