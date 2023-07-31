import React from 'react';
//usersprofile to log in and out of the website
function UserProfile() {
  const handleLogout = () => {
    alert('User has logged out');
  };

  return (
    <div>
      <h2>User Profile Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;