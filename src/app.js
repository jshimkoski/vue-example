(function() {

  var eventBus = new Vue();

  Vue.component('list-item', {
    template: '#list-item-tmpl',
    created: function () {
      var self = this;
      eventBus.$on('resetModals', function () {
        self.item.visible = false;
      });
    },
    props: ['item'],
    methods: {
      toggleModal: function (e) {
        var itemVisibleState = !this.item.visible;
        eventBus.$emit('resetModals');
        this.item.visible = itemVisibleState;
        e.preventDefault();
      }
    }
  });

  Vue.component('modal', {
    template: '#modal-tmpl',
    props: ['modal']
  });

  new Vue({
    el: '#app',
    data: function () {
      return {
        message: 'A simple VueJS 2.2.0 example that shows an accordion-style implemention.',
        items: [
          {text:"Dynamic List Item Content 1", visible: false, modal: {text: 'This is dynamic modal text 1.'}},
          {text:"Dynamic List Item Content 2", visible: false, modal: {text: 'This is dynamic modal text 2.'}},
          {text:"Dynamic List Item Content 3", visible: false, modal: {text: 'This is dynamic modal text 3.'}},
          {text:"Dynamic List Item Content 4", visible: false, modal: {text: 'This is dynamic modal text 4.'}},
          {text:"Dynamic List Item Content 5", visible: false, modal: {text: 'This is dynamic modal text 5.'}}
        ]
      }
    },
    methods: {
      updateModalText: function () {
        for (var i=0; i<this.items.length; i++) {
          this.items[i].modal.text = "Modified modal text " + i;
        }
      }
    }
  });

})();