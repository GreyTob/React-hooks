import React, { useReduser } from 'core-js/library/fn/reflect/es7/metadata'
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from '../tupes'
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

  const search = async (value) => {
    setLoading()
    //axios

    dispatch({
      type: SEARCH_USERS,
      payload: [],
    })
  }

  const getUser = async (name) => {
    setLoading()

    //axios
    dispatch({
      type: GET_USER,
      payload: {},
    })
  }

  const getRepos = async (name) => {
    setLoading()

    //axios
    dispatch({
      type: GET_REPOS,
      payload: [],
    })
  }

  const clearUsers = () => dispatch({ type: CLEAR_USERS })

  const setLoading = () => dispatch({ type: SET_LOADING })

  const { user, users, repos, loading } = state

  retunr(
    <GithubContext.Provider
      value={{
        getRepos,
        getUser,
        search,
        clearUsers,
        setLoading,
        user,
        users,
        repos,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
