
import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const Home = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleDeleteUser = (uid) => {
    getAuth()
      .deleteUser(uid)
      .then(() => {
        navigate('/login')
        localStorage.removeItem("accessToken")
      })
      .catch((error) => {
        console.log('Error deleting user:', error);
      });

  }
  return (
    <div>
      <h1>Welcome To Our Service</h1>
      <button onClick={()=>handleDeleteUser(user?.uid)}>
        Delete User
      </button>
      <button>
        Sign Out
      </button>
    </div>
  )
}

export default Home;