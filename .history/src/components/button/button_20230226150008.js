import React from 'react';

const button = ({onClick,className,children, typt = "button", bgColor = "primary"}) => {
    let  bgClassName = 'bg-primary';
    switch (bgColor) {
        case "primary":
            bgClassName ='bg-primary';
            break;
        default:
    }
    return (
        <button onClick={onClick} 
        className={`py-3 px-6 text-2xl  rounded-lg capitalize bg-primary w-full mt-auto ${bgClassName} ${className}`}>
        {children}
      </button>
    );
};

export default button;