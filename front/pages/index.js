import Head from 'next/head';
import Image from 'next/image';
import Navbar from "../src/components/Navbar";
import Searchbar from "../src/components/Searchbar";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
      </Head>

      <Navbar/>

      <Searchbar/>

    </div>
  )
}
