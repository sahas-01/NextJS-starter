import Head from 'next/head'
import Navbar from '../comps/topnavbar/Navbar'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello,I am Sahas Vivek</h1>
    </div>
  )
}
