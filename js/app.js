function track(value) {
  var customEvent = {
    event: 'click-button',
    mood: value
  }
  dataLayer.push(customEvent);
}