import  { Component } from 'react'
//import mainImage from '../../../src/Images/slider-icon.png'
export default class SecImage extends Component {
  render() {
    return <>

            <div className='col-md-6'>
                <img className='w-100' src={this.props.Image} alt="cup" />
            </div>
    </>
  }
}

