import React, {useState} from 'react';

import styles from './Messaging.module.css';
import {getImageUrl} from '../../utils';
import closeIcon from '../../../assets/nav/closeIcon.png';
import messageIcon from '../../../assets/messaging/textmessage.png';
export const Messaging = () => {
    const [messageOpen,setMessageOpen] = useState(false);
    const handleMessagingToggle = () => {
        console.log('Toggling messaging. Current state:', messageOpen);
        setMessageOpen(!messageOpen);
    };
    return (
        <div className={styles.messaging}>
            <img className={styles.messagingBtn} src = {messageOpen ? closeIcon : messageIcon} alt="messageButton" onClick={handleMessagingToggle}/>
            {messageOpen && (
                <div className={styles.chatInterface}>
                    <div className={styles.chatHeader}>
                        <h3>Chat</h3>
                        <img src={closeIcon} alt="Close chat" onClick={handleMessagingToggle} className={styles.closeBtn}/>
                    </div>
                    <div className={styles.chatBody}>
                        {messages.map((message, index) => (
                            <div key={index} className={styles.message}>
                                {message}
                            </div>
                        ))}
                    </div>
                    <div className={styles.chatInput}>
                        <input type="text" placeholder="Type your message here..." onKeyPress />
                    </div>
                </div>
            )}
        </div>
    );
};