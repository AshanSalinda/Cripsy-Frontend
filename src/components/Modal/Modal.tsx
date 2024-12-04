import React from 'react';
import { Modal as MuiModel }  from '@mui/material';

interface PropsType {
    isVisible: boolean;
    setVisible: (isVisible: boolean) => void;
    children: React.ReactNode;
}

const Modal: React.FC<PropsType> = ({isVisible, setVisible, children}) => {

    const close = () => {
        setVisible(false);
    }

    return (
        <MuiModel open={isVisible} onClose={close} aria-labelledby="modal" >
            <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-5 max-h-[calc(100vh-8rem)] overflow-auto bg-white rounded-md shadow-custom-card" >
                {children}
            </div>
        </MuiModel>
    );
};

export default Modal;