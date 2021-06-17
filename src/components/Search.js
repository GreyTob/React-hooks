import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/AlertContext'

export const Search = () => {
  const [value, setValue] = useState('')
  const { show } = useContext(AlertContext)
  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return
    }
    if (value.trim()) {
      console.log('make request with', value)
    } else {
      show('Введите данные пользователя')
    }
  }

  return (
    <div className="form-group pb-2">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователья..."
        onKeyPress={onSubmit}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  )
}
