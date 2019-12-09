import React, { useState, createContext } from 'react'

export const LoginContext = createContext()

const LoginContextProvider = (props) => {

  const [user, setUser] = useState({
    name: "",
    password: "",
    loggedIn: false
  })

  // below set user state when inputs value change
  const handleChange = (e) => {
    const value = e.target.value.replace(RegExp(/[!$%^&*()+|~=`{}\[\]:";'<>?,\/]/), '')
    setUser({
      ...user,
      [e.target.name]: value
    })
  }

  // below set loggedIn property in user state, which provides access to /admin
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, password } = user
    if (name && password) {
      setUser({
        ...user,
        loggedIn: true
      })
    }
  }

  // below "delete" properties values in user state when user log out, to prevent redirection directly to /admin
  const logOut = () => {
    setUser({ name: "", password: "", loggedIn: false })
  }

  return (
    <LoginContext.Provider value={{ user, handleChange, handleSubmit, logOut }}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider