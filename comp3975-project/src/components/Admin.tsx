import React, { useEffect, useState } from 'react';
import ENDPOINTS from "../config/config";
import Footer from "./nav/Footer";
import Navbar from "./nav/Navbar";

export default function Admin() {
    // Assuming you'll want to store fetched data in state
    const [categories, setCategories] = useState([]);
    const [users, setUsers] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');

    const token = localStorage.getItem('token');

    const display_categories = async () => {
        const apiUrl = ENDPOINTS.CATEGORY;
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (!response.ok) throw new Error('Error fetching categories');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Failed to fetch categories:', error);
        }
    };

    const handleCategoryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryName(event.target.value);
    };

    const handleCategoryDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryDescription(event.target.value);
    };

    const handle_category = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent form from reloading the page
    
        // Your existing logic
        const categoryObject = {
            name: categoryName,
            description: categoryDescription,
        };
    
        const apiUrl = ENDPOINTS.CATEGORY;
    
        try {
            const response = await fetch(apiUrl, {
                method: 'POST', // Use POST method to create a new entry
                headers: {
                    'Content-Type': 'application/json', // Indicate that you're sending a JSON object
                    'Authorization': `Bearer ${token}`, // Assuming your API requires an Authorization header
                },
                body: JSON.stringify(categoryObject), // Convert the category object into a JSON string
            });
    
            if (!response.ok) throw new Error('Error creating category');
    
            // Assuming you want to update the list of categories upon successfully creating a new one
            await display_categories();
            
            // Reset the form by clearing the state variables
            setCategoryName('');
            setCategoryDescription('');
    
        } catch (error) {
            console.error('Failed to create category:', error);
        }
    };    

    const display_users = async () => {
        const apiUrl = ENDPOINTS.USERS;
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (!response.ok) throw new Error('Error fetching users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    const toggle_admin = async (user_id: number) => {
        const apiUrl = `${ENDPOINTS.USERS}/${user_id}/toggle-admin`;
    
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            });
    
            if (!response.ok) throw new Error('Error toggling admin status');
    
            // Assuming you want to refresh the list of users to reflect the updated admin statuses
            await display_users();
    
        } catch (error) {
            console.error('Failed to toggle admin status:', error);
        }
    };
    

    const delete_category = async (category_id: number) => {
        const apiUrl = `${ENDPOINTS.CATEGORY}/${category_id}`; 
    
        try {
            const response = await fetch(apiUrl, {
                method: 'DELETE', // Use DELETE method
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
    
            if (!response.ok) throw new Error('Error deleting category');
    
            // Refresh the categories displayed to reflect the deletion
            await display_categories();
    
        } catch (error) {
            console.error('Failed to delete category:', error);
        }
    };
    

    // Fetch categories and users on component mount
    useEffect(() => {
        display_categories();
        display_users();
    }, []); // Empty dependency array means this runs once on mount


    return (
        <div>
            <Navbar />
            <div className="admin-container p-6">
                <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
                <div className="space-y-6">
                    <section className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Categories</h2>
                        <ul className="list-disc pl-5">
                            {categories.map((category: { id: number, name: string, description: string }) => (
                                <li key={category.id} className="mb-1">
                                    <div className="flex justify-between items-center">
                                        <span>{category.name} - {category.description}</span>
                                        <button
                                            onClick={() => delete_category(category.id)}
                                            className="bg-red-500 text-white p-1 rounded-lg hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Users</h2>
                        <ul className="list-disc pl-5">
                            {users.map((user: { id: number, name: string, is_admin: boolean }) => (
                                <li key={user.id} className="mb-1 flex justify-between items-center">
                                    <span>{user.name}</span>
                                    <button
                                        onClick={() => toggle_admin(user.id)}
                                        className={`${user.is_admin ? 'bg-red-500' : 'bg-blue-500'} text-white p-1 rounded-lg hover:${user.is_admin ? 'bg-red-600' : 'bg-blue-600'}`}
                                    >
                                        {user.is_admin ? 'Demote to User' : 'Promote to Admin'}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Add or Edit Category</h2>
                        <form onSubmit={handle_category} className="flex flex-col space-y-2">
                            <input onChange={handleCategoryNameChange} type="text" placeholder="Category name" required className="border-2 border-gray-300 p-2 rounded-lg" />
                            <input onChange={handleCategoryDescriptionChange} type="text" placeholder="Category description" required className="border-2 border-gray-300 p-2 rounded-lg" />
                            <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Submit</button>
                        </form>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );    
}
