// src/pages/auth.tsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/userSlice';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const url = isLogin
            ? 'http://localhost:3001/users/loginuser'
            : 'http://localhost:3001/users/createuser';

        const body = isLogin
            ? JSON.stringify({ email, password })
            : JSON.stringify({ name, email, password });

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body,
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || 'Something went wrong!');
                return;
            }

            // Assuming your API returns user info like { name, email, token }
            dispatch(setUser(data));
            console.log("DISPATCHED DATA TO STORE ---- Auth.tsx line 44")
            navigate('/');
        } catch (err) {
            console.error(err);
            alert('Error connecting to server.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <h1 className="text-3xl font-bold text-white mb-6">{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                {!isLogin && (
                    <div className="mb-6">
                        <label className="block text-gray-300">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full border border-gray-600 rounded p-3 bg-gray-700 text-white"
                            required
                        />
                    </div>
                )}
                <div className="mb-6">
                    <label className="block text-gray-300">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full border border-gray-600 rounded p-3 bg-gray-700 text-white"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full border border-gray-600 rounded p-3 bg-gray-700 text-white"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-500 transition duration-200">
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
            <button
                onClick={() => setIsLogin(!isLogin)}
                className="mt-4 text-blue-400 hover:text-blue-300 transition duration-200"
            >
                {isLogin ? 'Create an account' : 'Already have an account?'}
            </button>
        </div>
    );
};

export default AuthPage;
