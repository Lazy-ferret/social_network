import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from './../../redux/profileReducer'
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import withRouter from "../../hoc/WithRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) { userId = 2 }
        this.props.getUserProfile(userId);
    }

    render() {


        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)