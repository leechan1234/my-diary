import Button from "../Button/Button";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header
        title={"Home"}
        leftChild={
          <Button
            type="positive"
            text={"긍정 버튼"}
            onClick={() => {
              alert("positive 버튼");
            }}
          />
        }
        rightChild={
          <Button
            type="negative"
            text={"부정 버튼"}
            onClick={() => {
              alert("negative 버튼");
            }}
          />
        }
      />
      {/* <Button
        text={"기본 버튼"}
        onClick={() => {
          alert("hi");
        }}
      /> */}
    </div>
  );
};

export default Home;
