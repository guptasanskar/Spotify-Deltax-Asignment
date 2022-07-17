import './App.css';
import Navbar from  '../components/Navbar';
import Footer from '../components/footer';
import Songs from '../pages/Songs';
import AddingSong from '../components/AddingSong';
import {BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import AddArtistModal from '../components/AddArtistModal';
import Add_Artist from '../components/Add_Artist';
import Login from '../pages/login';
import SignUp from '../pages/signup';
import Artist from '../pages/Artist';
import React, { useState, useEffect } from "react";
import {getUserFromLocalStorage} from '../utils/LocalstorageItem';




function App() {
  
const [user, setUser] = useState("");
const [isLoggedIn, setIsLoggedIn] = useState(false);
useEffect(() => {
  const userFromLocalStorage = getUserFromLocalStorage();
  if (userFromLocalStorage!==null) {
    setIsLoggedIn(true);
    setUser(userFromLocalStorage.user);
  }
 
}, []);

  return (
    <>
      <Router>
        <Navbar isLoggedIn={isLoggedIn}  />
        <Routes>
          <Route path="/" element={isLoggedIn?<Songs user={user} />:<Login/>} />
 
          <Route path="/login" element={<Login/> } />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/addingSong" element={<AddingSong />} />
          <Route path="/addArtistModal" element={<AddArtistModal />} />
          <Route path="/addArtist" element={<Add_Artist />} />
          <Route path="/artist" element={isLoggedIn?<Artist user={user} />:<Login/>} />
          
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
