import React from 'react';

export default class Mainstage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      page: props.page
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
  componentDidUpdate() {
  }
  render() {
    const styles={
      fontSize: (this.props.fontfactor / 2 + .3) + 'rem',
      lineHeight: (this.props.fontfactor / 2 + .5) + 'rem',
    }
    const leftContent = this.props.content.left.map((item, idx) => {
      return <div key={idx}>{item}</div>
    });
    const rightContent = this.props.content.right.map((item, idx) => {
      return <div key={idx}>{item}</div>
    });
    return (
      <div
        class={[
          "mainstage"
        ].join(' ')}
        ref={(component) => {this.mainstage = component}}
        style={styles}
      >
        <div
          class={[
            "mainstage-left"
          ].join(' ')}
        >{leftContent}</div>
        <div
          class={[
            "mainstage-right"
          ].join(' ')}
        >{rightContent}</div>
      </div>
    )
  }
}
