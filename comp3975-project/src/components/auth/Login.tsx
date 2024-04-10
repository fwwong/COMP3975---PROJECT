import React, { useState } from 'react';
import Navbar from '../nav/Navbar';
import Footer from '../nav/Footer';

export default function Login() {
    const [activeTab, setActiveTab] = useState('login');
    const [name, setName] = useState('');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    return (
        <div>
        <Navbar/>
        <div className="flex items-center justify-center h-screen">
            <div className="w-1/3 border-8 p-6">
                <div className="flex mb-5">
                    <button className={`mr-2 px-4 py-2 rounded-lg ${activeTab === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`} onClick={() => handleTabClick('login')}>Login</button>
                    <button className={`px-4 py-2 rounded-lg ${activeTab === 'create' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`} onClick={() => handleTabClick('create')}>Create an Account</button>
                </div>
                <form>
                    {activeTab === 'create' && ( // Conditionally render name input field
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="border-2 border-gray-300 p-4 rounded-lg w-full" />
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="border-2 border-gray-300 p-4 rounded-lg w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="border-2 border-gray-300 p-4 rounded-lg w-full" />
                    </div>
 
                    <button className="bg-blue-500 text-white p-4 rounded-lg w-full">{activeTab === 'login' ? 'Login' : 'Create Account'}</button>
                </form>
            </div>
        </div>
        <Footer/>
        </div>
    );
}
