import { TodoBtn } from "./ClientSide"

export const TodoItem = ({title, description, id, completed}) => {
  return (
    <div className="todo">
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div>
          <TodoBtn id={id} completed={completed}  />
        </div>
    </div>
  )
}
