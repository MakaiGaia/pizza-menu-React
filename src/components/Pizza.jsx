import style from './styles/pizza-style.module.css'
export default function Pizza({pizzaObject, onDelete}){
    //const soldOut=true;
    //console.log("Props", pizzaObject)
    return(
        //usando operador ternario para tener una clase condicional
        <li className={`${style.pizza} ${pizzaObject.soldOut ? style["sold-out"]:" "}`}>
            <img src={pizzaObject.photoName} alt={pizzaObject.name}/>
            <div>
                <h3>{pizzaObject.name}</h3>
                <p>{pizzaObject.ingredients}</p>
                <p>{pizzaObject.price}</p>
                <button onClick={() => onDelete(pizzaObject.name)}>Delete pizza 🗑️</button>
            </div>
        </li>
    )
}
