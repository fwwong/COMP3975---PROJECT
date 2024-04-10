import React, { useState } from 'react';
import axios from "axios";
import ENDPOINTS from '../../config/config.js'; 
import Navbar from '../nav/Navbar';
import Footer from '../nav/Footer';

export default function Login() {
    const [activeTab, setActiveTab] = useState('login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission behavior
        setError(''); // Clear previous errors

        const apiUrl = activeTab === 'login' ? ENDPOINTS.LOGIN : ENDPOINTS.CREATE_ACCOUNT;
        const userData = activeTab === 'create' ? { name, email, password } : { email, password };

        try {
            const response = await axios.post(apiUrl, userData);
            const token = response.data.authorisation.token;
            const name = response.data.user.name;

            // IMPORTANT, use these for access areas and API calls that require authentication
            localStorage.setItem('token', token);
            localStorage.setItem('name', name);
            // console.log('Token:', token);

            // Redirect the user or perform other actions
            window.location.href = '/dashboard'; // Redirect to a dashboard 
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setError(error.response.data.message);
            } else {
                setError('An unexpected error occurred.');
            }
        }
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
                <form onSubmit={handleSubmit}>
                    {activeTab === 'create' && ( // Conditionally render name input field
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="border-2 border-gray-300 p-4 rounded-lg w-full" />
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" onChange={handleEmailChange} className="border-2 border-gray-300 p-4 rounded-lg w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" onChange={handlePasswordChange} className="border-2 border-gray-300 p-4 rounded-lg w-full" />
                    </div>
 
                    <button className="bg-blue-500 text-white p-4 rounded-lg w-full">{activeTab === 'login' ? 'Login' : 'Create Account'}</button>
                </form>
            </div>
        </div>
        <Footer/>
        </div>
    );
}
