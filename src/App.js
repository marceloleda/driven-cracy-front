import Home from "./Components/home";
import AddSurvey from "./Components/addSurvey";
import Poll from "./Components/poll";
import AddOptions from "./Components/addOptions";
import GetOptions from "./Components/getOptions";
import { Route, Routes } from "react-router";
import GetResult from "./Components/getResult";



import { createGlobalStyle } from "styled-components";


function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/add-survey" element={<AddSurvey/>}/>
        <Route path="/poll" element={<Poll/>}/>
        <Route path="/choice" element={<AddOptions/>}/>
        <Route path="/poll/:id/choice" element={<GetOptions/>}/>
        <Route path="//poll/:id/result" element={<GetResult/>}/> 


      </Routes>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
body{
  background: #9dabe8;
  display:flex;
  align-items:center;
  justify-content:center;

}
`
