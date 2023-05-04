'use client'

const addTodosForm = () => {
  return (
    <div className='login'>
        <section>
            <form>
                <input type="text" placeholder='Enter Todos title' />
                <input type="text" placeholder='Enter Todos description' />
                <button type='submit'>Add Task</button>
            </form>
        </section>
    </div>
  )
}

export default addTodosForm