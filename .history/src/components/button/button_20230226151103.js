import React from 'react';

const Button = ({onClick,className,children,full = '' typt = "button", bgColor = "primary"}) => {
    let  bgClassName = 'bg-primary';
    switch (bgColor) {
        case "primary":
            bgClassName ='bg-primary';
            break;
        default:
            break;
    }
    return (
        <button onClick={onClick} 
        className={`py-3 px-6 text-2xl  rounded-lg capitalize bg-primary ${full ? 'w-full': ''} mt-auto ${bgClassName} ${className}`}>
        {children}
      </button>
    );
};

export default Button;