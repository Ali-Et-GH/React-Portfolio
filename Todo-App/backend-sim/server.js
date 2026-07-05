const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

let users = [
  {
    id: 1,
    username: 'User1',
    password: '1234',
  },
  {
    id: 2,
    username: 'User2',
    password: '12345',
  }
]

let todosData = [
  {
    id: 1,
    todos: [
      {
        id: 1,
        title: "Learn React",
        description: "Understand components and hooks",
        done: false
      },
      {
        id: 2,
        title: "Build Redux App",
        description: "Practice state management",
        done: true
      },
      {
        id: 3,
        title: "Create Backend",
        description: "Set up Express server",
        done: false
      }
    ]
  },
  {
    id: 2,
    todos: [
      {
        id: 1,
        title: "Design Landing Page",
        description: "Create wireframes and choose color palette",
        done: false
      },
      {
        id: 2,
        title: "Implement Authentication",
        description: "Set up login and registration with JWT",
        done: false
      },
      {
        id: 3,
        title: "Write Unit Tests",
        description: "Cover reducers and components with tests",
        done: true
      },
      {
        id: 4,
        title: "Optimize Performance",
        description: "Use memoization and lazy loading where needed",
        done: false
      },
      {
        id: 5,
        title: "Deploy Application",
        description: "Push project to production server",
        done: false
      }
    ]
  }
];

app.post("/login", (req, res) => {
  const {username, password} = req.body;
  
  const user = users.find(u => u.username == username);
  if(!user) res.json();
  if(user.password === password) res.json(user);
})

app.post("/todos", (req, res) => {
  const userTodos = todosData.find(t => t.id === req.body.id);
  
  if(userTodos) res.json(userTodos.todos);
  else {
    const newTodoData = {id: req.body.id, todos: []}
    todosData = [...todosData, newTodoData];
    res.json(newTodoData.todos);
  }
});

app.post('/add-todo', (req, res) => {
  let userTodos = todosData.find(t => t.id === req.body.id);
  userTodos.todos = [...userTodos.todos, req.body.todo];
  res.sendStatus(200);
})

app.post('/remove-todo', (req, res) => {
  let userTodos = todosData.find(t => t.id === req.body.userId);
  userTodos.todos = userTodos.todos.filter(t => t.id !== req.body.todoId);
  res.sendStatus(200);
})

app.post('/edit-todo', (req, res) => {
  let userTodos = todosData.find(t => t.id === req.body.userId);
  let oldTodo = userTodos.todos.find(t => t.id === req.body.todo.id);
  oldTodo.title = req.body.todo.title;
  oldTodo.description = req.body.todo.description;
  res.sendStatus(200);
})

app.post('/toggle-done', (req, res) => {
  let userTodos = todosData.find(t => t.id === req.body.userId);
  let oldTodo = userTodos.todos.find(t => t.id === req.body.todoId);
  oldTodo.done = !oldTodo.done;
  console.log(oldTodo)
  res.sendStatus(200);
})


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});