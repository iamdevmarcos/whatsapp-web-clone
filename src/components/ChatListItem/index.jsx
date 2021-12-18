import './style.css';

export const ChatListItem = ({ onClick }) => {
    return (
        <div className='chatListItem' onClick={onClick}>
            <img className="chatListItemAvatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />

            <div className="chatListItemLines">
                <div className="chatListItemLine">
                    <div className="chatListItemName">Marcos Andre</div>
                    <div className="chatListItemDate">20:00</div>
                </div>
                <div className="chatListItemLine">
                    <div className="chatListItemLastMessage">
                        <p>Opa, tudo bem ?dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaakjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>
                    </div>
                </div>
            </div>
        </div>
    );
}