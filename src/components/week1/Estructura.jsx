function Estructura() {
    return (
        <div>
            <button onClick={()=>{window.localStorage.setItem('key-course',null)}}>cerrar sesion</button>
        </div>
    )
}

export default Estructura;
