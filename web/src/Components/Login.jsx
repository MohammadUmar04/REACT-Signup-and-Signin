import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (email === 'admin@gmail.com' && password === 'admin123') {
      navigate('/admin');
    } else if (storedUser && email === storedUser.email && password === storedUser.password) {
      navigate('/UserPage');
    } else {
      alert('Incorrect email or password');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p>
        Dont have an account? <a href="/signup">Signup here</a>
      </p>
    </div>
  );
};

export default Login;
