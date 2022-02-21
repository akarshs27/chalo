import { Link } from "react-router-dom";

const ViewRoutes = ({ routeDetails, removeRoutesHandler, setEdit }) => {
  const deleteRoute = (id) => {
    removeRoutesHandler(id);
  };

  const onEditRoute = () => {
    setEdit(true);
  };

  const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType });

    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  const exportToCsv = (e) => {
    e.preventDefault();
    let headers = ["Id, Name, Status, Direction"];

    let routesCsv = routeDetails?.reduce((acc, user) => {
      const { route_id, name, status, direction } = user;
      acc.push([route_id, name, status, direction].join(","));
      return acc;
    }, []);

    downloadFile({
      data: [...headers, ...routesCsv].join("\n"),
      fileName: "routes.csv",
      fileType: "text/csv",
    });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex  sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
              Routes
            </h1>
            <Link to="/">
              <button className="btn">Add Route</button>
            </Link>
          </div>
        </div>
        <div className="w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="table-head rounded-tl rounded-bl">Route ID</th>
                <th className="table-head">Route Name</th>
                <th className="table-head">Direction</th>
                <th className="table-head">Status</th>
                <th className="table-head">Start Stop</th>
                <th className="table-head">End Stop</th>
                <th className="table-head">Actions</th>
                <th className="title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
              </tr>
            </thead>
            <tbody>
              {routeDetails?.map((route) => (
                <tr key={route.id} className="even:bg-gray-100">
                  <td className="px-8 py-3">{route.route_id}</td>
                  <td className="px-8 py-3">{route.name}</td>
                  <td className="px-8 py-3">{route.direction}</td>
                  <td className="px-8 py-3">{route.status}</td>
                  <td className="px-8 py-3">{route.stops[0].label}</td>
                  <td className="px-8 py-3">
                    {route.stops[route.stops.length - 1].label}
                  </td>
                  <td className="w-10 text-center">
                    <div className="flex justify-around items-center">
                      <Link to={`/routes/${route.id}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </Link>
                      <Link to={`/${route.id}`} onClick={onEditRoute}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </Link>
                      <a onClick={exportToCsv}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </a>

                      <a onClick={() => deleteRoute(route.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ViewRoutes;
