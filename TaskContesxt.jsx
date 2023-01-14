// necesitamos crear un contexto para que los demas componentes puedan acceder a ciertas variable y funciones
import { createContext } from "react";
import { useState, useEffect, useContext } from "react";

//creamos contexto
export const TaskContex = createContext()

//creamos el componente que provera contexto
export const TaskContexProvider = (props) => {

    //creamos un array que maneje las tareas
    const [tasks, setTasks] = useState([])

    //funcion para crear taras
    const createTask = (titleTask, desciptionTask) => {

        //[...arrayPrevio, elementoAñadido]
        setTasks([...tasks, {
            title: titleTask,
            id: tasks.length,
            desciption: desciptionTask
        }])
    }

    //funcion para eliminar tarea, en react se usa filter para borrar un elemento de un array
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id != taskId))
    }

    //value es el valor del contexto
    return <TaskContex.Provider value={{tasks, createTask, deleteTask}}>
        {/* props.children es donde iran todos los hijos de este elemento */}
        {props.children}
    </TaskContex.Provider>

}
