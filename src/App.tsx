//rrd
import { Route, Routes } from "react-router";
//layout
import Layout from "./Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
};

export default App;
