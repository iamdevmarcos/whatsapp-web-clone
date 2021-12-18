import React, { useState, useEffect } from 'react';
import './App.css';
import { ChatListItem } from './components/ChatListItem';
import { ChatIntro } from './components/ChatIntro';
import { ChatWindow } from './components/ChatWindow';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

const App = () => {
  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'Fulano de tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2, title: 'Beltrano', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 3, title: 'Cicrano', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 4, title: 'Andre', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
  ]);
  const [activeChat, setActiveChat] = useState({});

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
        <div className="search">
          <div className="searchInput">
            <SearchIcon fontSize="small" style={{color:'#919191'}} />
            <input type="search" placeholder="Search or start a new conversation." />
          </div>
        </div>
        <div className="chatList">
          {chatList.map((item, index)=>(
            <ChatListItem
              key={index}
              onClick={()=>setActiveChat(chatList[index])}
            />
          ))}
        </div>
      </div>
      <div className="contentArea">
        {activeChat.chatId !== undefined &&
          <ChatWindow />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}

export default App;