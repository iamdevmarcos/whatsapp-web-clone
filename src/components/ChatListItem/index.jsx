import { useState, useEffect } from 'react';
import './style.css';

export const ChatListItem = ({ onClick, active, data }) => {
    const [time, setTime] = useState('1:0');

    useEffect(() => {
        if(data.lastMessageDate > 0) {
            const date = new Date(data.lastMessageDate.seconds * 1000);
            let hours = date.getHours();
            let minutes = date.getMinutes();
            hours = hours < 10 ?  `0${hours}` : hours;
            minutes = minutes < 10 ?  `0${minutes}` : minutes;

            setTime(`${hours}:${minutes}`);
        }
    }, [data]);

    return (
        <div
            className={`chatListItem ${active?'active':''}`}
            onClick={onClick}
        >
            <img className="chatListItemAvatar" src={data.image} alt="" />

            <div className="chatListItemLines">
                <div className="chatListItemLine">
                    <div className="chatListItemName">{data.title}</div>
                    <div className="chatListItemDate">{time}</div>
                </div>
                <div className="chatListItemLine">
                    <div className="chatListItemLastMessage">
                        <p>{data.lastMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}