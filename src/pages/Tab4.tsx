import React, {useState} from 'react';
import "./Tab4.scss"

function Tab4(){
    const [state, setState] = useState(false);

    const buttonClick = () => {
    setState(true);
    };

    const closeNotification = () => {
    setState(false);
    };

    // hidden button classname was made first to just make the button invisible
    return (<div>
                <button className='hidden-button' onClick={buttonClick}>
                    <img src='https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/flushed-face.png' className='blushy-wushy' />
                </button>
                {state && (
                    <div className="notification">
                        <h1 className='notification-text'> Warning! Do not click on the profile image.</h1>
                        <button onClick={closeNotification}>X</button>
                   </div>
                 )}
                <h1 className='blushy-name'>Blushy J. Blush</h1>
            </div>)

}

export default Tab4;