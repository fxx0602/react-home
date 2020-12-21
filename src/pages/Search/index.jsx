import React from 'react';
import SearchHeader from './searchHeader';
import api from '../../api';
import { connect } from 'react-redux';


class Search extends React.Component {

    componentDidMount() {
        const content=this.props.match.params.content;
        const city = this.props.city.cityName;
        api.search.searchData(city,content)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    }

    render() {
        return (
            <div>
                <SearchHeader history={this.props.history} />
                {
                    this.props.match.params.content
                }
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

