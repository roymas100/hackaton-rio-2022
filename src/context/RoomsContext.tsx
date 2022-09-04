import { createContext, ReactNode, useState } from 'react'

export type RoomsTypes = 'Quartos 1' | 'Quartos 2' | 'Quarto 3' | 'Lobby Principal'

type RoomsContextType = {
  currentRoom:RoomsTypes
  setRoom: (room:RoomsTypes) => void
}

type RoomsContextProviderProps = {
  children: ReactNode
}

export const RoomsContext = createContext({} as RoomsContextType)
export function RoomsContextProvider(props: RoomsContextProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentRoom, setCurrentRoom] = useState<RoomsTypes>('Lobby Principal')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setRoom = (room:RoomsTypes) => {
    setCurrentRoom(room)
  }

  return (
    <RoomsContext.Provider value={{ currentRoom, setRoom }}>
      {props.children}
    </RoomsContext.Provider>
  )
}
