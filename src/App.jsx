import React, { useState, useEffect } from 'react';
import './App.css';

import { api } from './services/api';

import { ChatListItem } from './components/ChatListItem';
import { ChatIntro } from './components/ChatIntro';
import { ChatWindow } from './components/ChatWindow';
import { NewChat } from './components/NewChat';
import { Login } from './components/Login';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

const App = () => {
  const [chatList, setChatList] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null);
  const [showNewChat, setShowNewChat] = useState(false);

  useEffect(() => {
    if(user !== null) {
      const unsub = api.onChatList(user.id, setChatList);
      return unsub;
    }
  }, [user]);
  
  const handleNewChat = () => setShowNewChat(true);
  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    console.log(newUser);
    await api.addUser(newUser);
    setUser(newUser);
  }

  if(user === null) {
    return (<Login onReceive={handleLoginData} />);
  }

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
                  data={activeChat}
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