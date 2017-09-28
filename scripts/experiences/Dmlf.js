import React from 'react';

import Header from '../components/Header';
import Mainstage from '../components/Mainstage';

import * as KeyboardActions from '../actions/KeyboardActions';

import NavigationStore from '../stores/NavigationStore';
import TypographyStore from '../stores/TypographyStore';

export default class Dmlf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      content: {},
      page: 0,
      fontFactor: 2
    };
  }
  componentWillMount() {
    NavigationStore.on('experience:navigate', (obj) => {
      switch (obj.direction) {
        case 'prev':
          this.prev(this.props);
          break;
        case 'next':
          this.next(this.props);
          break;
      }
    });
    TypographyStore.on('experience:fontfactor', (obj) => {
      this.setState({
        fontFactor: obj.value
      });
    });
  }
  componentDidMount() {
    this.setState({
        mounted: true
    });
    window.addEventListener('keyup', (evt) => {
      const prevKeys = ['arrowleft', 'arrowup', 'p', 'b'];
      if (prevKeys.indexOf(evt.key.toLowerCase()) >= 0) {
        KeyboardActions.navigate({direction: 'prev'});
      }
      const nextKeys = ['arrowright', 'arrowdown', 'n', 'f'];
      if (nextKeys.indexOf(evt.key.toLowerCase()) >= 0) {
        KeyboardActions.navigate({direction: 'next'});
      }
      const fontFactorKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      if (fontFactorKeys.indexOf(evt.key.toLowerCase()) >= 0) {
        KeyboardActions.fontfactor({value: parseInt(evt.key.toLowerCase(), 10)});
      }
    });
  }
  componentWillUnmount() {
    this.setState({
        mounted: false
    });
  }
  prev() {
    if (this.state.page === 0) {
      return;
    }
    this.setState({
      page: this.state.page - 1
    });
  }
  next(props) {
    if (this.state.page === props.content.pages.length - 1) {
      return;
    }
    this.setState({
      page: this.state.page + 1
    });
  }
  render() {
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
          text={this.props.content.pages[this.state.page].heading}
          fontfactor={this.state.fontFactor}
        />
        <Mainstage
          config={this.state.config}
          fontfactor={this.state.fontFactor}
          content={this.props.content.pages[this.state.page]}
          page={this.state.page}
        />
        <div className="btn-group horizontal">
          <button
            class="btn btn-prev"
            onClick={this.prev.bind(this, this.props)}
          >{this.props.content.buttons.prev}</button>
          <button
            class="btn btn-next"
            onClick={this.next.bind(this, this.props)}
          >{this.props.content.buttons.next}</button>
        </div>
      </div>
    );
  }
}
