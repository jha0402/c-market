import { spawn } from 'child_process';
import React from 'react';
import { cls } from '../libs/utils';

interface LayoutProps {
    title?: string;
    canGoBack?: boolean;
    hasTabBar?: boolean;
    children: React.ReactNode;
}

const Layout = ({ title, canGoBack, hasTabBar, children }: LayoutProps) => {
    return (
        <div>
            <div className='fixed bg-white w-full text-lg font-medium py-3 text-gray-700 border-b top-0 flex items-center justify-center'>
                {' '}
                {title ? <span>{title}</span> : null}
            </div>
            <div className={cls('pt-16', hasTabBar ? 'pb-16' : '')}>{children}</div>
            {hasTabBar ? (
                <nav className='bg-white text-gray-800 border-t fixed bottom-0 pb-10 pt-3 flex justify-between items-center'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </nav>
            ) : null}
        </div>
    );
};

export default Layout;
