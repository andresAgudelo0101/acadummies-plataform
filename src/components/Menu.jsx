import { contenido_semana1 } from "./week1/dataWeek";

function Menu() {
    return (
        <div>
            {contenido_semana1.map((val,key)=>(
                <p key={key}>{val.titulo}</p>
            ))}
        </div>
    )
}

export default Menu;
