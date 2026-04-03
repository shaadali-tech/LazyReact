import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // When error happens → update state
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log error (for debugging)
  componentDidCatch(error, errorInfo) {
    console.log("Error caught:", error);
    console.log("Error info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>⚠️ Something went wrong!</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
