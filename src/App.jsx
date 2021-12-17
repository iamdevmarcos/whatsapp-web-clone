import React from 'react';
import './App.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const App = () => {
  return (
    <div className="appWindow">
      <div className="sideBar">
        <header>
          <img className="headerAvatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />

          <div className="headerButtons">
            <div className="headerBtn">
              <DonutLargeIcon style={{color:'#919191'}} />
            </div>
            <div className="headerBtn">
              <ChatIcon style={{color:'#919191'}} />
            </div>
            <div className="headerBtn">
              <MoreVertIcon style={{color:'#919191'}} />
            </div>
          </div>
        </header>
        <div className="search">...</div>
        <div className="chatList">...</div>
      </div>
      <div className="contentArea">...</div>
    </div>
  );
}

export default App;