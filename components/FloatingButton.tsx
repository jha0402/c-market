import Link from 'next/link';
import React from 'react';

interface FloatingButton {
    children: React.ReactNode;
    href: string;
}

const FloatingButton = ({ children, href }: FloatingButton): JSX.Element => {
    return (
        <Link href={href}>
            <a className='fixed hover:bg-orange-500 border-0 aspect-square border-transparent transition-colors cursor-pointer  bottom-24 right-5 shadow-xl bg-orange-400 rounded-full w-14 flex items-center justify-center text-white'>
                {children}
            </a>
        </Link>
    );
};

export default FloatingButton;
