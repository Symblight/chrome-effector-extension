import { createStore } from 'effector/compat';

export const $session = createStore<string>('test');
