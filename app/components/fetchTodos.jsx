import React from 'react'
import { TodoItem } from './ServerSide'
import { cookies } from 'next/headers';

const fetchAllTodos = async (token) => {
    try {
      const res = await fetch(`${process.env.URL}/api/gettask`, { //it is serverside thats why we are using process.env.URL
        cache: "no-cache", //this is for SSR in nextjs
        headers: {
          cookie: `token=${token}` //used token from cookies because nextjs SSR does not work
        },
      });
      const data = await res.json();
      if (!data.success) {
        return [];
      } else {
        return data.todos;
      }
    } catch (error) {
      return [];
    }
  };

const Todos = async () => {
  const token = cookies().get("token")?.value;
    const tasks = await fetchAllTodos(token); //fetching the todos from the server

  return (
    <section className="todosContainer">
        {tasks?.map((elem) => (
          <TodoItem
            key={elem._id}
            title={elem.title}
            description={elem.description}
            id={elem._id}
            completed={elem.isCompleted}
          />
        ))}
      </section>
  )
}

export default Todos;