'use client';
import MovieCards from "@/Components/ContentMain/MovieCards/MovieCards";
import { useState, useEffect } from 'react';

export default function ContentMain() {
    const API_URL =
        "https://api.themoviedb.org/3/movie/popular?api_key=fa1192549721df01a1fb28a7788e6608";
    const API_SEARCH =
        "https://api.themoviedb.org/3/search/movie?api_key=fa1192549721df01a1fb28a7788e6608&query=";

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(API_SEARCH + searchTerm)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    };

    return (
        <div className="container mx-auto p-4">
            <div>
                <div>
                    <form className="p-8 justify-center flex flex-col sm:flex-row items-center gap-4 m-5" onSubmit={handleSubmit}>
                        <input
                            className="   w-full sm:w-1/2 h-12 text-center p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search for a movie..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            className="   border-2 border-blue-500 bg-red-500 text-white w-full sm:w-auto px-6 py-3 mt-2 sm:mt-0 rounded-md hover:bg-green-600 transition-colors"
                            type="submit"
                            placeholder="Procura Filmes"
                            required
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                    {movies.map((el) => (
                        <MovieCards key={el.id} {...el} />
                    ))}
                </div>
            </div>
        </div>
    );
}
