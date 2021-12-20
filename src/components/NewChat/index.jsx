import { useState, useEffect } from 'react';
import './style.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { api } from '../../services/api';

export const NewChat = ({ chatList, user, show, setShow }) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getList();
    }, [user]);
    
    const getList = async () => {
        if(user !== null) {
            const results = await api.getContactList(user.id);
            setList(results);
        }
    }

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