import React from 'react';
import api from '../../../api';
import SearchListView from './SearchListView'
import LoadMore from '../../../components/LoadMore';



export default class SearchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData:[],
            hasMore:false,
            page:0,
        }
    }

    componentDidMount() {
        const content=this.props.content;
        const city = this.props.city;
       this.http(city,content,this.state.page);
    }

    http(city,content,page) {
        api.search.searchData(city,content,page)
        .then(res => res.json())
        .then(data => {
            this.setState({
                // 数据合并
                searchData:this.state.searchData.concat(data.data),
                hasMore:data.hasMore,
                page:page+1,
            });
        });
    }

    // 做法1
    componentWillReceiveProps(nextProps) {
    
        this.http(this.props.city,nextProps.content,0);
        console.log(nextProps);
    }

    // 做法2
    // componentWillUpdate(nextProps,nextState) {
    //     const content1=this.props.content;
    //     const content2 = nextProps.content;
    //     console.log(content1);
    //     console.log(content2);
    //     if (nextProps.content === this.props.content) {
    //         return;
    //     }
    //     this.http(this.props.city,content2,0);
    // }


    LoadMoreHandle =() => {
        const content=this.props.content;
        const city = this.props.city;
       this.http(city,content,this.state.page);
    }

    render() {
    
        return (
            <div>
                {
                    this.state.searchData ? 
                    <SearchListView data={this.state.searchData} /> : <div>正在加载中.......</div>
                }
                {
                    this.state.hasMore ? <LoadMore onloadMore={this.LoadMoreHandle} />
                    :<div>被你看光了</div>
                }
                
            
            </div>

        );
    }
}


