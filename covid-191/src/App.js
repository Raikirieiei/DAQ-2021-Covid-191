import React from 'react'
import './styles/main.css'

import { TailwindThemeProvider, Button } from 'tailwind-react-ui'

const App = () => (
  <TailwindThemeProvider
    theme={{
      brandColors: {
        primary: 'red',
      },
    }}
  >
    <Button brand="primary">Covid 1</Button>
    <br/>
    <Button brand="primary">Covid 2</Button>
    <br/>
    <Button brand="primary">Covid 3</Button>
  </TailwindThemeProvider>
)

export default App