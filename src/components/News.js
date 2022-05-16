import React, { Component } from 'react'
import Newsitems from './Newsitems'



export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            page:1,
            noOfPages:1,
            countryState:'in',
            categoryState:''
            
        }
    }

    



    async componentDidMount() {
        this.props.setProgress(0);
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a6c1a3fd72304b98ad6668e52da97235`;
        
        let data = await fetch(url);
        let parseData = await data.json();
       
        let Noofpages=Math.ceil(parseData.totalResults/20);
        this.setState({ articles: parseData.articles,
         noOfPages: Noofpages});
         this.props.setProgress(100);
    }
    async componentDidUpdate() {
        if(this.state.countryState!==this.props.country)
            {   this.setState({
                countryState:this.props.country,
                page:1
                }) 
                this.props.setProgress(0);
                let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}${this.props.category===''?'':'&category='}${this.props.category===''?'':this.props.category}&apiKey=a6c1a3fd72304b98ad6668e52da97235`;
                
                let data = await fetch(url);
                let parseData = await data.json();
                console.log(parseData);
                let Noofpages=Math.ceil(parseData.totalResults/20);
                this.setState({ articles: parseData.articles,
                 noOfPages: Noofpages});
                 this.props.setProgress(100);
            }
           if(this.state.categoryState!==this.props.category)
            {   this.setState({
                
                categoryState:this.props.category
            })  
                this.props.setProgress(0);
                let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}${this.props.category===''?'':'&category='}${this.props.category===''?'':this.props.category}&apiKey=a6c1a3fd72304b98ad6668e52da97235`;
                
                let data = await fetch(url);
                let parseData = await data.json();
                console.log(parseData);
                let Noofpages=Math.ceil(parseData.totalResults/20);
                this.setState({ articles: parseData.articles,
                 noOfPages: Noofpages});
                 this.props.setProgress(100);
            }
       
    }

    handleNextClick = async () => {
        
        document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}${this.props.category===''?'':'&category='}${this.props.category===''?'':this.props.category}&apiKey=a6c1a3fd72304b98ad6668e52da97235&page=${this.state.page+1}`;
        
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
           
            articles: parseData.articles,
            page:this.state.page+1
            
        })
        this.props.setProgress(100);
       

        
    }
    handlePrevClick = async () => {
        document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  this.props.setProgress(0);
      
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}${this.props.category===''?'':'&category='}${this.props.category===''?'':this.props.category}&apiKey=a6c1a3fd72304b98ad6668e52da97235&page=${this.state.page-1}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
           
            articles: parseData.articles,
            page:this.state.page-1
        })
        
        this.props.setProgress(100);

      
    }
    render() {
       
        return (
            <>
                <div className="container my-3">
                    <h2 className="py-1" style={{'borderRadius':'10px','textAlign':' center','color':'white','backgroundColor':'grey','border':'black 3px solid'}}>NewsMonkey - Top Headlines</h2> 
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newsitems title={element.title == null ? '' : element.title.slice(0, 45)} description={element.description == null ? '' : element.description.slice(0, 88)} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                            </div>
                        })}



                    </div>
                    <div className="container d-flex justify-content-between">
                        <button id="bprev" type="button" className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page<=1}>&larr;Previous</button>
                        <button id="bnext" type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page>=this.state.noOfPages}>Next&rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}
