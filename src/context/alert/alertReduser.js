import { SHOW_ALERT, HIDE_ALERT } from '../tupes'

const handlers = {
  [SHOW_ALERT]: (state, action) => action.payload,
  [HIDE_ALERT]: () => null,
  DEFAULT: (state) => state,
}

export const alertReduser = (state, action) => {
  // switch (action.type) {
  //   case SHOW_ALERT:
  //     return action.payload
  //   case HIDE_ALERT:
  //     return null
  //   default:
  //     return state
  // }

  //вместо switch case
  const handler = handlers[action.type] || handlers.DEFAULT

  //handler - это функция
  return handler(state, action)
}
