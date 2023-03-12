import './RippleButton.scss';

import { useRef } from 'react';
import { useClickRippleAnim } from '../../Custom Hooks/useClickRippleAnim';

const RippleButton = ({ children, click }) => {
    const btnRef = useRef(null);

    useClickRippleAnim(btnRef, {});

    const handleClick = () => {
        click();
    }


    return (
        <div onClick={handleClick} className='button-container' ref={btnRef}>
            <button>
                {children}
            </button>
        </div>
    );
};

export default RippleButton;