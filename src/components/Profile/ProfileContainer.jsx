import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from './../../redux/profileReducer'
import { Navigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) { userId = 2 }
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'} />

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = (props) => {
    return (<ProfileContainer {...props} params={useParams()} />)
}

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent)