import React from 'react';
import api from '../../../api';
import SearchListView from './SearchListView'



export default class SearchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData:{},
        }
    }

    componentDidMount() {
        const content=this.props.content;
        const city = this.props.city;
       this.http(city,content);
    }

    http(city,content) {
        api.search.searchData(city,content)
        .then(res => res.json())
        .then(data => {
            this.setState({
                searchData:data,
            })
        });
    }


    componentWillUpdate(nextProps,nextState) {
        const content1=this.props.content;
        const content2 = nextProps.content;
        console.log(content1);
        console.log(content2);
        if (nextProps.content === this.props.content) {
            return;
        }
        this.http(this.props.city,content2);
    }

    render() {
    
        return (
            <div>
                {
                    this.state.searchData.data ? 
                    <SearchListView data={this.state.searchData} /> : <div>正在加载中.......</div>
                }
            
            </div>

        );
    }
}


