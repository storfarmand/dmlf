import { EventEmitter } from "events";

import dispatcher from '../dispatcher';

class TypographyStore extends EventEmitter {
  constructor() {
    super();
    this.setMaxListeners(50);
  }

  fontfactor(obj) {
    this.emit('experience:fontfactor', obj);
  }

  handleActions(evt) {
    switch(evt.type) {
      case "KEYBOARD":
        switch (evt.action) {
          case "FONTFACTOR":
            this.fontfactor(evt.data);
            break;
        }
        break;
    }
  }

}

const typographyStore = new TypographyStore;
dispatcher.register(typographyStore.handleActions.bind(typographyStore));

export default typographyStore;
