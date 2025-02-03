
import { Component } from 'react'

export default class SystemCard extends Component {
  render() {
    return <>
            <div className={this.props.col +' bg-info'}>
                <div className="card p-3">
                    <h2>{this.props.friendName}</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, assumenda?</p>
                    <a href={this.props.email}>mail Me</a>
                </div>
            </div>
    </>
  }
}
