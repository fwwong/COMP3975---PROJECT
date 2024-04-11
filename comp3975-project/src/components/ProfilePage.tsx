import React, { useState, useEffect } from 'react';
import ENDPOINTS from '../config/config';
import Navbar from './nav/Navbar';
import Footer from './nav/Footer';

interface UserProfile {
  id: number;
  name: string;
  email: string;
  overall_rating: number;
  created_at: string; // ISO date string
  listings: Array<{
    id: number;
    title: string;
    description: string;
    price: number;
  }>;
  reviews: Array<{
    id: number;
    reviewer_id: number;
    rating: number;
    comment: string;
    reviewer_name?: string;
  }>;
}

const ProfilePage: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileResponse = await fetch(`${ENDPOINTS.USERS}/details/me`, {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!profileResponse.ok) {
          throw new Error('Network response was not ok for profile');
        }
        const profileData = await profileResponse.json();

        const listingsResponse = await fetch(`${ENDPOINTS.POSTS}/user/${profileData.id}`, {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!listingsResponse.ok) {
          throw new Error('Network response was not ok for listings');
        }
        const listingsData = await listingsResponse.json();

        // Fetch reviews for the user
        const reviewsResponse = await fetch(`${ENDPOINTS.REVIEWS}/user/${profileData.id}`, {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!reviewsResponse.ok) {
          throw new Error('Network response was not ok for reviews');
        }
        const reviewsData = await reviewsResponse.json();

        const reviewsWithNames = await Promise.all(reviewsData.map(async (review: any) => {
          const reviewerResponse = await fetch(`${ENDPOINTS.USERS}/${review.reviewer_id}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
          });
          if (!reviewerResponse.ok) {
            console.error('Failed to fetch reviewer details');
            return review; // Return the review unchanged if the fetch fails
          }
          const reviewerData = await reviewerResponse.json();
          return { ...review, reviewer_name: reviewerData.name };
        }));
        
        // Update the state with the fetched profile data, listings, and reviews
        setUserProfile({
          ...profileData,
          listings: listingsData,
          reviews: reviewsWithNames // Assuming the backend returns an array of reviews
        });
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!userProfile) {
    return <div>Loading profile...</div>;
  }

  return (
  <div>
    <Navbar />
    <div className="bg-white-800 text-black py-10 text-center">
      <h1 className="text-3xl font-bold mb-4">{userProfile.name}'s Profile</h1>
      <p className="text-lg">Member Number: {userProfile.id}</p>
      <p className="text-lg">Email: {userProfile.email}</p>
      <p className="text-lg">Rating: {userProfile.overall_rating} / 5</p>
      <p className="text-lg">Member since: {userProfile.created_at}</p>
    </div>
    <div className="bg-gray-900 py-10">
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Listings</h2>
        <ul className="list-inside">
          {userProfile.listings.map((listing) => (
            <li key={listing.id} className="mb-4">
              <h3 className="text-xl font-bold">{listing.title}</h3>
              <p className="text-lg">{listing.description}</p>
              <p className="text-lg">${listing.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <ul className="list-inside">
          {userProfile.reviews.map((review) => (
            <li key={review.id} className="mb-4">
              <p className="text-lg"><strong>{review.reviewer_name}</strong>: {review.comment} ({review.rating} / 5)</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default ProfilePage;
