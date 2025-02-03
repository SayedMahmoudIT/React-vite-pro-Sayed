import React, { Component } from 'react'



export default class Location extends Component {
    render() {
        return <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-6 bg-info p-5">
                        <div className="row py-3">
                            <input className='mb-3 col-6' name="FullName" defaultValue="" placeholder="Full Name" />
                            <input className='mb-3 col-6' name="email" defaultValue="" placeholder="E-mail" />
                            <textarea className='w-100' name="email" defaultValue="" placeholder="Your Message" />
                        </div>

                        <button className="btn btn-danger text-light rounded-5">Send It</button>

                    </div>
                </div>
            </div>


        </>
    }
}
