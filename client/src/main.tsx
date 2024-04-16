import { render } from 'preact'
import { App } from './app.tsx'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import './app.css'

render(<App />, document.getElementById('app')!)
