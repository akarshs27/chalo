import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-blue-500 shadow-lg">
      <div className="flex items-center justify-center md:justify-between p-6">
        <div className="flex items-center ml-0 md:ml-8">
          <Link to="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6xs"
              viewBox="0 0 20 20"
              fill="#ffffff"
            >
              <path
                fillRule="evenodd"
                d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold text-white ml-2 text-xl">
              Chalo Web
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
