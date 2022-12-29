import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Navbar from './Navbar';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const END_POINT="https://newsapi.org/v2/top-headlines?"

export default class  extends Component {
    static defaultProps={
        country:'in',
        pagesize:20,
        category: 'general'
    }

    static propTypes={
        country:PropTypes.string,
        pagesize:PropTypes.number,
        category:PropTypes.string,
    }
     capitalise=(string)=>
    {
      return string.charAt(0).toUpperCase()+string.slice(1);
    }

    constructor(props)
    {
        super(props);
        this.state={
         articles : [],
         loading:true,
         page:1,
         totalResults:0

        }
        document.title=`${this.capitalise(this.props.category)} - Everyday India`;
    }
    async updateNews(){
      const url=`${END_POINT}country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=$(this.state.page)&pagesize=${this.props.pagesize}`;
      let data=await fetch(url);
      let parseData=await data.json();
      this.setState({
        articles:parseData.articles,
        totalResults : parseData.totalResults,
        loading:false,
      })
    }
    async componentDidMount(){
        let url=`${END_POINT}country=${this.props.country}&category=${this.props.category}&apikey=b810ec31d0a14924b89c788eb0d7970a&page=1&pagesize=${this.props.pagesize}`;
        let data= await fetch(url);
        console.log(data);
        let parseData=await data.json();
        this.setState({articles:parseData.articles,totalResults : parseData.totalResults})
    }
    handleprevious=async()=>{
        let url=`${END_POINT}country=${this.props.country}&category=${this.props.category}&apikey=b810ec31d0a14924b89c788eb0d7970a&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
        let data= await fetch(url);
        let parseData=await data.json();
        this.setState({
        page:this.state.page - 1,
        articles:parseData.articles
       })
    }
    
     handlenext=async()=>{
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize))
        {

        }
        else{
        let url=`${END_POINT}country=${this.props.country}&category=${this.props.category}&apikey=b810ec31d0a14924b89c788eb0d7970a&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
        let data= await fetch(url);
        let parseData=await data.json();
       this.setState({
        page:this.state.page + 1,
        articles:parseData.articles
       })
      }
    }
    fetchMoreData= async()=>{
      this.setState({
        page : this.state.page + 1})
        const url=`${END_POINT}country=${this.props.country}&category=${this.props.category}&apikey=b810ec31d0a14924b89c788eb0d7970a&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parseData=await data.json();
      this.setState({
        articles:this.state.articles.concat(parseData.articles),
        totalResults : parseData.totalResults,
        loading:false
      })
   }
  render() {
    return (
      <>
        <u><h1 className="text-center" style={{magin:'40px 0px'}}>Top {this.capitalise(this.props.category)} Headlines</h1></u>
        <InfiniteScroll 
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}>
            <div className="container">
              <div className="row">
              {this.state.articles.map((element)=>{
              return <div className="col-md-4 my-2" key={element.url}>
                    <NewsItem title={element.title} description={element.description?element.description.slice(0,87):""} url={element.urlToImage}
                    newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
        }
        )}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }
}
