import { Component, ErrorInfo } from "react";

import classes from "./ErrorBoundary.module.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error);

    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={classes.error_boundary}>
          <p>Something went wrong!</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
