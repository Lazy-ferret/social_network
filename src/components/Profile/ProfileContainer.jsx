import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus, savePhoto } from './../../redux/profileReducer'
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";
import withRouter from "../../hoc/WithRouter";

class ProfileContainer extends React.Component {

    updateProfile() {
        let userId = this.props.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.updateProfile()
    }

    componentDidUpdate(prevProps) {
        if (this.props.params.userId !== prevProps.params.userId) {
            this.updateProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                isOwner={!this.props.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)