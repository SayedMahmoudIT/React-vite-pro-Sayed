import { Component } from 'react'
import Image from '../../../src/Images/about-icon-01.png'

export default class AboutCard extends Component {
    render() {
        return <>
            <div className='row'>
                <div className="col-2">
                    <img src={this.props.AboutImg} alt="" />
                </div>
                <div className="col-10">
                    <h6 className='fw-bolder'>{this.props.h6}</h6>
                    <p className='lead'>{this.props.p}</p>
                </div>
            </div>
        </>
    }
}
