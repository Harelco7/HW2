import { Component } from "react";

export default class CCForm extends Component {
  constructor(props) {
    super(props);

    this.name = this.props.name;

    this.state = {
      show: false,
      pgrade: 0,
      pgradeError: "",
    };
  }

  showp = () => {
    this.setState({
      show: true,
    });
  };

  leave = () => {
    this.setState({
      show: false,
    });

    const numericPGrade = this.state.pgrade;

    if (numericPGrade < 555) {
      this.setState({
        pgradeError: "Try Next Year",
      });
    } else {
      this.setState({
        pgradeError: "Congratulations! You can be accepted for studies.",
      });
    }
  };

  gradeChange = (e) => {
    this.setState((prevState) => ({
      pgrade: e.target.value,
    }));
  };

  render() {
    let genericError = "";
    let PGError = "";
    if (this.state.show) {
      genericError = (
        <p style={{ color: "red" }}>You must fill in {this.name}.</p>
      );
    } else if (this.name === "PGrade") {
      PGError = <p style={{ color: "red" }}>{this.state.pgradeError}</p>;
    }

    return (
      <div>
        <form>
          <div>{genericError}</div>
          {this.name}:{" "}
          <input
            type="text"
            onFocus={this.showp}
            onBlur={this.leave}
            onChange={this.gradeChange}
          />
          <br />
          {PGError}
        </form>
      </div>
    );
  }
}
