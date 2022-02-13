import { Route, Routes } from "react-router";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import store from "./store/Index";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Student from "./pages/Student";
import Layout from "./Layout";

const baseTheme = createTheme();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="student" element={<Student />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
