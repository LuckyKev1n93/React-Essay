// 将element实例化组件再转为DOM节点插入到HTML中
import DomComponent from './DomComponent';
// 实例化组件
const instantiateComponent = element => {
  let componentInstance;
  // 渲染函数组件或类组件
  if (typeof element.type === 'function') {
    componentInstance = new element.type(element.props);
  }
  // 渲染DOM标签(组件)
  else if (typeof element.type === 'string') {
    componentInstance = new DomComponent(element);
  }
  // 渲染文本
  else if (typeof element === 'string' || typeof element === 'number') {
    componentInstance = new DomComponent({
      type: 'span',
      props: { children: element }
    });
  }
  // 返回组件实例
  return componentInstance;
};

export default instantiateComponent;
