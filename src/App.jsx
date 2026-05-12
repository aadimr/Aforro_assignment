import Layout from "./layout/Layout";
import { routing } from "./routingMapping/RoutingMapping";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={<Layout />}
        >
          <Route
            index
            element={<Dashboard />}
          />

          {routing.map(({ path, element }, idx) => (
            <Route
              key={idx}
              path={path}
              element={element}
            />
          ))}
        </Route>

        {/* Optional root redirect */}
        <Route
          path="/"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;