import simpleReact from './simpleReact';

// 实现createElement的type和props
simpleReact.createElement('div', { id: 'app' }, 'hello');

console.log(simpleReact.createElement('div', { id: 'app' }, 'hello'));

// 实现jsx转为element
window.React = {};
React.createElement = simpleReact.createElement;

const dom = (
  <div id='wrapper'>
    <ul className='list'>
      <li className='listItem'>li</li>
      <li className='listItem'>li</li>
    </ul>
  </div>
);
console.log('dom--->', dom);
