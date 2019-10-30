import React, { Component, memo, PureComponent } from 'react';
import './App.css';

class ChildClassComponent extends PureComponent {
  render() {
    console.log('classComponent render')
    return (
      <div>childClassComponentだよ</div>
    )
  }
} 

const ChildFunctionalComponent = memo((props) => {
  console.log('functional Component render')
  console.log(props)
  return (
    <div>functional Componentだよ</div>
  )
})

class App extends Component {
  state = {
    property1: 0,
    property2: 0,
  }

  addProperty1 = () => {
    const { property1 } = this.state;
    this.setState({ property1: property1+ 1 });
  }

  addProperty2 = () => {
    const { property2 } = this.state;
    this.setState({ property2: property2+ 1 });
  }


  render() {
    console.log('parent render')
    const {
      property1,
      property2,
    } = this.state;
    return (
      <div className="App">
        <ChildClassComponent
          property1={property1}
        />
        <ChildFunctionalComponent
          property2={property2}
        />
        <button onClick={this.addProperty1}>
          property1を変える
        </button>
        <button onClick={this.addProperty2}>
          property2を変える
        </button>
      </div>
    );
  }
}

export default App;
