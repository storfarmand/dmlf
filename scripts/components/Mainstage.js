import React from 'react';

export default class Mainstage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }
  componentDidMount() {
    this.setState({
        mounted: true
    })
  }
  componentWillUnmount() {
    this.setState({
        mounted: false
    })
  }
  render() {
    return (
      <div
        class={[
          "mainstage"
        ].join(' ')}
        ref={(component) => {this.mainstage = component}}
      >
      </div>
    )
  }
}
