import { Toaster, toast } from 'sonner';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'; // Import icons
import { VscError } from "react-icons/vsc";
import { CiWarning } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";

interface ToastProps {
    type?: 'success' | 'error' | 'info' | 'warning';
    message: string;
    description?: string;
    duration?: number;
}

const Toast = () => {
    return <Toaster position="top-center" />;
};

export const showToast = ({
                              type = 'info',
                              message,
                              description,
                              duration = 3000,
                          }: ToastProps) => {
    let icon;
    switch (type) {
        case 'success':
            icon = <IoIosCheckmarkCircleOutline color="#22c55e" size={24} />;
            toast.success(message, {
                description,
                duration,
                icon,
            });
            break;
        case 'error':
            icon = <VscError color="#ef4444" size={24} />;
            toast.error(message, {
                description,
                duration,
                icon,
            });
            break;
        case 'warning':
            icon = <CiWarning color="#f59e0b" size={24} />;
            toast.warning(message, {
                description,
                duration,
                icon,
            });
            break;
        default:
            icon = <IoInformationCircleOutline color="#3b82f6" size={24} />;
            toast(message, {
                description,
                duration,
                icon,
            });
    }
};

export default Toast;
