import ReactDOM from 'react-dom/client'
import '~/styles/index.css'
import "flowbite"
import '~/styles/walletAdapter.css'
import App from './App'
import { Flowbite } from 'flowbite-react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<Flowbite>
    <App />
</Flowbite>
)
// 