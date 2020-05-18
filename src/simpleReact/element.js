// 1. element长什么样

// import { Children } from 'react';

// 2. element接收几个参数
const createElement = (type, config, children) => {
  const props = Object.assign({}, config);
  const childrenLength = [].slice.call(arguments).length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    props.children = [].slice.call(arguments, 2);
  }
  return {
    type,
    props
  };
};

export default createElement;
