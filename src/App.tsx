import React from "react";
import "./App.css";
import {Grid} from "@mui/material";
import {TopBar} from "./components/TopBar/TopBar";
import {LeftNavigation} from "./components/LeftNavigation/LeftNavigation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Error404} from "./screens/404";
import {navigationRoutes} from "./navigationRoutes";
import {RowContextProvider} from "./components/Context/ActiveRowContext";
import {ActiveThemeProvider} from "./components/Context/ActiveThemeContext";
import {MainContainer} from "./components/MainContainer/MainContainer";
import {PageTitle} from "./components/PageTitle/PageTitle";

function App() {
  return (
<ActiveThemeProvider>
      <BrowserRouter>
        <TopBar />

        <Grid container>
          <Grid item sx={{ width: 300 }}>
            <LeftNavigation />
          </Grid>
          <MainContainer>
            <PageTitle />
            <RowContextProvider>
              <Routes>
                {Object.values(navigationRoutes).map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
                <Route path={"*"} element={<Error404 />} />
              </Routes>
            </RowContextProvider>
          </MainContainer>
        </Grid>
      </BrowserRouter>
</ActiveThemeProvider>
  );
}

export default App;
