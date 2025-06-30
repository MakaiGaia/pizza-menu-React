import Movie from "../components/MovieList"
import { useState, useEffect } from "react";
export default function Owner(){
    const headerStyle = {
        color: "#edc84b",
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: "4.2rem",
        fontWeight: 300,
        letterSpacing: "3px",
        position: "relative",
        width: "100%",
        display: "block",
    }
    const imgSytle = {
        width: "30rem",
    }
    const footerStyle = {
        textAlign: "center",
    }

    const[movies, setMovies] = useState(
       [
        {
            name: "My Hero Academia: Two Heroes",
        },
        {
            name: "My Hero Academia: Heroes Rising",
        },
        {
            name: "My Hero Academia: World Heroes Mission",
        },
        {
            name: "Yowamushi Pedal The Movie",
        },
        {
            name: "Uchuu Kyoudai"
        }
       ]
    )
    useEffect(() => {
        const data = localStorage.getItem("movies");
        if (data)  setMovies(JSON.parse(data));
    }, []);

    useEffect(() => localStorage.setItem("movies", JSON.stringify(movies)),[movies]);

    const deleteMovie = (movieName) => setMovies(prev => prev.filter((movie) => movie.name !== movieName));
    return(
        <div>
            <header>
                <h1 style={headerStyle}>Pagina del dueño</h1>
            </header>
            <main className="menu">
                <h2>Own by MakaiGaia (Alfonso)</h2>
                <>
                    <img style={imgSytle} src="../../public/profile/IMG20250624155311.jpg" alt="" />
                    <p>
                        Nombre: Alfonso 
                        <br />
                        Nickname: MakaiGaia
                        <br />
                        Numero: +52 56 5670 6811 
                    </p>
                </>
                {movies.length > 0 ?
                (<>
                    <p>Mis peliculas favoritas</p>
                    <ul className="menu">
                        {
                            movies.map((movie) => /*Return*/{
                                return(
                                    <Movie movieObject={movie} key={movie.name} onDelete={deleteMovie} />
                                )
                            })
                        }
                    </ul>
                </>)
                :
                (<>
                <p>Hijole, ya borraste todo, actualiza la página</p>
                </>)
                }
                
            </main>
            <footer style={footerStyle}>
                <p>Aqui estamos, para atenderte</p>
            </footer>
        </div>
        
    
     
        
    )
}