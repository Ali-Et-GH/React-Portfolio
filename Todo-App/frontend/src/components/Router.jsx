import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoApp from "./todo-list/TodoApp";
import Login from "./Login";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<TodoApp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
