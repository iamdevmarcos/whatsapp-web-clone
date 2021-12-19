import React, { useState, useEffect } from 'react';
import './App.css';
import { ChatListItem } from './components/ChatListItem';
import { ChatIntro } from './components/ChatIntro';
import { ChatWindow } from './components/ChatWindow';
import { NewChat } from './components/NewChat';

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
  const [user, setUser] = useState({
    id: 1234, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Marcos'
  });
  const [showNewChat, setShowNewChat] = useState(false);
  
  const handleNewChat = () => setShowNewChat(true);

  return (
    <div className="appWindow">
      <div className="sideBar">
        <NewChat
          chatList={chatList}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className="headerAvatar" src={user.avatar} alt="" />

          <div className="headerButtons">
            <div className="headerBtn">
              <DonutLargeIcon style={{color:'#919191'}} />
            </div>
            <div onClick={handleNewChat} className="headerBtn">
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
              data={item}
              active={activeChat.chatId === chatList[index].chatId}
              onClick={()=>setActiveChat(chatList[index])}
            />
          ))}
        </div>
      </div>
      <div className="contentArea">
        {activeChat.chatId !== undefined &&
          <ChatWindow
            user={user}
          />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}

export default App;