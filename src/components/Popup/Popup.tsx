import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    children?: React.ReactNode;
    onSaveClick?: () => void;
    saveButtonLabel?: string;
    cancelButtonLabel?: string;
}

const Popup: React.FC<PopupProps> = ({
    isOpen,
    onClose,
    title,
    description,
    children,
    onSaveClick,
    saveButtonLabel = "Save", // Default value
    cancelButtonLabel = "Cancel", // Default value
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose} modal={true}>
            <DialogContent
                className="w-1/2 p-0 overflow-hidden"
                onInteractOutside={(event) => event.preventDefault()}
            >
                <div className="flex items-center justify-between px-6 py-3 text-white bg-blue_dark_2">
                    <DialogTitle className="font-semibold text-md">{title}</DialogTitle>
                </div>

                {/* Dialog content (form content) */}
                <div className="px-6 py-2">
                    <DialogDescription>{description}</DialogDescription>
                    {children}
                </div>

                {/* Footer with action buttons */}
                <div className="flex justify-end pb-5 pr-6 space-x-2">
                    {/* Cancel Button */}
                    <DialogClose asChild>
                        <Button
                            variant="outline"
                            size="default"
                            onClick={onClose}
                            className="w-1/5 px-4 py-2 font-semiboldborder bg-carnation-400 shadow-xl hover:bg-carnation-450  hover:text-black  focus:outline-none focus:ring-2 focus:ring-carnation-350 focus:ring-offset-2"
                        >
                            {cancelButtonLabel}
                        </Button>
                    </DialogClose>

                    {/* Save Button */}
                    <Button
                        variant="outline"
                        size="default"
                        onClick={onSaveClick}
                        className="w-1/5 px-4 py-2 font-semiboldborder bg-carnation-400 shadow-xl  text-white  hover:text-black transition
                         duration-150 rounded-lg  hover:bg-carnation-450 focus:outline-none focus:ring-2 focus:ring-carnation-300 focus:ring-offset-2"
                    >
                        {saveButtonLabel}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>

    );
};

export default Popup;
