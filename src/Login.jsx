import MainHeader from './assets/component/home-component/MainHeader';
import TopHeader from './assets/component/home-component/TopHeader';
import Footer from './assets/component/home-component/Footer';
import { Link, useNavigate } from 'react-router-dom';
import staff1 from './assets/images/staff1.jpg';
import { useContext, useState } from 'react';
import { UserContext } from './assets/context-api/user/UserContext';

function Login() {
  const {login, loading, error} = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await login(email, password);
    if (success) {
      navigate('/app/dashboard'); // ✅ only redirect if login is successful
    }
    } catch {
      // Error is handled by context
    }
  };

  return (
    <>
    <TopHeader />
    <MainHeader />
     <div className="flex min-h-screen">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-start lg:items-center justify-center bg-white px-6 py-12">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Login</h2>
          <p className="text-sm">
            Don't have account? <Link to="/register" className="text-blue-600 font-medium">Register</Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="text-red-600 text-sm">{error}</div>}

            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button type="submit" disabled={loading} className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition cursor-pointer">
              {loading ? 'Logging in...' : 'Login →'}
            </button>
          </form>
          <div className='flex items-center justify-center gap-4 mt-4'>
            <p className="text-sm">
            Forgot Password? <Link to="/resetpassword" className="text-blue-600 font-medium">Reset</Link>
          </p>
            
          </div>

          <div className="flex items-center justify-center gap-4 mt-4">
            <button className="flex items-center border px-4 py-2 rounded-md text-sm gap-2 hover:bg-gray-50">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5" />
              Login with Facebook
            </button>
            <button className="flex items-center border px-4 py-2 rounded-md text-sm gap-2 hover:bg-gray-50">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Login with Google
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Image & Stats */}
      <div className="hidden lg:flex w-1/2 bg-blue-900 text-white items-center justify-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
        <img
          src={staff1}
          alt="Team"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="z-10 text-center max-w-md rounded-md bg-blue-400 p-5">
          <h2 className="text-2xl font-semibold mb-4">Over 1,75,324 candidates<br />waiting for good employees.</h2>
          <div className="flex justify-center gap-6 text-sm">
            <div>
              <div className="text-lg font-bold">1,75,324</div>
              <div>Live Job</div>
            </div>
            <div>
              <div className="text-lg font-bold">97,354</div>
              <div>Companies</div>
            </div>
            <div>
              <div className="text-lg font-bold">7,532</div>
              <div>New Jobs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Login