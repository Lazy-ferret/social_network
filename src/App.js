import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

function App(props) {
 
  const {posts, dialogs, messages} = props
  
  return (
    <BrowserRouter>

      <div className="app-wrapper">

        <Header />

        <Navbar />

        <div className='app-wrapper-content'>
          <Routes >
            <Route path="/profile" element={<Profile posts={posts}/>} />
            <Route path="/dialogs/*" element={<Dialogs messages={messages} dialogs={dialogs}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
