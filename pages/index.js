import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      {}
      {/* <h1>Hello everyone, I am Sahas Vivek, a frontend web developer</h1>
      <p>Adding the sass to this repo</p> */
        <header className="header">

          <div class="container">

            <div id="brand">

              

            </div>


          </div>



          <nav className="navbar">


            <ul className="listitems">

              <li className="items"><a href="#" className="links">Home</a></li>
              <li className="items"><a href="#" className="links">Events</a></li>
              <li className="items"><a href="#" className="links">Webinars</a></li>
              <li className="items"><a href="#" className="links">Projects</a></li>
              <li className="items"><a href="#" className="links">Team</a></li>
              <li className="items"><a href="#" className="links">Sponsors</a></li>
              <li className="items"><a href="#" className="links">Updates</a></li>

            </ul>


          </nav>





        </header>
      }
    </div>
  )
}
