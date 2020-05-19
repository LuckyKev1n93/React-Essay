import SimpleReact from './SimpleReact';

// 实现createElement的type和props
SimpleReact.createElement('div', { id: 'app' }, 'hello');

console.log(SimpleReact.createElement('div', { id: 'app' }, 'hello'));

// 实现jsx转为element
window.React = {};
React.createElement = SimpleReact.createElement;

const dom = (
  <div id='wrapper'>
    <ul className='list'>
      <li className='listItem'>li</li>
      <li className='listItem'>li</li>
    </ul>
  </div>
);
console.log('dom--->', dom);

// 实现render方法
const elementA = SimpleReact.createElement('h1', { id: 'title' }, 'hello');
// SimpleReact.render(elementA, document.querySelector('#app'));
SimpleReact.render(<h1>hello</h1>, document.querySelector('#app'));
