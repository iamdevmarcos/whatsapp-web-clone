import './style.css';

export const ChatListItem = () => {
    return (
        <div className='chatListItem'>
            <img className="chatListItemAvatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />

            <div className="chatListItemLines">
                <div className="chatListItemLine">
                    <div className="chatListItemName">Marcos Andre</div>
                    <div className="chatListItemDate">20:00</div>
                </div>
                <div className="chatListItemLine">
                    <div className="chatListItemLastMessage">
                        <p>Opa, tudo bem ?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}