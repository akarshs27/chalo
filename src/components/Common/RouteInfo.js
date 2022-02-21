const RouteInfo = ({ filteredData }) => {
  const routeStops = filteredData[0].stops;
  const allStops = routeStops?.map((repo) => (
    <h2 className="text-gray-900 title-font text-lg font-medium mr-4">
      {repo.label}
    </h2>
  ));
  return (
    <section>
      {filteredData?.map((route) => (
        <div key={route.id} className="flex flex-wrap -m-4">
          <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
            <div className="mt-4">
              <h3 className="text-gray-600 text-sm tracking-widest title-font mb-1">
                Route ID
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {route.route_id}
              </h2>
            </div>
          </div>
          <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
            <div className="mt-4">
              <h3 className="text-gray-600 text-sm tracking-widest title-font mb-1">
                Route Name
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {route.name}
              </h2>
            </div>
          </div>
          <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
            <div className="mt-4">
              <h3 className="text-gray-600 text-sm tracking-widest title-font mb-1">
                Route Status
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {route.status}
              </h2>
            </div>
          </div>
          <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
            <div className="mt-4">
              <h3 className="text-gray-600 text-sm tracking-widest title-font mb-1">
                Route Direction
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {route.direction}
              </h2>
            </div>
          </div>
          <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
            <div className="mt-4">
              <h3 className="text-gray-600 text-sm tracking-widest title-font mb-1">
                Start Stop
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {route.stops[0].label}
              </h2>
            </div>
          </div>
          <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
            <div className="mt-4">
              <h3 className="text-gray-600 text-sm tracking-widest title-font mb-1">
                End Stop
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {route.stops[route.stops.length - 1].label}
              </h2>
            </div>
          </div>
          <div className="lg:w-full md:w-1/2 p-4 w-full">
            <div className="mt-4">
              <h3 className="text-gray-600 text-sm tracking-widest title-font mb-1">
                Stops
              </h3>
              <div className="flex">{allStops}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RouteInfo;
