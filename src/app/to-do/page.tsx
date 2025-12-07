"use client";

import { useState } from "react";

interface TodoItem {
  id: number;
  title: string;
  date: string;
  deadline: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [deadline, setDeadline] = useState("");

  const addTodo = () => {
    if (!title.trim()) return;

    const newTodo: TodoItem = {
      id: Date.now(),
      title,
      date,
      deadline,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
    setDate("");
    setDeadline("");
  };

  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "50px",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "20px",
          }}
        >
          📝 <span>To-Do List</span>
        </h2>

        <input
          type='text'
          placeholder='할 일 입력'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "15px",
          }}
        />

        <label>날짜:</label>
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "15px",
            marginTop: "5px",
          }}
        />

        <label>마감일:</label>
        <input
          type='date'
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            marginTop: "5px",
          }}
        />

        <button
          onClick={addTodo}
          style={{
            width: "100%",
            padding: "12px",
            background: "#16a34a", // ✅ 초록색
            color: "white",
            border: "none",
            fontSize: "16px",
            borderRadius: "6px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          추가하기
        </button>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #e5e5e5",
                marginBottom: "12px",
                background: todo.completed ? "#e9ffe9" : "#f9f9f9",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />

                <div>
                  <strong
                    style={{
                      fontSize: "16px",
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.title}
                  </strong>

                  <div
                    style={{ fontSize: "12px", marginTop: "5px", opacity: 0.7 }}
                  >
                    📅 날짜: {todo.date || "-"} <br />⏰ 마감일:{" "}
                    {todo.deadline || "-"}
                  </div>
                </div>
              </div>

              {/* 삭제 버튼 */}
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  padding: "5px 10px",
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
