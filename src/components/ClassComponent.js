import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      message: '',
    }

    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
    this.timerId = setInterval(() => {
      // this.state.count = this.state.count + 1;
      // this.forceUpdate(); // TODO Так не деласть - это говнокод!!!
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!(nextState.count % 5)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== 0 && !(prevState.count % 5)) {
      this.setState((prevState) => ({ count2: prevState.count2 + 1 }));
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleClick() {
    this.setState({ message: 'I am clicked'});
  }

  // handleClick = ()  => { // TODO: Чтобы не байндить
  //   this.setState({ message: 'I am clicked'});
  // }

  render() {
    return (
      <div>
        Hello I'm class counter -
        <span className="counter">{this.state.count}</span>
        <br/>
        Count2 - {this.state.count2}
        <br/>
        <div>Message: {this.state.message}</div>
        <button
          onClick={this.handleClick}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default ClassCounter;
