export const TODO_ACTION = Object.freeze({
  init: 'INIT_TODO',
  create: 'CREATE_TODO',
  update: 'UPDATE_TODO',
  delete: 'DELETE_TODO',
});

export const ACTION = Object.freeze({
  notExist: (type) => `${type}은 존재하지 않는 액션입니다.`,
});
