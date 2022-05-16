
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      country: 'in',
      progress:0 //for top-loading-progress bar

    }
  }

  setProgress =(progress)=>{
    this.setState({
      progress:progress
    })
  }

  changeCountry = (data) => {

    this.setState({
      country: data
    })
  }

  changeCategory = (data) => {

    this.setState({
      category: data
    })
    

  }




  render() {
    return (
      <>
        <Navbar cfunc={this.changeCountry} cafunc={this.changeCategory} />
        <LoadingBar
        color='#f11946'
        loaderSpeed={1000}
        height={3}
        progress={this.state.progress}
        
      />
        <News country={this.state.country} category={this.state.category} setProgress={this.setProgress}/>
      </>
    )
  }
}

