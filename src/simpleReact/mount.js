// 实现一个render方法
// element--->component--->Dom
import instantiateComponent from './instantiateComponent';

const render = (element, node) => {
  // 实例化组件
  let domComponent = instantiateComponent(element);
  // 创建真实DOM节点
  let renderDom = domComponent.mountComponent();
  console.log('renderDom', renderDom);
  // 挂载DOM节点
  node.append(renderDom);
};

export default render;
