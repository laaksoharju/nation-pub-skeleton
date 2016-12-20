function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getOrderNumber() {
  // It's probably not a good idea to generate a random order number. 
  // A better idea would be to let the server decide.
  return "#" + getRandomInt(1, 1000000);
}

var socket = io();

var vue = new Vue({
  el: '#ordering',
  mixins: [sharedVueStuff],
  methods: {
    placeOrder: function() {
      // create an array of checked items to order
    var orderItems = [].filter.call(document.getElementsByName('item[]'), function(i) {
      return i.checked;
    }).map(function(i) {
      return i.value;
    });
      socket.emit('order', {orderId: getOrderNumber(), orderItems: orderItems});
  }
  }
});