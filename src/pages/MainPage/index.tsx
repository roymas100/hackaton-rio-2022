import React from 'react'
import MainNavbar from '../../components/MainNavbar'
import { usePages } from '../../hooks/usePages'
import { MainPageContainer } from './styles'



export default function MainPage() {

  const {currentPage } = usePages()
  return (
    <MainPageContainer>
        {currentPage === 'comunidade' ? 'oi'  : ''}
        {currentPage === 'denuncia' ? 'oi' : ''}
        <MainNavbar/>
    </MainPageContainer>
  )
}
