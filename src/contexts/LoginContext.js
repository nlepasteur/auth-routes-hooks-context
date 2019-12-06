import React, { useState, createContext } from 'react'

export const LoginContext = createContext()

const LoginContextProvider = (props) => {
  const [user, setUser] = useState({
    name: "",
    password: "",
    loggedIn: false
  })

  const onChange = (e) => {
    const value = e.target.value
    setUser({
      ...user,
      [e.target.name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, password } = user
    if (name && password) {
      setUser({
        ...user,
        loggedIn: true
      })
    }
  }

  const logOut = () => {
    setUser({ name: "", password: "", loggedIn: false })
  }

  return (
    <LoginContext.Provider value={{ user, onChange, onSubmit, logOut }}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider