(function() {

  var eventBus = new Vue();

  Vue.component('list-item', {
    template: '<li><a href="#" v-on:click="toggleModal($event)">This is a test component!</a><modal v-if="modalVisible"></modal></li>',
    created: function () {
      var self = this;
      eventBus.$on('resetModals', function () {
        self.modalVisible = false;
      });
    },
    data: function () {
      return {
        modalVisible: false
      }
    },
    methods: {
      toggleModal: function (e) {
        e.preventDefault();
        eventBus.$emit('resetModals');
        this.modalVisible = !this.modalVisible;
      }
    }
  });

  Vue.component('modal', {
    template: '<div>This is a modal.</div>'
  });

  new Vue({
    el: '#app',
    data: function () {
      return {
        message: 'Hello Vue!',
        items: [1,2,3,4,5]
      }
    }
  });

})();