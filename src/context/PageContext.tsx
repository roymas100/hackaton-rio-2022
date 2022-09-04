import { createContext, ReactNode, useState } from 'react'

export type PageTypes = 'mapa' | 'comunidade' | 'user' | 'denuncia'

type PageContextType = {
  currentPage:  PageTypes
  setPage: (language: PageTypes) => void
}

type PageContextProviderProps = {
  children: ReactNode
}

export const PageContext = createContext({} as PageContextType)

export function PageContextProvider(props: PageContextProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPage, setCurrentPage] = useState<PageTypes>('mapa')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setPage = (language:PageTypes) => {
    setCurrentPage(language)
  }

  return (
    <PageContext.Provider value={{ currentPage, setPage }}>
      {props.children}
    </PageContext.Provider>
  )
}
