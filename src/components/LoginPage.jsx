import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    // Here you would typically handle the login logic
    console.log(values);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <Field
                    name="username"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                  />
                  {errors.username && touched.username ? (
                    <div className="text-red-500 text-xs mt-1">{errors.username}</div>
                  ) : null}
                </div>
                <div>
                  <Field
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  {errors.password && touched.password ? (
                    <div className="text-red-500 text-xs mt-1">{errors.password}</div>
                  ) : null}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginPage;
