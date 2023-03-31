import "./App.css";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <div className="nav-content">
        <nav>
          <Nav />
        </nav>
        <main>
          {/* Thêm điều kiện để render nội dung nào của danh mục nào */}
          {/* Thêm các component ContentX khác để cho từng danh mục */}
          <Content />
        </main>
      </div>
    </div>
  );
}

export default App;
