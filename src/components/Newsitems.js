import React, { Component } from 'react'
import defaultImage from '../defaultimage.jpg'




export default class Newsitems extends Component {
    render() {
        let { title, description, imageurl, newsurl } = this.props;
        return (

            <>
                <a href={newsurl} target="_blank" className="card my-3 ml-5" style={{ 'width': '20rem', 'height': '27rem', 'border': 'black solid 1px', "backgroundColor": "#111111", "margin": "auto" }}>
                <span className="position-absolute top-0 left-90 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:1}}>
                            {this.props.source}
                            
                        </span>
                    <img className="card-img-top" style={{ 'height': '10rem','borderRadius': '10px 10px 10px 0px' }} src={imageurl == null ? defaultImage : imageurl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className='text-muted'>By {!this.props.author ? 'unknown' : this.props.author} on {new Date(this.props.date).toGMTString()}</small></p>
                        
                    </div>
                </a>

            </>

        )
    }
}