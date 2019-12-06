// This component provides context relatif à informations de l'utilisateur
import React, { useState, createContext } from 'react'
export const LoginContext = createContext()

const LoginContextProvider = (props) => {
  const [user, setUser] = useState({
    name: "",
    password: "",
    loggedIn: false
  })
  // début fonctions utilisés depuis composant formulaire 'Login.js'
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
  // fin fonctions utilisés depuis composant formulaire 'Login.js'
  // fonction qui a pour effet à la déconnexion de l'utilisateur de modifier le state user, 
  // sinon lorsque sur page d'acceuil 'Home.js'user serait redirigé directement sur 'Admin.js'
  const logOut = () => {
    setUser({ name: "", password: "", loggedIn: false })
  }
  // fin fonction qui pour effet...

  return (
    <LoginContext.Provider value={{ user, onChange, onSubmit, logOut }}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider