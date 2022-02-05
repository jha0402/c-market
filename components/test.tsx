import type { NextPage } from 'next';

const Test: NextPage = () => {
    return (
        // JIT: Just in time compiler
        // Before there was a purging process that cleans up the unnecessary css for production and modifiers could not be used together
        // JIT : watching the code and creating the classes on demand

        // Custom css outside the tailwind classes: text-[999px], text-[#222222], bg-[url('/vercel.svg')]
        <div className='bg-slate-400 py-20 px-20 grid gap-10 min-h-screen xl:place-content-center lg:grid-cols-2 xl:grid-cols-3'>
            {/* Checkout card */}
            {/* Responsive modifiers: sm - 640px, md - 768px, lg - 1024px, xl - 1280px, 2xl - 1546px 
                landscape:, portrait: - orientation based style
            */}
            {/* Dark mode modifier: dark:
                Dark mode config(tailwind.config.js) - if set to "media" listens to browser
                if set to "class" sets only to elements with classname dark
            */}
            <div className='bg-white p-6 rounded-3xl shadow-xl flex flex-col justify-between dark:bg-black dark:text-white'>
                <span className='font-semibold text-3xl dark:text-white'>Select Item</span>
                {/* Modifiers practiced - first:, last: only:, odd:, even:, empty: */}
                <div className='flex justify-between my-2'>
                    <span className='text-gray-500 dark:text-gray-50'>Grey chair</span>
                    <span className='font-semibold'>$19</span>
                </div>
                <div className='flex justify-between my-2'>
                    <span className='text-gray-500 dark:text-gray-50'>Grey chair</span>
                    <span className='font-semibold'>$19</span>
                </div>
                <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed'>
                    <span>Total</span>
                    <span className='font-semibold'>$8</span>
                </div>
                <button className='mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-1/2 mx-auto block hover:bg-teal-500 dark:bg-white dark:text-black'>
                    Checkout
                </button>
            </div>
            {/* Profile card */}
            {/* Practicing group modifier: Assign what is the 'group'; the card container */}
            <div className='bg-white overflow-hidden rounded-3xl shadow-xl group'>
                <div className='portrait:bg-indigo-600 landscape:bg-teal-500 p-6 pb-14 xl:pb-40'>
                    <span className='text-white text-2xl'>Profile</span>
                </div>
                <div className='rounded-3xl p-6 relative -top-5 bg-white'>
                    <div className='flex justify-between items-end relative -top-16'>
                        <div className='flex flex-col items-center'>
                            <span className='text-sm text-gray-500'>Orders</span>
                            <span className='font-medium'>340</span>
                        </div>
                        {/* When the group is on hover, change the background of this element */}
                        <div className='h-24 w-24 bg-zinc-300 rounded-full group-hover:bg-red-300 transition-colors'></div>
                        <div className='flex flex-col items-center'>
                            <span className='text-sm text-gray-500'>Spent</span>
                            <span className='font-medium'>$340</span>
                        </div>
                    </div>
                    <div className='relative flex flex-col items-center -mt-5'>
                        <span className='text-lg font-medium'>Tony Molloy</span>
                        <span className='text-sm text-gray-500'>USA</span>
                    </div>
                </div>
            </div>
            {/* Product card */}
            <div className='bg-white p-10 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1'>
                <div className='flex mb-5 justify-between items-center'>
                    <span>⬅️</span>
                    <div className='space-x-3'>
                        <span>⭐️ 4.9</span>
                        <span className='shadow-xl p-2 rounded-md'>💖</span>
                    </div>
                </div>
                <div className='bg-zinc-400 h-72 mb-5'></div>
                <div className='flex flex-col'>
                    <span className='font-medium text-xl'>Swoon Lounge</span>
                    <span className='text-xs text-gray-500'>Chair</span>
                    <div className='mt-3 mb-5 flex justify-between items-center'>
                        <div className='space-x-2'>
                            <button className='w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition' />
                            <button className='w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition' />
                            <button className='w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition' />
                        </div>
                        <div className='flex items-center space-x-5'>
                            <button className='rounded-lg w-8 bg-blue-200 flex justify-center items-center aspect-square text-xl text-gray-500'>
                                -
                            </button>
                            <span>1</span>
                            <button className='rounded-lg w-8 bg-blue-200 flex justify-center items-center aspect-square text-xl text-gray-500'>
                                +
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='font-medium text-2xl'>$450</span>
                        <button className='py-2 px-8  text-sm bg-blue-500 text-center text-white rounded-lg'>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            {/* Form */}
            {/* Usable modifiers: focus-within:, required:, valid:, invalid:, placeholder:, placeholder-shown: */}
            {/* Peer modifier: The style of an element depending on the state of another (className= peer) 
                peer element has to come first
            */}
            <form className='flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-200' action=''>
                <input
                    type='text'
                    placeholder='Username'
                    required
                    className='peer required:border-2 border-yellow-500 invalid:bg-red-500'
                />
                <span className='hidden peer-invalid:block text-red-500'>This input is invalid</span>
                <input type='password' />
                <input type='submit' />
            </form>

            {/* More modifiers: */}
            {/* selection:, open:, marker:, file:, file:hover:, first-letter: */}
            <div className='flex flex-col space-y-2 p-5'>
                <details className='select-none open:text-white open:bg-indigo-400'>
                    <summary className='cursor-pointer'>Summary tag</summary>
                    <span className='selection:bg-indigo-500'>Detail content</span>
                </details>
                <ul className='list-disc marker:text-teal-500'>
                    <li>Hello</li>
                    <li>Hi</li>
                </ul>
                <input
                    type='file'
                    className='file:cursor-pointer file:hover:text-blue-500 file:transition-colors file:border-0 file:rounded-md'
                />
                <p className='first-letter:text-7xl first-letter:hover:text-blue-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
        </div>
    );
};

export default Test;
