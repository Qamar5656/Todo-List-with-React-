// src/pages/Login.jsx

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // 👈 Import context

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // 👈 Get login method from context
  const [visiblePassword, setVisiblePassword] = useState(false);

  const togglePassword = () => {
    setVisiblePassword(!visiblePassword);
  };
  // 🔐 Form initial values
  const initialValues = {
    userName: "",
    password: "",
  };

  // ✅ Yup validation schema
  const validationSchema = Yup.object({
    userName: Yup.string()
      .email("Invalid email format")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Form submit handler
  const handleSubmit = (values, { setSubmitting }) => {
    const { userName, password } = values;

    if (userName === "admin@gmail.com" && password === "abc123") {
      login("admin"); // 👈 Use context login
      navigate("/dashboard");
    } else if (userName === "user@gmail.com" && password === "abc456") {
      login("user");
      navigate("/dashboard");
    } else if (userName === "guest@gmail.com" && password === "abc789") {
      login("guest");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
      navigate("/unauthorized");
    }

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login Form</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              {/* Username Field */}
              <div>
                <label htmlFor="userName" className="block font-medium">
                  Email
                </label>
                <Field
                  type="text"
                  name="userName"
                  className="w-full border px-3 py-2 rounded-md mt-1"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="userName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block font-medium">
                  Password
                </label>
                <Field
                  type={visiblePassword ? "text" : "password"}
                  name="password"
                  className="w-full border px-3 py-2 rounded-md mt-1"
                  placeholder="Enter your password"
                />

                {/* show password field  */}
                <div className="flex gap-2 pt-2">
                  <input type="checkbox" onClick={togglePassword} />
                  {visiblePassword ? "Hide Password" : " Show Password"}
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
