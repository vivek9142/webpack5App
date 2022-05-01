import '../styles/index.scss';
import Recipes from './Recipes';
import React from 'react'
import sword from '../images/9r8iF.gif';
import SVG from '../images/exam.svg'
function App() {
  return (
    <>
        <section className="hero"></section>
        <main>
        <img src={SVG} alt="SVG" />
            <section>
                <h1>Yes React</h1>
            </section>
            <img src={sword} alt="GIF" />
        </main>

        <Recipes />
    </>
  )
}

export default App