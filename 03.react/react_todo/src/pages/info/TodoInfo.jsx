const TodoInfo = () => {
  return (
    <div id="app" className="todoInfo">
      <dl>
        <dt className="todoListTitle">제목</dt>
        <dd>TypeScript 공부</dd>
        <dt className="todoListTitle">상세 내용</dt>
        <dd className="detailContent">내용내용</dd>
        <button className="modifyButton">수정하기</button>
      </dl>
    </div>
  );
};

export default TodoInfo;
