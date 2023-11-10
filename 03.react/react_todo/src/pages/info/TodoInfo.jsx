import Nav from "../../layout/Nav";
import HeaderInfo from "../../layout/HeaderInfo";

const TodoInfo = () => {
  return (
    <>
      <Nav />
      <HeaderInfo />
      <dl className="w-[390px] h-[660px] my-0 mx-auto flex flex-col items-center bg-white">
        <dt className="w-[336px] mt-[10px] mb-[10px] font-bold">제목</dt>
        <dd className="w-[336px] min-h-[55px] ml-0 p-[6px] flex items-center bg-[#d9d9d9] font-bold rounded-[5px]">
          TypeScript 공부
        </dd>
        <dt className="w-[336px] mt-[10px] mb-[10px] font-bold">상세 내용</dt>
        <dd className="w-[336px] h-[400px] py-[12px] px-[6px] flex items-start bg-[#d9d9d9] font-bold rounded-[5px]">
          내용내용
        </dd>
        <button className="w-[336px] h-[58px] mt-[32px] bg-[#383cc2] text-white text-lg rounded-[10px]">
          수정하기
        </button>
      </dl>
    </>
  );
};

export default TodoInfo;
