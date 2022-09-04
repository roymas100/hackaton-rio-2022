import { useContext } from 'react'

import { PageContext } from '../context/PageContext'

export function usePages() {
  const value = useContext(PageContext)
  return value
}
