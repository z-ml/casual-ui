import Vue from 'vue'
import Hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
Hljs.configure({
  ignoreUnescapedHTML: true
})
let Highlight = {}
Highlight.install = ()=> {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      Hljs.highlightElement(block)
    })
  })
}
export default Highlight