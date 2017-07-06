import express from 'express';
//import ToDoItem from '../models/models'
const router = express.Router();

router.post('/add', (req, res) => {
  const newToDo = new ToDoItem ({
    task: req.body.task,
    completed: req.body.completed
  });

  newTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
  });
});

export default router;
