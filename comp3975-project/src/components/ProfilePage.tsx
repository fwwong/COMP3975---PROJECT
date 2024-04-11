import React, { useState, useEffect } from 'react';

// Assuming you have a UserService to fetch profile data


// This is a simple interface for the user profile
interface UserProfile {
  id: number;
  name: string;
  email: string;
  location: string;
  joined: string; // ISO date string
  listings: Array<{
    id: number;
    title: string;
    description: string;
    price: number;
  }>;
}

const ProfilePage: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

//   useEffect(() => {
// //     // Assuming the UserService has a method to get the user's profile
// //     UserService.getProfile().then((profile) => {
// //       setUserProfile(profile);
// //     }).catch((error) => {
// //       console.error('Failed to fetch profile', error);
// //       // Handle error
// //     });
// //   }, []);

  if (!userProfile) {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      <h1>{userProfile.name}'s Profile</h1>
      <p>Email: {userProfile.email}</p>
      <p>Location: {userProfile.location}</p>
      <p>Member since: {new Date(userProfile.joined).toLocaleDateString()}</p>
      <h2>Listings</h2>
      <ul>
        {userProfile.listings.map((listing) => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <p>${listing.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
