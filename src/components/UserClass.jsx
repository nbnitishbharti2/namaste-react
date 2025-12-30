import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log("constructor");
  }

  async componentDidMount() {
      // api call after rendering the component
    const data = await fetch("https://api.github.com/users/nbnitishbharti2");
    const json = await data.json();
    console.log("UserClass componentDidMount ", json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("UserClass componentDidUpdate ");
  }

  componentWillUnmount() {
    // called when we are leaving pages
    console.log("UserClass componentWillUnmount ");
  }

  render() {
    console.log("render");
    const { name, location, avatar_url } = this.state.userInfo;
    const { count2 } = this.state;
    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            // Never update the state varible directly like using =
            // React will only update the value of the key passed in setState
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increse
        </button>
        <h2>Count2: {count2}</h2>
        <img src={avatar_url} alt="" />
        <h2>Class Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @nitishbharti2</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 * Constructor (dummy)
 * Render (dummy)
 *  <HTML>
 * Component Did Mount
 *  <api call>
 *  <this.setState called>
 *  
 * ---- UPDATE ----
 *  <render (api data)>
 *  <HTML (with New data)>
 * Component Will Update
 * 
 */
