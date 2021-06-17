import React, { useReduser } from 'core-js/library/fn/reflect/es7/metadata'
import { GithubContext } from './githubContext'
import { githubReducer } from './githubReducer'

export const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: [],
  }
  const [state, dispatch] = useReduser(githubReducer, initialState)

  retunr(<GithubContext.Provider value={{}}>{children}</GithubContext.Provider>)
}
