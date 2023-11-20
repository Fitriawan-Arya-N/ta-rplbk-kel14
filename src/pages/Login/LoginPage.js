// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = ({ onLogin, isLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch user data from FakeStore API
      const response = await fetch('https://fakestoreapi.com/users');
      const users = await response.json();

      // Simulate authentication logic by checking username and password
      const user = users.find((user) => user.username === username && user.password === password);

      if (user) {
        onLogin(user);
        navigate('/');
        // Show a success toast notification with green background and white text
        toast.success('Login successful!', {
          autoClose: 3000,
          style: { background: '#8FDBAD', color: 'white' },
        });
      } else {
        // Show an error toast notification for login failure with yellow background
        toast.error('Invalid username or password. Please try again.', {
          style: { background: 'yellow' },
        });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Show an error toast notification for other errors with red background
      toast.error('An error occurred during login. Please try again later.', {
        style: { background: 'red' },
      });
    }
  };

  if (isLoggedIn) {
    navigate('/');
  }

  // ...

  return (
    <div className="login-page d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <div className="row">
              {/* Kolom Gambar dan Form (Sisi Kiri) */}
              <div className="col-md-8 d-none d-md-block style:padding:0px;">
                {/* Card for Image and Form */}
                {/* Add your image or illustration here */}
                <img
                  src="https://img.freepik.com/free-photo/top-view-model-covered-with-clothes_23-2149704522.jpg?w=1060&t=st=1700440861~exp=1700441461~hmac=e437b881d634bc8fcbf4dbae065999f2bfa2e3426a4081b3d5168c86fed99ce0"
                  alt="Sample image"
                  className="img-fluid"
                />
              </div>

              {/* Kolom Formulir Login (Sisi Kanan) */}
              <div className="col-md-4 align-items-center mt-5 ">
                <h2 className="text-center mb-4 ">Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // ...

};

export default LoginPage;
