import React from 'react';
import { cls } from '../libs/utils';

interface MessageProps {
    message: string;
    reversed?: boolean;
    avatarUrl?: string;
}

const Message = ({ message, avatarUrl, reversed }: MessageProps): JSX.Element => {
    return (
        <div className={cls('flex  items-start', reversed ? 'flex-row-reverse space-x-reverse' : 'space-x-2')}>
            <div className='w-8 h-8 rounded-full bg-slate-400' />
            <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md'>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Message;
