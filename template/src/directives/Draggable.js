import Vue from 'vue'

Vue.directive('draggable', function (value) {
  this.el.setAttribute('draggable', 'true')
  this.el.addEventListener('dragstart', () => {
  })
})

Vue.directive('dropable', function (value) {
  this.el.addEventListener('drop', () => {
  })
})
Vue.directive('sortable', function (value) {
  this.el.addEventListener('drop', () => {
  })
})
Vue.directive('paneltrash', function (value) {
  this.el.addEventListener('drop', () => {
  })
})
Vue.directive('selectable', {
  bind: function () {
    this.el.addEventListener('dblclick', () => {
    })
  },
  unbind: function () {
  },
  update: function (value) {
    this.value = value
  }
})
