import React from 'react';

import Header from '../components/Header';
import Mainstage from '../components/Mainstage';

export default class Dmlf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      content: {},
      page: 0
    };
  }
  componentDidMount() {
    this.setState({
        mounted: true
    });
  }
  componentWillUnmount() {
    this.setState({
        mounted: false
    });
  }
  prev() {

  }
  next() {

  }
  render() {
    console.log('here');
    return (
      <div
        class={[
          "dmlf",
        ].join(' ')}
        ref={(experience) => {this.experience = experience}}
      >
        <Header
          addclass="header-experience"
          type="1"
          text={this.props.content.headings.main}
        />
        <Mainstage
          config={this.state.config}
        />
        <div className="btn-group horizontal">
          <button
            class="btn btn-prev"
            onClick={this.prev()}
          >{this.props.content.buttons.prev}</button>
          <button
            class="btn btn-next"
            onClick={this.next()}
          >{this.props.content.buttons.next}</button>
        </div>
      </div>
    );
  }
}
