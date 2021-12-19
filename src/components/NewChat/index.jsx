import { useState } from 'react';
import './style.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const NewChat = ({ chatList, user, show, setShow }) => {
    const [list, setList] = useState([
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Marcos Andre'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Marcos Andre'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Marcos Andre'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Marcos Andre'}
    ]);

    const handleClose = () => setShow(false);

    return (
        <div className="newChat" style={{left: show?0:-415}}>
            <div className="newChatHead">
                <div onClick={handleClose} className="newChatBackButton">
                    <ArrowBackIcon style={{color:'#FFF'}} />
                </div>
                <div className="newChatHeadTitle">Nova Conversa</div>
            </div>
            <div className="newChatList">
                {list.map((item, index)=>(
                    <div className="newChatItem" key={index}>
                        <img src={item.avatar} alt="" className="newChatItemAvatar" />
                        <div className="newChatItemName">
                            {item.name}
                        </div>
                    </div>  
                ))}
            </div>
        </div>
    );
}