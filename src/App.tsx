import './App.css';
import { Parent } from './components/hooks/use_context/parent';
import { APICall } from './components/hooks/use_effect/use_effect';
import { MemoExample } from './components/hooks/use_memo/useMemo';
import { Todo } from './components/hooks/use_x/todo';
import { CountRenders } from './components/hooks/use_ref/count_renders';
import { Focus } from './components/hooks/use_ref/focus';
import { CountCats } from './components/hooks/use_state/count_cats';
import { TaskApp } from './components/hooks/use_reducer/todo_app';
import { Section } from './components/section';

function App() {

	return (
		<>
			<div className='App'>

				<Section>
					<Parent />
				</Section>

				<Section>
					<APICall />
				</Section>

				<Section>
					<MemoExample />
				</Section>

				<Section>
					<CountRenders />
					<Focus/>
				</Section>

				<Section>
					<CountCats cats={2} catsIcon={"🐈"}/>
				</Section>

				<Section>
					<Todo />
				</Section>

				<Section>
					This is an extension!
					{/* <TaskApp /> */}
				</Section>
			</div>
		</>
	);
}

export default App;
