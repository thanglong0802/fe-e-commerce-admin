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
          <Content />
        </main>
      </div>
    </div>
  );
}

export default App;
