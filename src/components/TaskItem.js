
const estilos = {
  li: {
    display: "flex",
    alignItems: "center",
    fontSize: "large",
    background: "linear-gradient(70deg, blue, pink)",
    textAlign: "center",
    border: "solid #f2b651 8px",
    margin: "2% 10%",
    borderRadius: "2rem",
    padding: "0.5rem",
    maxHeight: "35rem",
    fontWeight: "bold",
    color:"white"
  },
  checked:{
    width:"20%",
    color:"#4caf50",
    fontSize: "xx-large",
    fontWeight: "bold"
  },
  p:{
    width:"60%",
  },
  closed:{
    width:"20%",
    color:"red",
    fontSize: "xx-large",
    fontWeight: "bold"
  }
  
// .Icon-check {
//   position: absolute;
//   left: 12px;
// }
// .Icon-check--active {
//   color: #4caf50;
// }

// .Icon-delete {
//   position: absolute;
//   top: -24px;
//   right: 0;
// }
// .Icon-delete:hover {
//   color: red;
// }
}

function TaskItem(props){
    return(
      <li  style={estilos.li}>
        <span style={estilos.checked}>V {props.completed}</span>
        <p style={estilos.p}>{props.text}</p>
        <span style={estilos.closed}>X</span>
      </li>
    )
  }
  export {TaskItem}