import React, { Component } from 'react'


export default class Navbar extends Component {

    constructor(){
        super();
        this.state={
            category:'hello'
        }
        
    }
    Change(varr) {

        this.props.cfunc(varr);




    }
    category(varr) {
        this.props.cafunc(varr);
        
        if (this.state.category !== varr) {
            if(this.state.category==="business"){
                document.getElementById('nav2').style.color = '#aaaaaa';
            }
            else if(this.state.category==="entertainment"){
                document.getElementById('nav3').style.color = '#aaaaaa';
            }
            else if(this.state.category==="general"){
                document.getElementById('nav4').style.color = '#aaaaaa';
            }
            else if(this.state.category==="health"){
                document.getElementById('nav5').style.color = '#aaaaaa';
            }
            else if(this.state.category==="science"){
                document.getElementById('nav6').style.color = '#aaaaaa';
            }
            else if(this.state.category==="sports"){
                document.getElementById('nav7').style.color = '#aaaaaa';
            }
            else if(this.state.category==="technology"){
                document.getElementById('nav8').style.color = '#aaaaaa';
            }
            else if(this.state.category===""){
                document.getElementById('nav1').style.color = '#aaaaaa';
            }

            this.setState({category:varr})

            if (varr === 'business') {
                document.getElementById('nav2').style.color = '#32CD32';
            }
            else if(varr==='entertainment'){
                document.getElementById('nav3').style.color = '#32CD32';
            }
            else if(varr==='general'){
                document.getElementById('nav4').style.color = '#32CD32';
            }
            else if(varr==='health'){
                document.getElementById('nav5').style.color = '#32CD32';
            }
            else if(varr==='science'){
                document.getElementById('nav6').style.color = '#32CD32';
            }
            else if(varr==='sports'){
                document.getElementById('nav7').style.color = '#32CD32';
            }
            else if(varr==='technology'){
                document.getElementById('nav8').style.color = '#32CD32';
            }
            else if(varr===''){
                document.getElementById('nav1').style.color = '#32CD32';
            }
           
        
        }
        
    }


    render() {

        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{'position':'sticky','top':0,"width":'100%','zIndex':2}}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/" style={{'color':'#32CD32','fontSize':'30px'}}>News<span style={{"color":"yellow"}}>Monkey</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <button className="nav-link btn btn-link active" aria-current="page" id="nav1" style={{'textAlign':'center'}} onClick={() => { this.category('') }}>Home</button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link btn btn-link" id="nav2" style={{'textAlign':'center'}} onClick={() => { this.category('business') }}>Business</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-link" id="nav3" style={{'textAlign':'center'}} onClick={() => { this.category('entertainment') }}>Entertainment</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-link" id="nav4" style={{'textAlign':'center'}} onClick={() => { this.category('general') }}>General</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-link" id="nav5" style={{'textAlign':'center'}} onClick={() => { this.category('health') }}>Health</button>
                                </li> 
                                <li className="nav-item">
                                    <button className="nav-link btn btn-link" id="nav6" style={{'textAlign':'center'}} onClick={() => { this.category('science') }}>Science</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-link" id="nav7" style={{'textAlign':'center'}} onClick={() => { this.category('sports') }}>Sports</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-link" id="nav8" style={{'textAlign':'center'}} onClick={() => { this.category('technology') }}>Technology</button>
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div>
                        <div className="dropdown container d-flex justify-content-between">
                            <button className="btn btn-secondary dropdown-toggle btn-sm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Country
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{'height': '150px','overflow': 'auto'}}>
                                <li><button className="dropdown-item" onClick={() => { this.Change('in') }}>INDIA</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('ae') }}>Arab Emirates</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('ar') }}>Argentina</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('at') }}>Austria</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('au') }}>Australia</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('be') }}>Belgium</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('bg') }}>Bulgaria</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('br') }}>Brazil</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('ca') }}>Canada</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('ch') }}>Switzerland</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('cn') }}>China</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('cu') }}>Cuba</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('cz') }}>Czech Rep.</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('de') }}>Germany</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('eg') }}>Egypt</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('fr') }}>France</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('hk') }}>Hong Kong</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('hu') }}>Hungary</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('id') }}>Indonesia</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('ie') }}>Ireland</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('il') }}>Israel</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('it') }}>Italy</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('jp') }}>Japan</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('kr') }}>South Korea</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('lt') }}>Lithuania</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('lv') }}>Latvia</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('ma') }}>Morocco</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('mx') }}>Mexico</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('my') }}>Malasia</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('ng') }}>Nigeria</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('nl') }}>Netherlands</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('no') }}>Norway</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('nz') }}>New Zealand</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('ph') }}>Phillipines</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('pl') }}>Poland</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('pt') }}>Portugal</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('ro') }}>Romania</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('rs') }}>Serbia</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('ru') }}>Russia</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('sa') }}>Saudi Arabia</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('se') }}>Sweden</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('sg') }}>Singapore</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('si') }}>Slovenia</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('sk') }}>Slovakia</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('th') }}>Thailand</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('tr') }}>Turkey</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('tw') }}>Taiwan</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('ua') }}>Ukraine</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('us') }}>United States</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('ve') }}>Venezuela</button></li>
                                <li><button className="dropdown-item" onClick={() => { this.Change('za') }}>South Africa</button></li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
