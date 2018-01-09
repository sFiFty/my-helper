import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import ScrumDailyCreation from '../components/ScrumDaily/ScrumDailyCreation'

export default compose(
    firebaseConnect((props, store) => {
        return [
            { 
                path: `/teams/${store.getState().firebase.profile.teamId}`,
                storeAs: 'myTeam'  
            }
        ]
    }),
    connect(
        (state) => ({
            team: state.firebase.data.myTeam,
            profile: state.firebase.profile
        })
    )
)(ScrumDailyCreation)