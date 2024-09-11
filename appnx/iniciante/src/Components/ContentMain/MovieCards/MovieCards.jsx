"use client";

export default function MovieCards({ poster_path, title, overview }) {
    const API_IMG = "https://image.tmdb.org/t/p/w500/";

    return (
        <div className="Card max-w-sm mx-auto bg-slate-950 p-10 rounded-lg shadow-lg overflow-hidden  border-2 border-white  ">
            <img
                className="w-full h-auto border border-white"
                src={poster_path ? API_IMG + poster_path : "/default-image.jpg"}
                // Imagem padrão se o poster_path não estiver disponível
                alt={title}
            />
            <div className="py-0">
                <h2 className="text-xl font-semibold bg-blue-800 py-2 text-white text-center">{title}</h2>
                <p className="text-base bg-blue-800 py-3 text-white text-justify mt-2">{overview}</p>
            </div>
        </div>
    );
}
