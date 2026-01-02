import { Link } from "react-router-dom";
const Beardcrumb = ({ activeCrumb }) => {
  return (
    <h5 className="link mb-10">
      <Link className="text-gray-500" to="/">
        Home
      </Link>{" "}
      / <span className="text-gray-700">{activeCrumb}</span>
    </h5>
  );
};

export default Beardcrumb;
