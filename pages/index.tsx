import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="bg-slate-400 py-20 px-20 grid gap-10 min-h-screen">
            {/* Checkout card */}
            <div className="bg-white p-6 rounded-3xl shadow-xl">
                <span className="font-semibold text-3xl">Select Item</span>
                <div className="flex justify-between my-2">
                    <span className="text-gray-500">Grey chair</span>
                    <span className="font-semibold">$19</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Tooly Table</span>
                    <span className="font-semibold">$8</span>
                </div>
                <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
                    <span>Total</span>
                    <span className="font-semibold">$8</span>
                </div>
                <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-1/2 mx-auto">
                    Checkout
                </div>
            </div>
            {/* Profile card */}
            <div className="bg-white overflow-hidden rounded-3xl shadow-xl">
                <div className="bg-blue-500 p-6 pb-14">
                    <span className="text-white text-2xl">Profile</span>
                </div>
                <div className="rounded-3xl p-6 relative -top-5 bg-white">
                    <div className="flex justify-between items-end relative -top-16">
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500">
                                Orders
                            </span>
                            <span className="font-medium">340</span>
                        </div>
                        <div className="h-24 w-24 bg-red-400 rounded-full"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500">Spent</span>
                            <span className="font-medium">$340</span>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center -mt-5">
                        <span className="text-lg font-medium">Tony Molloy</span>
                        <span className="text-sm text-gray-500">USA</span>
                    </div>
                </div>
            </div>
            {/* Product card */}
            <div className="bg-white p-10 rounded-3xl shadow-xl">
                <div className="flex mb-5 justify-between items-center">
                    <span>⬅️</span>
                    <div className="space-x-3">
                        <span>⭐️ 4.9</span>
                        <span className="shadow-xl p-2 rounded-md">💖</span>
                    </div>
                </div>
                <div className="bg-zinc-400 h-72 mb-5"></div>
                <div className="flex flex-col">
                    <span className="font-medium text-xl">Swoon Lounge</span>
                    <span className="text-xs text-gray-500">Chair</span>
                    <div className="mt-3 mb-5 flex justify-between items-center">
                        <div>
                            <input type="radio" />
                            <input type="radio" />
                            <input type="radio" />
                        </div>
                        <div className="flex items-center space-x-5">
                            <button className="rounded-lg w-8 bg-blue-200 flex justify-center items-center aspect-square text-xl text-gray-500">
                                -
                            </button>
                            <span>1</span>
                            <button className="rounded-lg w-8 bg-blue-200 flex justify-center items-center aspect-square text-xl text-gray-500">
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-2xl">$450</span>
                        <button className="py-2 px-8  text-sm bg-blue-500 text-center text-white rounded-lg">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
