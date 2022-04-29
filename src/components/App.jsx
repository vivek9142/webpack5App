import '../styles/index.scss';
import Recipes from './Recipes';
import React from 'react'

function App() {
  return (
    <>
        <section className="hero"></section>
        <main>
            <section>
                <h1>Yes React</h1>
            </section>
        </main>

        <Recipes />
    </>
  )
}

export default App