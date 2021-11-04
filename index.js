/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
    };
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [{ text: "Learn JavaScript" }, { text: "Learn Vue" }, { text: "Build something awesome" }],
  },
  methods: {
    reverseList: function () {
      this.todos = this.todos.reverse();
    },
  },
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Here is some Javascript!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!",
  },
});
