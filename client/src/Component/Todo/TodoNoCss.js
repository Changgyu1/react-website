import React, { useState, useEffect, useCallback } from "react";

function todo() {}
function TodoNoCss() {
  // 할일 목록 상태
  const [todos, setTodos] = useState([]);
  // 추가할 할 일
  const [newTodo, setNewTodo] = useState("");
  // 할일 갯 수
  const [count, setCount] = useState(0);
  // 수정할 할 일
  // 수정할 일 의 번호의 최초값을 0으로 주면
  // 0번째 인덱스에 있는 할 일을 수정하게 되므로 최초값은 null 로 넣어준다
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTodo, setEditTodo] = useState("");

  // 할 일 추가하는 버튼 함수 생성하기
  const addTodo = () => {
    // 만약에 이미 존재하는 할 일 일경우 추가되지 못하도록 방지
    // includes => 포함
    if (!todos.includes(newTodo)) {
      // todos안에 내용이 포함 newTodo와 같지 않다면
      setTodos([...todos, newTodo]);
      setNewTodo("");
      // 카운트는 선택
      setCount((count) => count + 1);
    } else {
      alert("이미 존재하는 할 일 입니다.");
    }
  };

  // 위 상단 타이틀에서 카운트 갯수 넣어주는 useEffect
  useEffect(() => {
    document.title = `할 일 갯수 ${count}`;
  }, [count]);

  // 삭제
  const removeTodo = (index) => {
    const updatedTodos = [...todos]; // 할 일 목록 복제\
    updatedTodos.splice(index, 1); // index 자리값 1하나만 삭제
    setTodos(updatedTodos); // 변경된 내용으로 값 저장하기
    // 카운트 숫자 변경(선택)
    setCount((count) => count - 1);
  };

  // 수정한 내용 저장하는 버튼
  const saveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos(editingIndex);
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);

    setEditTodo("");
  };

  // 수정 시작하기 버튼
  //  index : 수정할 내용 자리값
  //  todo  : 수정할 일 내용 갖고오기
  const editStart = (index, todo) => {
    setEditingIndex(index);
    setEditTodo(todo);
  };

  return (
    <>
      <h3>할 일 목록</h3>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>할 일 추가하기</button>
      </div>
      {/* 할 일 목록 보여주기 */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
                <button onClick={saveEdit}>수정 완료하기</button>
                <button onClick={cancelEdit}>수정하기 취소</button>
              </div>
            ) : (
              <div>
                {todo}
                <button onClick={() => editStart(index, todo)}>수정하기</button>
                <button onClick={() => removeTodo}>삭제하기</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );

  /*
  return (
    <div>
      <h2>To do List</h2>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>추가하기</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
                <button onClick={saveEdit}>저장</button>
                <button onClick={cancelEdit}>취소</button>
              </div>
            ) : (
              <div>
                {todo}
                <button onClick={() => startEditing(index, todo)}>
                  수정하기
                </button>
                <button onClick={() => removeTodo(index)}>삭제하기</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
  */
}

export default TodoNoCss;
