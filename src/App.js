import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import Landing from "./components/Base/Landing";
import { Routes, Route } from "react-router-dom";
import ViewRoutes from "./components/Routes/ViewRoutes";
import NoMatch from "./components/NoMatch/NoMatch";
import RoutesInfo from "./components/RoutesInfo";

function App() {
  const [edit, setEdit] = useState(false);
  const [routeDetails, setRouteDetails] = useState([]);
  const LOCAL_STORAGE_KEY = "routesDetails";

  const removeRoutesHandler = (id) => {
    const newRoute = routeDetails.filter((route) => {
      return route.id !== id;
    });
    setRouteDetails(newRoute);
  };

  const addRouteHandler = (route) => {
    setRouteDetails([
      ...routeDetails,
      { id: Math.floor(Math.random() * 1000), ...route },
    ]);
  };

  const editRouteHandler = (route) => {
    const updatedRoute = routeDetails.filter((el) => el.id !== route.id);

    setRouteDetails([...updatedRoute, route]);
  };

  useEffect(() => {
    const retrievedRoutes =
      JSON.parse(localStorage.getItem("routesDetails")) || [];
    setRouteDetails(retrievedRoutes);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(routeDetails));
  }, [routeDetails]);

  return (
    <div className="">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              routeDetails={routeDetails}
              setRouteDetails={setRouteDetails}
              addRouteHandler={addRouteHandler}
              edit={edit}
            />
          }
        />
        <Route
          path="/:routeId"
          element={
            <Landing
              routeDetails={routeDetails}
              setRouteDetails={setRouteDetails}
              addRouteHandler={addRouteHandler}
              editRouteHandler={editRouteHandler}
              edit={edit}
            />
          }
        />
        <Route
          path="routes"
          element={
            <ViewRoutes
              routeDetails={routeDetails}
              removeRoutesHandler={removeRoutesHandler}
              setRouteDetails={setRouteDetails}
              setEdit={setEdit}
            />
          }
        />
        <Route
          path="routes/:routeId"
          element={
            <RoutesInfo
              routeDetails={routeDetails}
              setRouteDetails={setRouteDetails}
            />
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
