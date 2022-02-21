import { useEffect, useState } from "react";
import DownArrow from "../assets/icon/DownArrow";
import { data } from "../data/stops";
import Select from "react-select";
import { useParams } from "react-router-dom";

const RouteForm = ({
  addRouteHandler,
  edit,
  routeDetails,
  editRouteHandler,
}) => {
  const params = useParams();
  const routeID = params.routeId;
  const filteredData = routeDetails?.find((data) => {
    return data.id == routeID;
  });

  useEffect(() => {
    if (edit) {
      setFormValues(filteredData);
    }
  }, []);

  const [routeStops, setRouteStops] = useState(data);
  const inititalValues = {
    name: "",
    direction: "",
    route_id: "",
    status: "",
    stops: [],
  };

  const [formValues, setFormValues] = useState(inititalValues);
  const setSelectedOption = (val) => {
    setFormValues({ ...formValues, stops: val });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      editRouteHandler(formValues);
    } else {
      addRouteHandler(formValues);
    }
    setFormValues(inititalValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="name-input mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          required
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          className="input-route"
          onChange={handleChange}
        />
      </div>

      <div className="direction-input mb-4">
        <label htmlFor="direction" className="leading-7 text-sm text-gray-600">
          Direction
        </label>
        <div className="flex items-center">
          <div className="relative w-full">
            <select
              required
              value={formValues.direction}
              name="direction"
              onChange={handleChange}
              className="select-dropdown"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Select
              </option>
              <option value="Up">UP</option>
              <option value="Down">DOWN</option>
            </select>
            <span className="svg-arrow">
              <DownArrow />
            </span>
          </div>
        </div>
      </div>

      <div className="id-input mb-4">
        <label htmlFor="route-id" className="leading-7 text-sm text-gray-600">
          Route ID
        </label>
        <input
          required
          type="number"
          id="route_id"
          name="route_id"
          value={formValues.route_id}
          className="input-route"
          onChange={handleChange}
        />
      </div>

      <div className="status-input mb-4">
        <label htmlFor="status" className="leading-7 text-sm text-gray-600">
          Status
        </label>
        <div className="flex items-center">
          <div className="w-full relative">
            <select
              required
              value={formValues.status}
              name="status"
              onChange={handleChange}
              className="select-dropdown"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Select
              </option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <span className="svg-arrow">
              <DownArrow />
            </span>
          </div>
        </div>
      </div>

      <div className="stops-input mb-4">
        <label htmlFor="stops" className="leading-7 text-sm text-gray-600">
          Select Stops
        </label>
        <div className="flex items-center">
          <div className="w-full relative">
            <Select
              isMulti
              required
              name="stops"
              placeholder="Select"
              value={formValues.stops}
              onChange={setSelectedOption}
              options={routeStops}
            />
            <span className="svg-arrow">
              <DownArrow />
            </span>
          </div>
        </div>
      </div>

      <button className="btn">{edit ? "Update Route" : "Add Route"}</button>
    </form>
  );
};
export default RouteForm;
