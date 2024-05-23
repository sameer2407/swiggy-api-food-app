import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    const { name, location } = this.props;

    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2> Name :{name}</h2>
        <h3> Location:{location}</h3>
        <h4>
          {" "}
          count:{count} && count2:{count2}
        </h4>
        <button
          className="btn"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          increse
        </button>
      </div>
    );
  }
}

export default About;
