import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context-api/user/UserContext";

function EmployerRegForm () {
    const navigate = useNavigate();
    const { register, login, loading, error } = useContext(UserContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const success = await register({
            firstName,
            lastName,
            email,
            password,
            role: "employer"
        });
        if (success) {
            // Auto-login after registration
            const loginSuccess = await login(email, password);
            if (loginSuccess) {
                navigate('/employer/accountsetup');
            }
        }
    };

    return (
    <>
    <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <div className="flex gap-4">
            <input
            type="text"
            placeholder="First Name"
            className="w-1/2 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            />
            <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            />
        </div>
        <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
        />

        <label className="flex items-center text-sm">
            <input type="checkbox" required className="mr-2" />
            I’ve read and agree with your <a href="#" className="text-blue-600 ml-1">Terms of Services</a>
        </label>

        <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition cursor-pointer"
            disabled={loading}
        >
            {loading ? "Creating Account..." : "Create Account →"}
        </button>
    </form>
    </>
);
}

export default EmployerRegForm;
