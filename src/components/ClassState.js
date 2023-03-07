import React from "react";

class ClassState extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isGreen: true,
      };
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState({ isGreen: !this.state.isGreen });
    }
  
    render() {
      const { isGreen } = this.state;
  
      return (
        <h1
          onClick={this.handleClick}
          style={{ color: isGreen ? 'limegreen' : 'crimson' }}
        >
          useState Exemplo
        </h1>
      );
    }
  }
  
  export default ClassState;
  