//Todo.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Todo() {
  //js로 state 상태관리
  const [action, setAction] = useState([]);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route>메인</Route>
          <Route>생성</Route>
        </Routes>
      </div>
    </Router>
  );
}
export default Todo;
