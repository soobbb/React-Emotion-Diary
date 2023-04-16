import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate(); // page moving(useNavigate)
  const [searchPrams, setSeartchParams] = useSearchParams(); // 쿼리스트링(useSearchParams)

  const id = searchPrams.get("id");
  console.log("id: ", id);

  const mode = searchPrams.get("mode");
  console.log("mode: ", mode);

  return (
    <div>
      <h2>Edit</h2>
      <p>이곳은 수정 페이지 임니다.</p>
      <button onClick={() => setSeartchParams({ who: "soob" })}>
        QS 바꾸기
      </button>

      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        홈으로가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
