const ctx = require.context('../components/', true, /([\w]+)\.vue/);
// 遍历注册全局组件
const components = ctx.keys().map(key => ctx(key).default);

const allComponents = context => {
    const map = {};
    for(const key of context.keys()) {
      const keyArr = key.split('/');
      const componentName = keyArr.pop();
      map[componentName.replace(/\.vue$/g, '')] = context(key).default;
    }
    return map;
}
const componentObj = allComponents(ctx);
export default {
    components,
    componentObj
}