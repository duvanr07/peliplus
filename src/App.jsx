import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { AppRouter } from "./router/appRouter.jsx";

function App() {
  return (
    <>
      <header>
        <h2 className="title">📺 Películas Chigüiro</h2>

        <div className="row">
          <div className="col-8 offset-2">
            <Navbar />
          </div>
        </div>
      </header>

      <AppRouter />
    </>
  );
}

export default App;
