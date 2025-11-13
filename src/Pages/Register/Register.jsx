import { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import useAlert from "../../hooks/useAlert";

const Register = () => {
  const {
    registerUser,
    signInWithGoogle,
    setUser,
    updateUser,
  } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const showAlert = useAlert(); 
  const [passwordError, setPasswordError] = useState("");


 const handleSubmit = (e) => {
   e.preventDefault();

   const name = e.target.name.value;
   const email = e.target.email.value;
   const photo = e.target.photo.value;
   const password = e.target.password.value;

   // Password validation
   if (!/[A-Z]/.test(password)) {
     setPasswordError("Password must contain at least one uppercase letter.");
     return;
   }
   if (!/[a-z]/.test(password)) {
     setPasswordError("Password must contain at least one lowercase letter.");
     return;
   }
   if (password.length < 6) {
     setPasswordError("Password must be at least 6 characters long.");
     return;
   }

   // Clear previous error
   setPasswordError("");

   registerUser(email, password)
     .then((result) => {
       const user = result.user;
       updateUser({ ...user, displayName: name, photoURL: photo }).then(() => {
         setUser({ ...user, displayName: name, photoURL: photo });
         showAlert("success", "Registration successful");
       });
       navigate(`${location.state ? location.state : "/"}`);
     })
     .catch((error) => {
       showAlert("error", `Registration failed: ${error.code}`);
     });
 };

  const handleGoogleRegister = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
      showAlert("error", `Registration failed: ${error.code}`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Create Your Account
        </h2>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1" htmlFor="photo">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-lg font-medium transition-all"
          >
            Register
          </button>
        </form>

        {/* OR divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Register */}
        <button
          onClick={handleGoogleRegister}
          className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition-all"
        >
          <FcGoogle size={20} className="mr-2" /> Register with Google
        </button>

        {/* Login Link */}
        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
