//import axios from 'axios';

//const dbUrl = "http://localhost:3000/db";
//import ToDoItem from '../models/models'

//TodoItem.find().exec(err, todos =>)

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':

      // axios.post(dbUrl + '/add', action)
      //   .then((response) => {
      //     ToDoItem.find().exec((err, todos) => {
      //       if (err) {
      //         res.send(err);
      //       } else {
      //         return todos;
      //       }
      //     })
      //   })
      //   .catch((error) => {
      //     res.send(error);
      //   });
      var newState = [...state];
      const newToDo = {
        id: action.id,
        task: action.task,
        completed: action.completed
      };
      newState.push(newToDo);
      return newState;
    case 'REMOVE_TODO':
      var newState = [];
      state.forEach((ele) => {
        if (ele.id !== action.id) {
          newState.push(ele);
        }
      })
      return newState;
    case 'TOGGLE_TODO':
      var newState = [...state];
      newState.forEach((ele) => {
        if (ele.id === action.id) {
          ele.completed = !ele.completed;
        }
      })
      return newState;
    default:
      return state;
   }
};

export default reducer;
