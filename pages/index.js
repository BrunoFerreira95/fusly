import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Creative from './components/Creative'
import Detailed from './components/Detailed'
import Header from './components/Header'
import Plans from './components/Plans'
import Profissional from './components/Profissional'
import Walcome from './components/Walcome'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header/>
      <Walcome/>
      <Detailed/>
      <Creative/>
      <Profissional/>
      <Plans/>
      <Footer/>
    </>
  )
}
