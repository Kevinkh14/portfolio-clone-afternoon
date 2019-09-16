import React,{Component} from 'react'
import './nav.css'

export default class Nav extends Component{
    constructor(){
        super()
        this.state={
            menuOpenStatus:"down-Menu"
        }
    }
    togle =()=>{
        if(this.state.menuOpenStatus ==="down-menu-close"|| this.state.menuOpenStatus ==="down-Menu"){
            this.setState({menuOpenStatus: "down-menu-open"});
        }
        else if(this.state.menuOpenStatus ==="down-menu-open"){
            this.setState({menuOpenStatus:"down-menu-close"})
        }
    }
    render(){
        return(
            <>
            <nav>
                <div>
                    <h1 className ='sb'>Start Bootstrap</h1>
                </div>
                <div>
                    <ul className = 'navUl'>
                        <li className ='lnav'>SERVICES</li>
                        <li className ='lnav'>PORTFOLIO</li>
                        <li className ='lnav'>ABOUT</li>
                        <li className ='lnav'>TEAM</li>
                        <li className ='lnav'>CONTACT</li>
                        <button onClick ={this.togle} className ='menuIcon hidden-by-default'>MENU<img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'/></button>
                    </ul>
                </div>
            </nav>
            <div className = {`${this.state.menuOpenStatus} hidden-by-default`}> 
                <ul className ='ulMenu'>
                    <li>SERVICES</li>
                    <li>PORTFOLIO</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            </>
        )
    }
}
