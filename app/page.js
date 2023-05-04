import Form from "./components/AddTodosForm"; // default import name can be changed to anything and here Form is used for default import from AddTodosForm.jsx component 
import { TodoItem } from "./components/ServerSide";

const page = () => {
  return (
    <div className="container">
      <Form />
      <section className="todosContainer">
        <TodoItem/>
      </section>
    </div>
  );
};

export default page;
