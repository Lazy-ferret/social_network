import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './../src/redux/appReducer'
import { compose } from 'redux';
import withRouter from './hoc/WithRouter';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />

        <Navbar />

        <div className='app-wrapper-content'>
          <Routes >
            <Route path="/profile/" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>

            <Route
              path="/dialogs/*"
              element={<DialogsContainer />} />

            <Route
              path="/users"
              element={<UsersContainer />} />

            <Route
              path="/login"
              element={<Login />} />

            <Route path="/news"
              element={<News />} />

            <Route
              path="/music"
              element={<Music />} />

            <Route
              path="/settings"
              element={<Settings />} />
          </Routes>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
