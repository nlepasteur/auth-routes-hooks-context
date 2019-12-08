import React, { createContext, useState } from 'react'

export const InCaseNoServer = createContext()

const InCaseNoServerProvider = (props) => {
  const [hardCodedData, setHardCodedData] = useState([
    {
      id: 3,
      firstname: "Nicolas",
      lastname: "Le Pasteur",
      city: "Clichy",
      street: "rue Morice",
      postcode: 92110
    },
    {
      id: 4,
      firstname: "Alexander",
      lastname: "Michaels",
      city: "Maurepas",
      street: "rue Berger",
      postcode: 78310
    },
    {
      id: 5,
      firstname: "Michael",
      lastname: "Jordan",
      city: "Paris",
      street: "rue de Tolbiac",
      postcode: 75013
    },
    {
      id: 6,
      firstname: "Luigi",
      lastname: "Finizio",
      city: "Toulouse",
      street: "rue Léon Gambetta ",
      postcode: 31000
    },
    {
      id: 7,
      firstname: "Maggie",
      lastname: "Cheung",
      city: "Ermont",
      street: "rue des écoles",
      postcode: 95120
    },
    {
      id: 8,
      firstname: "Tony",
      lastname: "Leung",
      city: "Neuilly",
      street: "rue Soyer",
      postcode: 92200
    }
  ])
  return (
    <InCaseNoServer.Provider value={{ hardCodedData }}>
      {props.children}
    </InCaseNoServer.Provider>
  )
}

export default InCaseNoServerProvider