export const middleware = (store) => (next) => (action) => {
    console.log("Действие:", action);
    console.log("Состояние (до):", store.getState());
    console.log("Состояние полсе: ", store.getState());
    return next(action);
  };