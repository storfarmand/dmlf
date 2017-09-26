import React from 'react';

export default class Header extends React.Component {
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
    const HeaderTag = `h${this.props.type}`;
    const styles={
      fontSize: (this.props.fontfactor / 2 + .5) + 'rem'
    }
    return (
      <HeaderTag
        class={[
          "header",
          this.props.addclass ? this.props.addclass : ''
        ].join(' ')}
        ref={(component) => {this.header = component}}
        style={styles}
      >
        {this.props.text}
      </HeaderTag>
    );
  }
}
