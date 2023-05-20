import Form from "./components/AddTodosForm"; // default import name can be changed to anything and here Form is used for default import from AddTodosForm.jsx component
import Todos from "./components/fetchTodos";
import { Suspense } from "react";



const page = () => {

  return (
    <div className="container">
      <Form />
      <Suspense fallback={ <div className="loader">Loading...</div> }> {/* Suspense is used to show a loading message until the data is fetched from the server */}
      <Todos/>
      </Suspense>
    </div>
  );
};

export default page;
