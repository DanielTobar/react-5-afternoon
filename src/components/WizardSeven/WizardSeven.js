import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateCredit} from '../../ducks/reducer.js'
class WizardSeven extends Component {

    render(){
        const {updateCredit} = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={(e) => updateCredit(e.target.value)} value="Exellent">Excellent</button></Link>
                        <Link to="/wEight"><button onClick={(e) => updateCredit(e.target.value)} value="Good">Good</button></Link>
                        <Link to="/wEight"><button onClick={(e) => updateCredit(e.target.value)} value="Fair">Fair</button></Link>
                        <Link to="/wEight"><button onClick={(e) => updateCredit(e.target.value)} value="Poor">Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {updateCity} = state;

    return {updateCity}
}

export default connect(mapStateToProps,{updateCredit})(WizardSeven);