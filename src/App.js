import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
// import { Util } from "./component/Util";
import Diary from "./component/pages/Diary";
import New from "./component/pages/New";
import Home from "./component/pages/Home";
import Edit from "./component/pages/Edit";
import Editor from "./component/Editor.js/Editor";

function App() {
  return (
    <div>
      <Editor/>
    </div>
    // <div className="App">
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/new" element={<New />} />
    //     <Route path="/diary/:id" element={<Diary />} />
    //     <Route path="/edit" element={<Edit />} />
    //   </Routes>
    //   <div>
    //     <Link to={"/"}>Home</Link>
    //     <Link to={"/new"}>New</Link>
    //     <Link to={"/diary"}>Diary</Link>
    //     <Link to={"/edit"}>Edit</Link>
    //   </div>
    // </div>
  );
}

export default App;
