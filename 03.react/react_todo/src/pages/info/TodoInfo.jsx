import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../layout/Nav";
import HeaderInfo from "../../layout/HeaderInfo";

const TodoInfo = () => {
  const [searchParams] = useSearchParams();
  const [datilTodo, setDetailTodo] = useState("");
  const _id = searchParams.get("_id");
  const navigate = useNavigate();

  const getData = async () => {
    const response = await axios(`http://localhost:33088/api/todolist/${_id}`);
    setDetailTodo(response?.data.item);
    console.log(response?.data.item);
  };

  console.log("todo", datilTodo);

  useEffect(() => {
    getData();
  }, [_id]);

  return (
    <>
      <Nav />
      <HeaderInfo />
      <dl className="w-[390px] h-[660px] my-0 mx-auto flex flex-col items-center bg-white">
        <dt className="w-[336px] mt-[10px] mb-[10px] font-bold">제목</dt>
        <dd className="w-[336px] min-h-[55px] ml-0 p-[6px] flex items-center bg-[#d9d9d9] font-bold rounded-[5px]">
          {datilTodo.title}
        </dd>
        <dt className="w-[336px] mt-[10px] mb-[10px] font-bold">상세 내용</dt>
        <dd className="w-[336px] h-[400px] py-[12px] px-[6px] flex items-start bg-[#d9d9d9] font-bold rounded-[5px]">
          {datilTodo.content}
        </dd>
        <button
          className="w-[336px] h-[58px] mt-[32px] bg-[#383cc2] text-white text-lg rounded-[10px]"
          onClick={() => navigate(`/update?_id=${_id}`)}
        >
          수정하기
        </button>
      </dl>
    </>
  );
};

export default TodoInfo;
