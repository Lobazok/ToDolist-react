//mecesitamos acceder al contexto
import { useContext, useState } from "react";
import { TaskContex } from "../context/TaskContext.jsx";
import "./Tasklis.css"

//componente de tarjet
const TaskCard = ({ task }) => {
    //importmos deleteTask
    const { deleteTask } = useContext(TaskContex)

    return <article className="TaskCard">
        <h2>{task.title}</h2>
        <p>{task.desciption}</p>
        <button onClick={() => { deleteTask(task.id) }}>Eliminar</button>
    </article>
}

//componente de lsita de tareas
export const Takslis = () => {
    //importamos la lista de tareas
    const { tasks } = useContext(TaskContex)

    if (tasks.length == 0) {
        return <section className="Takslis">
            <h2>Tareas</h2>
            <p>No hay tareas :)</p>
        </section>
    } else {
        return <section className="Takslis">
            <h2>Tareas</h2>
            <section className="gru">
                {
                    //creamos un TaskCard por cada tarea
                    tasks.map(task => {
                        return <TaskCard task={task} key={task.id} />
                    })
                }
            </section>
        </section>
    }
}

//formulario para añadir tareas
export const TasksFrom = () => {
    //importamos createTask
    const { createTask } = useContext(TaskContex)

    const [title, setTitle] = useState("")
    const [desciption, setDesciption] = useState("")

    //creamos tarea
    const handleSumbit = (e) => {
        //esto es para que el navegador no se actualize
        e.preventDefault();
        createTask(title, desciption)
    }

    return <section className="TasksFrom">
        <h2>Añadir Tarea</h2>
        <form onSubmit={handleSumbit} >
            <input placeholder="Escrtibe tu tarea"
                onChange={(e) => setTitle(e.target.value)} />
            <input placeholder="Escrtibe una descripcion (opcional)" className="texto"
                onChange={(s) => setDesciption(s.target.value)} />
            <button>Guardar</button>
        </form>
    </section>
}

//un "macro" componente agrupa los componentes anteriores, solo usa este componente y tendras una lista de tareas con react :)
export const TasksAdmin = () => {
    return <>
        <TasksFrom />
        <Takslis />
    </>
}

export default TasksAdmin

