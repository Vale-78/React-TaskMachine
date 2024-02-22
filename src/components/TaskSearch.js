import React from "react";

const estilos = {
  search: {
    fontSize: "x-large",
    textAlign: "center",
    border: "8px solid rgb(29 85 100)",
    margin: "6% 0% 0% 10%",
    borderRadius: "2rem",
    padding: "1rem 3rem",
    maxHeight: "35rem",
    overflowY: "scroll",
    fontWeight: "bold",
  },
  container: {
    display: "flex",
  },
};
function TaskSearch({searchValue, setSearchValue}) {
  return (
    <div style={estilos.container}>
      <input
        style={estilos.search}
        placeholder="Search"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}
export { TaskSearch };
