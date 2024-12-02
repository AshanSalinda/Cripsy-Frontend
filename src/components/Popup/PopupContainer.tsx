import React from "react";
import {
    Dialog,
    DialogContent,
} from "../ui/dialog";

interface PopupContainerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string; // Optional className to customize the container
}

const PopupContainer: React.FC<PopupContainerProps> = ({
                                                           isOpen,
                                                           onClose,
                                                           children,
                                                           className = "",
                                                       }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose} modal={true}>
            <DialogContent
                // className={`w-50 p-0 overflow-hidden bg-white items-center rounded-lg shadow-lg ${className}`}
                className={`w-[800px] p-0 overflow-hidden bg-white items-center rounded-lg shadow-lg ${className}`}

                onInteractOutside={(event) => event.preventDefault()}
            >
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default PopupContainer;
