import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../../pages/Home/HomePage";
// import LibraryPage from "../../pages/Library/LibraryPage";
// import AppViewerPage from "../../pages/AppViewer/AppViewerPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/library" element={<LibraryPage />} /> */}
        {/* <Route path="/app/:id" element={<AppViewerPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}