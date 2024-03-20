import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState = [];

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: Date.now(), text: action.payload.text, completed: false },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case REMOVE_TODO:

      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};

export default todosReducer;

