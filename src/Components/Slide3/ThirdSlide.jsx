import { Component } from 'react'
import Img from '../../../src/Images/right-image.png'
import SecImage from '../SecImage/SecImage'
import AboutCard from '../AboutCard/AboutCard'
import AboutImg1 from '../../../src/Images/about-icon-01.png'
import AboutImg2 from '../../../src/Images/about-icon-02.png'
import AboutImg3 from '../../../src/Images/about-icon-03.png'

export default class MainPage extends Component {
    render() {
        return <>

            <div className='row container-fluid justify-content-center align-items-center'>

                <div className='col-md-6 p-4'>
                    <h5 className='fw-bolder'>Curabitur aliquam eget tellus id porta</h5>
                    <p className='lead p-2'>Proin justo sapien, posuere suscipit tortor in,
                        fermentum mattis elit. Aenean in feugiat purus.</p>

                    <AboutCard AboutImg={AboutImg1} h6={'Nulla ultricies risus quis risus'}
                        p={'You can use this website template for commercial or non-commercial purposes.'} />

                    <AboutCard AboutImg={AboutImg2} h6={'Donec consequat commodo purus'}
                        p={'You have no right to re-distribute this template as a downloadable ZIP file on any website.'} />

                    <AboutCard AboutImg={AboutImg3} h6={'Sed placerat sollicitudin mauris'}
                        p={'If you have any question or comment, please contact us on TemplateMo.'} />

                </div>

                <SecImage Image={Img} />

            </div>

        </>
    }
}