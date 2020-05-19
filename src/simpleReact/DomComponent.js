//定义一个Domcomponent
//创建真实DOM节点
class DomComponent {
  constructor(element) {
    this._currentElement = element;
    this._domNode = null;
  }
  mountComponent() {
    let elementNode = document.createElement(this._currentElement.type);
    this._domNode = elementNode;
    this._renderDomChildren(this._currentElement.props);
    return this._domNode;
  }
  _renderDomChildren(props) {
    // 获取并创建子节点
    // children是string或number类型的文本
    if (
      typeof props.children === 'string' ||
      typeof props.children === 'number'
    ) {
      let textNode = document.createTextNode(props.children);
      this._domNode.appendChild(textNode);
    }
    // children是element元素或嵌套节点
    else if (props.children) {
    }
  }
}

export default DomComponent;
