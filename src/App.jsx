import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Skills } from './components/sections/Skills'
import { Work } from './components/sections/Work'

function App() {
  return (
    <main>
      <Hero />
      <Work />
      <Services />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}

export default App
