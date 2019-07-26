import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  // Lifecycle methods are available in class based components only
  // componentWillMount() {
  //   console.log("componentWillMount");
  // }

  componentDidMount() {
    // Lifecycle methods are part of Component Class. Par of react. So arrow function not needed to access `this`
    // second most used lifecycle method after render. This is where http requests to api/backend if you are fetching data from component and putting it into component state
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // componentWillUpdate() {
  //   console.log("componentWillUpdate");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentWillReceiveProps");
  // }

  // componentWillReceiveProps, componentWillUpdate, componentWillMount are being deprecated.
  // Can still use in React 17 but with UNSAFE_ prefix like UNSAFE_componentWillReceiveProps
  // Newer methods like getDerivedStateFromProps and getSnapshotBeforeUpdate have been introduced
  // Read this: https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705

  static getDerivedStateFromProps(nextProps, prevState) {
    return null; // or state from here. Otherwise error gets thrown
    // return {
    //   test: 'Something'
    // }
    // Thing here is you cannot do this.setState which we can do in componentWillReceiveProps. Insead you have to return state from here
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
