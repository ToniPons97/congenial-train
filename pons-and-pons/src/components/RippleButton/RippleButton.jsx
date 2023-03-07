import './RippleButton.scss';

import { useRef } from 'react';
import { useClickRippleAnim } from '../../Custom Hooks/useClickRippleAnim';

const RippleButton = ({ children }) => {
    const btnRef = useRef(null);

    useClickRippleAnim(btnRef, {});


    return (
        <div className='button-container' ref={btnRef}>
            <button>
                {children}
            </button>
        </div>
    );
};

export default RippleButton;