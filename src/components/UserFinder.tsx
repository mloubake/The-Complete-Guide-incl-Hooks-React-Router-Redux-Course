import React, { Component } from "react";

import Users from "./Users";

import classes from "./UserFinder.module.css";
import UsersContext from "../store/Users-Context";
import ErrorBoundary from "./ErrorBoundary";

interface IUserFinderProps {}

interface IUserFinderState {
  filteredUsers: Array<{ id: string; name: string }>;
  searchTerm: string;
}

class UserFinder extends Component<IUserFinderProps, IUserFinderState> {
  static contextType = UsersContext;

  // declare context: React.ContextType<typeof UsersContext>;

  constructor(props: IUserFinderProps) {
    super(props);
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(
    previousProps: Readonly<IUserFinderProps>,
    previousState: Readonly<IUserFinderState>
  ) {
    if (previousState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.toLowerCase().includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchTerm: event.target.value.toLowerCase() });
  }

  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </>
    );
  }
}

export default UserFinder;
