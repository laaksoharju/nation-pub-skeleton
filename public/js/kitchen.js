var socket = io();

var vue = new Vue({
  el: '#orders',
  mixins: [sharedVueStuff],
  methods: {
    markDone: function(orderid) {
      this.orders[orderid].done = true;
      socket.emit("orderDone", orderid);
    }
  }
});