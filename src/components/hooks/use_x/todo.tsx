import { useTodo } from "./use_todo";
interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const Todo: React.FC = () => {
const [data, isFetching] = useTodo<TodoResponse>("https://jsonplaceholder.typicode.com/todos/1")
	
return (
	<>
		<h2>Custom Hook</h2>

		{isFetching && <p>Fetching...</p>}
      {data && typeof data === 'object' && (
        <p>{data.title}</p>
      )}
	</>
)
}

