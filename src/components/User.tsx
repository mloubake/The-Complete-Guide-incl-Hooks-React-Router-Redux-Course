import { Component } from "react";

import classes from "./User.module.css";

interface IUserProps {
  name: string;
}

class User extends Component<IUserProps> {
  componentWillUnmount(): void {}

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
