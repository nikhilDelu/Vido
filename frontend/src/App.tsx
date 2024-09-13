import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Room } from "./components/Room";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} Component={Landing} />
        <Route path={"/room"} Component={Room} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
