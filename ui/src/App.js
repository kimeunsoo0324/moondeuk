import React from "react";
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// Pages
import MainPage from "./Page/MainPage";
import ServicePage from "./Page/ServicePage";
import KeyPageM from "./Page/KeyPageM";
import KeyPageW from "./Page/KeyPageW";
import ConvertPage from "./Page/ConvertPage";
import ConvertResultPage from "./Page/ConvertResultPage";
import SummaryPage from "./Page/SummaryPage";
import SummaryResultPage from "./Page/SummaryResultPage";
import FeedbackPage from "./Page/FeedbackPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="main" element={<MainPage/>}/>
        <Route path="service" element={<ServicePage/>}/>
        <Route path="keyM" element={<KeyPageM/>}/>
        <Route path="keyW" element={<KeyPageW/>}/>
        <Route path="convert" element={<ConvertPage/>}/>
        <Route path="convertResult" element={<ConvertResultPage/>}/>
        <Route path="summary" element={<SummaryPage/>}/>
        <Route path="summaryResult" element={<SummaryResultPage/>}/>
        <Route path="feedback" element={<FeedbackPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;