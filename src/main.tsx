import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col items-center justify-center min-h-svh">
      UI library by kctrnn 😀
    </div>
  </StrictMode>,
)
