import "./App.css";
import Home from "./screens/Home";
import Garden from "./screens/Garden";
import LandingPage from "./screens/LandingPage";
import Slider from "./components/Slider/Slider";

import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BluePrint from "./screens/BluePrint";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import EmbrScript from "./components/EmberScript";

function App() {
  return (
    <div className="App">
      <EmbrScript />
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" exact={true} element={<LandingPage />} />

            <Route path="/garden" element={<Garden />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
    // <Grid container >
    //   <Grid item md={6} >
    //     <Slider />
    //   </Grid>
    // </Grid>
  );
}

export default App;
