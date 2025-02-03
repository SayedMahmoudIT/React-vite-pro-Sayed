import  { Component } from 'react'
import Img from '../../../src/Images/left-image.png'
import SecImage from '../SecImage/SecImage'
export default class MainPage extends Component {
  render() {
    return <>
    
        <div className='row container-fluid justify-content-center align-items-center'>

                <SecImage Image={Img}/>


            <div className='col-md-6 p-4'>
                <h5 className='text-light'>Vivamus sodales nisi id ante molestie venenatis</h5>
                <p className='lead p-2'>This template is last updated on 20 August 2019 for main menu drop-down arrow and 
                    sub menu text color. Duis auctor dolor eu scelerisque vestibulum. Vestibulum lacinia, 
                    nisl sit amet tristique condimentum.</p>
                <button className="btn btn-info text-light rounded-5">DISCOVER MORE</button>
            </div>
        </div>

    </>
  }
}