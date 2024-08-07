import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="container max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">About Us</h1>
        <p className="mb-4 text-gray-700">
          Welcome to Movie, where we are dedicated to bringing you the best in entertainment. Our team of passionate movie enthusiasts is committed to providing you with the latest news, reviews, and insights into the world of cinema.
        </p>
        <p className="mb-4 text-gray-700">
          Our mission is to create a space where movie lovers can connect, share their thoughts, and stay updated on their favorite films. Whether you're here to find the latest blockbuster hits or discover hidden gems, we've got you covered.
        </p>
        <p className="mb-4 text-gray-700">
          Founded in 2024, Movie started with a simple goal: to offer a user-friendly platform for movie enthusiasts to explore and enjoy content related to their favorite films. Since then, we have grown into a vibrant community of movie lovers from around the world.
        </p>
        <p className="text-gray-700">
          Thank you for visiting Movie. We hope you enjoy your time here and find everything you're looking for. If you have any questions or feedback, feel free to <a href="mailto:contact@movie.com" className="text-blue-500 hover:underline">contact us</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
