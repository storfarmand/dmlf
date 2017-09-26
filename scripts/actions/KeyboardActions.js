import dispatcher from '../dispatcher';

export function navigate(data) {
  dispatcher.dispatch({
    type: "KEYBOARD",
    action: "NAVIGATE",
    data
  });
}

export function fontfactor(data) {
  dispatcher.dispatch({
    type: "KEYBOARD",
    action: "FONTFACTOR",
    data
  });
}
