import * as React from 'react'
import ReactDOM from 'react-dom'

import {App} from './app'
import './bootstrap'
import {Profiler} from 'components/profiler'
import {AppProviders} from './context'
import {loadDevTools} from './dev-tools/load'

loadDevTools(() => {
  ReactDOM.render(
    <Profiler id="App Root" phases={['mount']}>
      <AppProviders>
        <App />
      </AppProviders>
    </Profiler>,
    document.getElementById('root'),
  )
})
