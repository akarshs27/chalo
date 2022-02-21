import RouteForm from "../RouteForm";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/back.png";

const Landing = ({ addRouteHandler, routeDetails, edit, editRouteHandler }) => {
  const showViewRoutes =
    routeDetails?.length > 0 ? (
      <Link to="/routes">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font underline">
          View Routes
        </h2>
      </Link>
    ) : (
      ""
    );

  return (
    <section className="text-gray-600 body-font relative max-h-screen">
      <div className="">
        <div className="absolute inset-0">
          <img className="w-3/4" src={backgroundImage} alt="background" />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-12 md:mt-0 relative z-10 shadow-lg border-gray-50 border-2">
            <div className="flex items-center justify-between">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                {edit ? "Update Route" : "Add Route"}
              </h2>
              {showViewRoutes}
            </div>

            <RouteForm
              addRouteHandler={addRouteHandler}
              edit={edit}
              routeDetails={routeDetails}
              editRouteHandler={editRouteHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
