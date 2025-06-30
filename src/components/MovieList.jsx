import style from './styles/owner-style.module.css'
export default function MovieList({movieObject, onDelete}){
    return(
        //usando operador ternario para tener una clase condicional
        <li className={`${style.owner}`}>
            <div>
                <h3>{movieObject.name}</h3>
                <button onClick={() => onDelete(movieObject.name)}>Delete movie 🗑️</button>
            </div>
        </li>
    )
}