import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 5 },
  { id: 2, message: "It's my first post", likesCount: 15 },
]

const messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you doing?' },
  { id: 3, message: 'Oh shit' }
]

const dialogs = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Ksu' },
  { id: 3, name: 'Nickel' },
  { id: 4, name: 'Lisa' },
  { id: 5, name: 'Myshka' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
