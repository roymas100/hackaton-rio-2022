import { useContext } from 'react'
import { RoomsContext } from '../context/RoomsContext'



export function useRooms() {
  const value = useContext(RoomsContext)
  return value
}
