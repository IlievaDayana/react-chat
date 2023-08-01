import React from 'react';

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'danger';
    hidden?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    hidden = false,
    disabled = false,
    onClick = () => {},
    children
}) => {
    const baseClasses = 'p-2 rounded-md shadow-md text-white font-bold';
    let variantClasses;

    switch (variant) {
        case 'primary':
            variantClasses = 'bg-blue-600 hover:bg-blue-700';
            break;
        case 'secondary':
            variantClasses = 'bg-gray-600 hover:bg-gray-700';
            break;
        case 'danger':
            variantClasses = 'bg-red-600 hover:bg-red-700';
            break;
        default:
            variantClasses = 'bg-blue-600 hover:bg-blue-700';
    }

    return (
        <button
            className={`${baseClasses} ${variantClasses}`}
            onClick={onClick}
            disabled={disabled}
            hidden={hidden}
        >
            {children}
        </button>
    );
};

export default Button;