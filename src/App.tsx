import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Student from "./pages/Student";
import Layout from "./Layout";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const baseTheme = createTheme();

function App(): JSX.Element {
  return (
    <ThemeProvider theme={baseTheme}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="student" element={<Student />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
