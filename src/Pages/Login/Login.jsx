import { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import useAlert from "../../hooks/useAlert";

const Login = () => {
  const { setUser, loginUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const showAlert = useAlert(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        showAlert("success", "User logged in successfully!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        showAlert("error", `Login failed: ${errorMessage}`);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
       showAlert("error", `Login failed: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          SkillReady Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
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
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-lg font-medium transition-all cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* OR divider */}
        <div className="flex items-center my-4">
          <hr className="grow border-gray-300" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="grow border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition-all cursor-pointer"
        >
          <FcGoogle size={20} className="mr-2" /> Login with Google
        </button>

        {/* Register Link */}
        <p className="text-sm text-gray-500 text-center mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
