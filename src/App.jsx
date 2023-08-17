import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Play from "./pages/Play";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/:postTitle" element={<Play />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// i need a change for my github contributions today :)
export default App;
