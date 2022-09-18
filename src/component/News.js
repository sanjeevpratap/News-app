import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps ={
    country: 'us',
    pageSize: 9,
    category: 'entertainment'

  }
  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {

    super();
    console.log("hello constructor form news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af89dc4da08b4bccb312c41cf7fa7244&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles,

       totalResults: parseData.totalResults,
       loading: false
       })
  }
  handlePreviousClick = async () => {
    //console.log("prw");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af89dc4da08b4bccb312c41cf7fa7244&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parseData = await data.json();
    // this.setState({loading: false})
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false
    })
  }
  handleNextClick = async () => {
   
   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af89dc4da08b4bccb312c41cf7fa7244&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parseData = await data.json();
    // this.setState({loading: false})
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading: false
    })
   
    console.log(this.state.page);
  
}


  render() {
    return (
      <div className='container my-3'>

        <h2 className='text-center '  style={{margin: '38px'}}>NewsMonkey - Top Headlines</h2>
     { this.state.loading && <Spinner/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgurl={element.urlToImage} newsurl={element.url} />
            </div>
          })}


        </div>
        

        <div className='container d-flex justify-content-between' >
          <button disabled={this.state.page <= 1} id="nextone" type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page === Math.ceil(this.state.totalResults/(this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>



      </div>
    )
  }
}

export default News
