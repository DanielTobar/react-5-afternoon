import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateFirstName, updateLastName, updateMail} from '../../ducks/reducer.js'
class WizardTen extends Component {
    render(){
        const {updateFirstName, updateLastName, updateMail} = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={(e) => updateFirstName(e.target.value)}/>
                    <input type="text" placeholder="Last Name" onChange= {(e) => updateLastName(e.target.value)}/>
                    <input type="text" placeholder="email" onChange={(e) => updateMail(e.target.value)}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {updateCity} = state;

    return {updateCity}
}
export default connect(mapStateToProps,{updateFirstName, updateLastName, updateMail})(WizardTen);