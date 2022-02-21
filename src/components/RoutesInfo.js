import React from "react";
import { useParams } from "react-router-dom";
import RouteInfo from "./Common/RouteInfo";
import RoutesMap from "./Map/RoutesMap";

const RoutesInfo = ({ routeDetails }) => {
  const params = useParams();
  const routeID = params.routeId;
  const filteredData = routeDetails?.filter((data) => {
    return data.id == routeID;
  });

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <RouteInfo filteredData={filteredData} />
        <div className="mt-12">
          <RoutesMap filteredData={filteredData} />
        </div>
      </div>
    </section>
  );
};

export default RoutesInfo;
