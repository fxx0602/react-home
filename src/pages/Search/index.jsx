import React from 'react';
import SearchHeader from './searchHeader';
import api from '../../api';
import { connect } from 'react-redux';
import SearchList from './SearchList';


class Search extends React.Component {

    render() {
        const content=this.props.match.params.content;
        const city = this.props.city.cityName;
        return (
            <div>
                <SearchHeader history={this.props.history} />
                <SearchList content={content} city={city} />
            </div>

        );
    }
}


function mapStateToProps(state) {
    return {
        city:state.city
    }
}

export default connect(mapStateToProps)(Search);

