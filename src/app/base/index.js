import { createStore } from './store';
import { createRouter } from './routes.js';
import FrameIndex from './App.vue';

//暴露给后端渲染用
export { createStore, createRouter, FrameIndex };