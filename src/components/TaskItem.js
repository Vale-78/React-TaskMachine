import "./TaskItem.css";

function TaskItem(props) {
  return (
    <li className="li">
      <span
        className={`icon icon-checked ${
          props.completed && "icon-checked--active"
        }`}
        onClick={props.onComplete}
      >
        V
      </span>
      {/* operador ternariom si completed es true, entonces  checked-active (se pone en verde) */}
      <p className={`p ${props.completed && "p--complete"} `}>{props.text}</p>

      <span className={`icon icon-delete`} onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}
export { TaskItem };
