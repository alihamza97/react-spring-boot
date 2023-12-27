import {ToDoRowItem} from "./ToDoRowItem";
export const TodoTable:React.FC<{todos:Todo[],deleteTodo:Function}>=(props) =>{
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (
                    <ToDoRowItem
                        key={todo.rowNumber}
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                        deleteTodo={props.deleteTodo}
                    />
                ))}

            </tbody>
        </table>
    )
}