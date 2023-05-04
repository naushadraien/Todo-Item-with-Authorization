
export const TodoItem = ({title, description}) => {
  return (
    <div className="todo">
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}
