import React from 'react';
import DetailData from './detailData';

export default class Details extends React.Component {



    render() {
        return(
<div><DetailData id={this.props.match.params.id} history={ this.props.history }/></div>
        );
    }
}