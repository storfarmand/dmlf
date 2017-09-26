import { EventEmitter } from "events";

import dispatcher from '../dispatcher';

class NavigationStore extends EventEmitter {
  constructor() {
    super();
    this.setMaxListeners(50);
  }

  navigate(obj) {
    this.emit('experience:navigate', obj);
  }
  fontsize(obj) {
    this.emit('experience:fontsize', obj);
  }

  handleActions(evt) {
    switch(evt.type) {
      case "KEYBOARD":
        switch (evt.action) {
          case "NAVIGATE":
            this.navigate(evt.data);
            break;
          case "FONTSIZE":
            this.fontsize(evt.data);
            break;
        }
        break;
    }
  }

}

const navigationStore = new NavigationStore;
dispatcher.register(navigationStore.handleActions.bind(navigationStore));

export default navigationStore;
