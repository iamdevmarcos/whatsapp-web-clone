import './style.css';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export const ChatWindow = () => {
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
            <div className="chatWindowFooter"></div>
        </div>
    );
}