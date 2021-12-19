import { useState } from 'react';
import Picker from 'emoji-picker-react';
import './style.css';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export const ChatWindow = () => {

    let recognition = null;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);

    const handleEmojiClick = (e, emojiObject) => setText(text + emojiObject.emoji);
    const handleEmojiOpen = () => setEmojiOpen(true);
    const handleCloseEmoji = () => setEmojiOpen(false);
    const handleSendClick = () => {} 
    const handleMicClick = () => {
        if(recognition !== null) {
            recognition.onStart = () => {
                setListening(true);
            }
            recognition.onEnd = () => {
                setListening(false);
            }
            recognition.onResult = (e) => {
                setText(e.results[0][0].transcript);
            }

            recognition.start();
        }
    } 

    return (
        <div className="chatWindow">
            <div className="chatWindowHeader">
                <div className="chatWindowHeaderInfo">
                    <img className="chatWindowAvatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                    <div className="chatWindowName">Marcos André</div>
                </div>
                <div className="chatWindowHeaderButtons">
                    <div className="chatWindowBtn">
                        <SearchIcon style={{color:'#919191'}} />
                    </div>
                    <div className="chatWindowBtn">
                        <AttachFileIcon style={{color:'#919191'}} />
                    </div>
                    <div className="chatWindowBtn">
                        <MoreVertIcon style={{color:'#919191'}} />
                    </div>
                </div>
            </div>
            <div className="chatWindowBody"></div>

            <div 
                className="chatWindowEmojiArea"
                style={{height: emojiOpen?'200px':'0px'}}
            >
                <Picker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>

            <div className="chatWindowFooter">
                <div className="chatWindowPre">
                    {emojiOpen &&
                        <div
                            className="chatWindowBtn"
                            onClick={handleCloseEmoji}
                        >
                            <CloseIcon style={{color:'#919191'}} />
                        </div>
                    }
                    {!emojiOpen &&
                        <div
                            className="chatWindowBtn"
                            onClick={handleEmojiOpen}
                        >
                            <InsertEmoticonIcon style={{color:'#919191'}} />
                        </div>
                    }
                </div>
                <div className="chatWindowInputArea">
                    <input
                        type="text"
                        className="chatWindowInput"
                        placeholder="Enter a message"
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    />
                </div>
                <div className="chatWindowPos">
                    {text &&
                        <div
                            onClick={handleSendClick} className="chatWindowBtn"
                        >
                            <SendIcon style={{color:'#919191'}} />
                        </div>
                    }
                    {!text &&
                        <div
                            onClick={handleMicClick}
                            className="chatWindowBtn"
                        >
                            <MicIcon style={{color: listening ? '#126ECE' : '#919191'}} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}