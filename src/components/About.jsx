import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About constructor");
  }
  componentDidMount() {
    console.log("About componentDidMount ");
  }

  render() {
    console.log("About render");
    return (
      <div>
        <h2>About</h2>
        {/* <User name={"Nitish Function"} location="Delhi" /> */}
        <UserClass name={"Nitish Class"} location="Noida" />
        <UserClass name={"Nitish Class 2"} location="Noida" />
      </div>
    );
  }
}
export default About;
// import User from "./User";
// import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h2>About</h2>
//       <User name={"Nitish Function"} location="Delhi" />
//       <UserClass name={"Nitish Class"} location="Noida" />
//     </div>
//   );
// }

// export default About;
