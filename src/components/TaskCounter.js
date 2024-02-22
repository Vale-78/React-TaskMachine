import activities2 from "../assest/activities2.jpg"
const estilos = {
    title:{
        fontFamily: "PT Serif",
        fontSize: "xxx-large",
        background: "linear-gradient(177deg, rgb(215 148 34), blue)",
        // background: "linear-gradient(70deg, blue, pink)",
        textAlign: "center",
        margin: 0,
        padding: "30px 48px",
        color:"#f2b651"
    },
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    img:{
        width:"50%",
        maxWidth:"50%",
        minWidth:"30%",
        height:"auto"
    },
    countTasks:{
        display: "flex",
        flexDirection:"column"
    },
    p:{
        fontSize: "x-large",
        backgroundColor: "rgb(242 182 81 / 72%)",
        textAlign: "center",
        border: "solid rgb(29 85 100) 4px",
        borderRadius: "2rem",
        marginLeft: "10%",
        marginRight: "10%",
        padding: "12px 0",      
    },
    h2:{
        fontSize: "x-large",
        backgroundColor: "rgb(242 182 81 / 72%)",
        textAlign: "center",
        border: "solid rgb(29 85 100) 4px",
        borderRadius: "2rem",
        marginLeft: "10%",
        marginRight: "10%",
        padding: "12px 0",
        fontWeight: "normal",
    },
   span:{
        fontWeight:"bold",
        fontSize: "xx-large",
        color:"rgb(29 85 100) ",
    },
    '@media (max-width: 450px)': {
        p:{
           fontSize: "large", 
        }
    },

    h3:{
        fontSize: "x-large",
        textAlign: "center",
        margin: 0,
    }
}

function TaskCounter({ total, completed }) {
    return (
        <>
            <h1 style={estilos.title}>Organiza tu día</h1>
            <div style={estilos.container}>
                <img style={estilos.img} src={activities2} alt="imagen de actividades"/> 
                <div style={estilos.countTasks}>
                    <p style={estilos.p}>Aquí podrás optimizar tu día creando, quitando o añadiendo tareas.</p>
                    <h3 style={estilos.h3}>Tu progreso💪🏽</h3>
                    <h2 style={estilos.h2}>Has completado <span style={estilos.span}>{completed}</span> de <span style={estilos.span}>{total}</span> Tareas</h2>
                </div>
            </div>
        </>
    );
}
export { TaskCounter };
