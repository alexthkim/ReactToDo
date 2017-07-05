const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      var newState = [...state];
      const newToDo = {
        id: action.id,
        task: action.task,
        completed: action.completed
      };
      newState.push(newToDo);
      return newState;
    default:
      return state;
   }
};

export default reducer;
