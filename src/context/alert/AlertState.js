import React, { useReducer } from 'react'
import { AlertContext } from './AlertContext'
import { alertReduser } from './alertReduser'
import { SHOW_ALERT, HIDE_ALERT } from '../tupes'

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReduser, null)

  const hide = () => dispatch({ type: HIDE_ALERT })

  const show = (text, type = 'secondary') => {
    dispatch({
      type: SHOW_ALERT,
      payload: { type, text },
    })
  }

  return (
    <AlertContext.Provider
      value={{
        show,
        hide,
        alert: state,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}
