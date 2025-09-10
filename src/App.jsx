import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./components/homepage/HomePage";
import TrekPage from "./components/trek/TrekPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/:slug"
          element={
            <Layout>
              <TrekPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
