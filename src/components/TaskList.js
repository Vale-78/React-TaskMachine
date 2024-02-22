const estilos = {
  ul: {
  borderRadius: "1rem",
  maxHeight: "35rem",
  overflowY: "scroll",
  fontWeig: "bold",
  listStyle: "none"
  },
}
function TaskList({children}){
    return(
    <ul style={estilos.ul}>
      {children}
    </ul>)
    }
export{TaskList};    