import React from 'react';
import './css/index.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import './css/App.css';
// Below This add is import page.
import Register from "./pages/register_page.js";



// 404 page.
import Notfound from "./pages/notfound_page.js";




function App() {
  // const LoggedIn = window.sessionStorage.getItem("isLoggedIn")
  // const LoggedInAdmin = window.sessionStorage.getItem("isLoggedInAdmin")
  return (
    
    <div className="App">
      <Routes>
      {/* Start page when open. */}
      <Route path="/" element={<Navigate to="/register" />} />

      {/* Added pages and set path. */}
      <Route path="/register" element={<Register />} />
      {/* <Route path="/main" element={LoggedIn?<Main /> : <Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={LoggedIn?<Profile/> : <Login />}/>
      <Route path="/editshop" element={LoggedIn?<Editshop/> : <Login />} />
      <Route path="/editprofile" element={LoggedIn?<Editprofile/>: <Login />}/>
      <Route path="/manageshop" element={LoggedIn?<Manageshop/> : <Login />}/>
      <Route path="/addproducts" element={LoggedIn?<Addproduct/> : <Login />}/>
      <Route path="/editproduct" element={LoggedIn?<Editproduct/> : <Login />}/>
      <Route path="/cart" element={LoggedIn?<Cart/> : <Login />}/>
      <Route path="/recipe" element={LoggedIn?<Order/> : <Login />}/>
      <Route path="/review" element={LoggedIn?<Review/> : <Login />}/>
      <Route path="/history" element={LoggedIn?<History/> : <Login />}/>
      <Route path="/admin_main" element={LoggedInAdmin?<AdminMain/> : LoggedIn?<Main />: <Login />}/>
      <Route path="/admin_review" element={LoggedInAdmin?<AdminReview/> : LoggedIn?<Main />: <Login />}/> */}

      
      {/* Redirect page to 404 when url out of our url lists */}
      <Route path="/Notfound" element={<Notfound/>}/>
      <Route path="/404" element={<Navigate to="/Notfound" />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;