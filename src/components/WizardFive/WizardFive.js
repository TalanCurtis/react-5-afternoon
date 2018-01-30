import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateRealEstateAgent } from '../../ducks/reducer';
import {connect} from 'react-redux';

class WizardFive extends Component {

    render(){
        const {updateRealEstateAgent} = this.props
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={()=>updateRealEstateAgent('Yes')}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={()=>updateRealEstateAgent('No')}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { realEstateAgent } = state
    return{
        realEstateAgent
    }
}

export default connect(mapStateToProps, {updateRealEstateAgent})(WizardFive);