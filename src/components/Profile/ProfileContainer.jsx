import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from './../../redux/profileReducer'
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { useParams } from "react-router-dom";

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


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

const WithUrlDataContainerComponent = (props) => {
    return (<AuthRedirectComponent {...props} params={useParams()} />)
}


export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent)