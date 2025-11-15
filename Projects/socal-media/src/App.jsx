import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post");
  return (
    <div className="app-container">
      <Sidebar selectedTab={selectedTab}></Sidebar>
      <div className="content">
        <Header></Header>
        {selectedTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )}
        ;<Footer></Footer>
      </div>
    </div>
  );
}

export default App;
