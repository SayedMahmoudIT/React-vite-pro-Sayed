
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareDribbble, faSquareFacebook, faLinkedin, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
    render() {
        return <>

            <div className='fs-5 text-center mt-5'>
                Copyright © 2020 Art Factory Company . Design: TemplateMo
            </div>
            <div className='text-center mb-3 mt-2'>
                <ul className='row list-unstyled  justify-content-center'>
                    <li className='col-1 '><a href="#"><FontAwesomeIcon icon={faSquareFacebook} className='fa fa-xl' /></a></li>
                    <li className='col-1'><a href="#"><FontAwesomeIcon icon={faLinkedin} className='fa fa-xl'/></a></li>
                    <li className='col-1'><a href="#"><FontAwesomeIcon icon={faSquareTwitter} className='fa fa-xl'/></a></li>
                    <li className='col-1'><a href="#"><FontAwesomeIcon icon={faSquareDribbble}className='fa fa-xl' /></a></li>
                </ul>
            </div>
        </>
    }
}
