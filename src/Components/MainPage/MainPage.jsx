import { Component } from 'react'
//import mainImage from '../../../src/Images/slider-icon.png'
import SecImage from '../SecImage/SecImage'

import Img from '../../../src/Images/slider-icon.png'
export default class MainPage extends Component {
  render() {
    return <>

      <div className='row container-fluid bg-info justify-content-center align-items-center'>
        <div className='col-md-6 p-4'>
          <h1 className='text-light'>Art Factory is free for YOU</h1>
          <p className='lead bg-danger text-light p-2'>This template is available for 100% free of charge on TemplateMo. Download, modify and use this for your business website.</p>
          <button className="btn btn-danger">Find Out More</button>
        </div>

        <SecImage Image={Img} />

      </div>

    </>
  }
}
