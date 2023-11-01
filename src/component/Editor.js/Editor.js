import "./Editor.css";

//new 와 Editor 에 사용될 페이지
const Editor = () => {
  return (
    <div className="Editor">
      <div className="editorsection">
        {/* 날짜 */}
        <h4>오늘의 날짜</h4>
      </div>
      <div className="editorsection">
        {/* 감정 */}
        <h4>오늘의 감정</h4>
      </div>
      <div className="editorsection">
        {/* 일기 */}
        <h4>오늘의 일기</h4>
      </div>
      <div className="editorsection">{/* 작성완료 , 취소 */}</div>
    </div>
  );
};

export default Editor;
