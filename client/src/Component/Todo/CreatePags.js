//CreatePags.js
import React, { useState } from "react";
const CreatePags = () => {
  const [addAction, newAddaction] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  //추가했을 때 작동할 버튼에 대한 함수 생성
  const handleSubmit = (e) => {
    e.preventDefault();

    //추가한 내용 넣어주기
    const newAction = { id, title, genre };
    const newAddactions = [...addAction, newAction];
    newAddaction(newAddactions);

    //내용 넣어주고나서 초기화 시키고 싶다면
    //초기화해주는 set 작성해주기
    console.log(id);
    console.log(title);
    console.log(genre);

    setId("");
    setTitle("");
    setGenre("");
  };
  return (
    <div>
      <h2>Create Page</h2>
      <form onSubmit={handleSubmit}>
        <label>아이디 : </label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <br />
        <label>제목 : </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>내용 : </label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <br />

        <br />
        <button type="submit">할 일 추가하기</button>
      </form>
      <ul>
        {addAction.map((action, index) => (
          <div key={index}>
            <div>{action.id}</div>
            <div>{action.title}</div>
            <div>{action.genre}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default CreatePags;
