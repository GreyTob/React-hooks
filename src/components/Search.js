import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/AlertContext'

export const Search = () => {
  const { show } = useContext(AlertContext)
  const onSubmit = (event) => {
    if (event.key === 'Enter') {
      show('Это алерт')
    }
  }

  return (
    <div className="form-group pb-2">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователья..."
        onKeyPress={onSubmit}
      />
    </div>
  )
}
