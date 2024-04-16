import { render } from 'preact'
import { App } from './app.tsx'
import '@unocss/reset/tailwind-compat.css'
import '@fontsource-variable/plus-jakarta-sans'
import 'virtual:uno.css'
import './app.css'

render(<App />, document.getElementById('app')!)
