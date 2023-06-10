import { TaskType,FilterType } from "./Todolist"

test('correct task should be added to correct array', () => {
    const startState: TaskType[] = [
      {id: "" + Math.random(), title: 'CSS', status: "Active"},
      {id: "" + Math.random(), title: 'JS', status: "Active"},
      {id: "" + Math.random(), title: 'React', status: "Active"}
  ]
  const addTask = (title: string) =>[...startState, { id: "" + Math.random(), title, status: "Active" }]
  const endState = addTask('newTask')
  
  expect(endState.length).toBe(4)
  expect(endState[0].title).toBe('CSS')
  expect(endState[3].title).toBe('newTask')
  });
  
  test('status of specified task should be changed', () => {
    const startState: TaskType[] = [
      {id: "" + Math.random(), title: 'CSS', status: "Active"},
      {id: "" + Math.random(), title: 'JS', status: "Active"},
      {id: "" + Math.random(), title: 'React', status: "Active"}
  ]
  
  const changeTaskStatus = (id: string, filter: FilterType) => {
      const newTasks = startState.map((t) =>
        t.id === id ? { ...t, status: filter } : t
      );
      return newTasks;
    };
  
  const endState = changeTaskStatus(startState[0].id, 'Completed')
  
  
  expect(endState[0].status).toBe('Completed')
  expect(endState[1].status).toBe('Active')
  expect(endState[2].status).toBe('Active')
  expect(endState.length).toBe(3)
  });
  
  test('remove task', () => {
    const startState: TaskType[] = [
      {id: "" + Math.random(), title: 'CSS', status: "Completed"},
      {id: "" + Math.random(), title: 'JS', status: "Active"},
      {id: "" + Math.random(), title: 'React', status: "Completed"}
  ]
  const removeTasksCompleted = () => startState.filter((t) => t.status !== "Completed")
  
  const endState = removeTasksCompleted()
  
  expect(endState.length).toBe(1)
  expect(endState[0].title).toBe('JS')
  });
  
  

