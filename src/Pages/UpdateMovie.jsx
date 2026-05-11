// import React from 'react';
// import { use } from "react";
// import { AuthContest } from "../Contexts/AuthContext";
import { useLoaderData } from "react-router";

const UpdateMovie = () => {
  const data = useLoaderData();
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      genre: e.target.genre.value,
      releaseYear: e.target.releaseYear.value,
      director: e.target.director.value,
      duration: e.target.duration.value,
      cast: e.target.cast.value,
      rating: e.target.rating.value,
      plotSummary: e.target.plotSummary.value,
      posterUrl: e.target.posterUrl.value,
      language: "English",
      country: "USA",
    };
    console.log(formData);
    // console.log(user.email)

    fetch(`http://localhost:3000/movie/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl overflow-hidden border border-gray-200">
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <h1 className="font-bold text-center">Update</h1>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold text-yellow-700 uppercase tracking-wider">
                  Basic Information
                </h2>
              </div>
              <hr className="mb-6 border-gray-200" />

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                    Movie Title
                  </label>
                  <input
                    defaultValue={data.title}
                    type="text"
                    name="title"
                    placeholder="Enter movie title"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-50 text-sm"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                      Genre
                    </label>
                    <select
                      defaultValue={data.genre}
                      name="genre"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-50 text-sm text-gray-500"
                      required
                    >
                      <option value="ds">Select Genre</option>
                      <option value="action">Action</option>
                      <option value="drama">Drama</option>
                      <option value="sci-fi">Sci-Fi</option>
                      <option value="thriller">Thriller</option>
                      <option value="crime">Crime</option>
                      <option value="animation">Animation</option>
                      <option value="horror">Horror</option>
                      <option value="romance">Romance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                      Release Year
                    </label>
                    <input
                      defaultValue={data.releaseYear}
                      type="number"
                      name="releaseYear"
                      placeholder="e.g. 2024"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-50 text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                      Director
                    </label>
                    <input
                      defaultValue={data.director}
                      type="text"
                      name="director"
                      placeholder="Director name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-50 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                      Duration (Min)
                    </label>
                    <input
                      defaultValue={data.duration}
                      type="number"
                      name="duration"
                      placeholder="e.g. 148"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-50 text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                    Cast
                  </label>
                  <input
                    defaultValue={data.cast}
                    type="text"
                    name="cast"
                    placeholder="Actor 1, Actor 2, Actor 3"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-50 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                    Rating (0-10)
                  </label>
                  <input
                    defaultValue={data.rating}
                    type="number"
                    name="rating"
                    placeholder="e.g. 8.5"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-50 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                    Plot Summary
                  </label>
                  <textarea
                    defaultValue={data.plotSummary}
                    name="plotSummary"
                    rows="3"
                    placeholder="Brief description of the movie plot..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-50 text-sm resize-none"
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold text-yellow-700 uppercase tracking-wider">
                  Media & Details
                </h2>
              </div>
              <hr className="mb-6 border-gray-200" />

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                    Poster URL
                  </label>
                  <input
                    defaultValue={data.posterUrl}
                    type="url"
                    name="posterUrl"
                    placeholder="https://example.com/poster.jpg"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-50 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                      Language
                    </label>
                    <input
                      defaultValue={data.language}
                      type="text"
                      name="language"
                      defaultValue="English"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-50 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                      Country
                    </label>
                    <input
                      defaultValue={data.country}
                      type="text"
                      name="country"
                      defaultValue="USA"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-50 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
            >
              Update Movie
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMovie;
