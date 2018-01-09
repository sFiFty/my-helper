import React from 'react'
import Moment from 'react-moment'
import './ceremony.scss'

export default class Intro extends React.Component {
    nextStep = () => {
        this.props.history.push('/daily/shuffling')
    }
    render() {
        console.log(this.props)
        const { team } = this.props
        const dateToFormat = new Date()
        return (
            <div className="text-wrapper" onClick={this.nextStep}> 
                <div className="daily-text">
                    { team.name } Daily
                    <div><Moment format="DD MMMM YYYY" date={dateToFormat} /></div>
                </div>
            </div>
        )
    }
}