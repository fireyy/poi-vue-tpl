const <%= moduleName %> = {
  name: '<%= name %>',

  render(h) {
    return h('div')
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(<%= moduleName %>.name, <%= moduleName %>)
}

export default <%= moduleName %>
