// import React from 'react';
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="text-center relative z-10">
        <h1 className="text-[120px] md:text-[200px] font-black text-red-500 leading-none select-none animate-bounce">
          404
        </h1>

        <div className="w-32 h-4 bg-gray-300 rounded-[100%] mx-auto blur-md mb-8 opacity-50"></div>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 uppercase tracking-tight">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 mt-4 max-w-md mx-auto text-lg">
          Sorry, the page you are looking for could not be found. Perhaps the
          link is incorrect or the page has been moved.
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 transform hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `,
        }}
      />
    </div>
  );
};

export default Error;
