import './style.css';

export const ChatListItem = ({ onClick, active, data }) => {
    return (
        <div
            className={`chatListItem ${active?'active':''}`}
            onClick={onClick}
        >
            <img className="chatListItemAvatar" src={data.image} alt="" />

            <div className="chatListItemLines">
                <div className="chatListItemLine">
                    <div className="chatListItemName">{data.title}</div>
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