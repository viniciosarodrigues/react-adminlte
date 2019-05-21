import React from 'react'
import ReactDOM from 'react-dom'

import App from './common/main/app'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()