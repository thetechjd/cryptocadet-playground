import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CryptoPayButton} from "@cryptocadet/react-crypto-pay"

function App() {
  const [email, setEmail] = useState(false)
  const [shipping, setShipping] = useState(false)
  const [label, setLabel] = useState("Change Me")
  const [lang, setLang] = useState("en")
 



  
  return (
    <div className="container">
      <img src="cryptocadet.png" id="logo"/>
      <h1>Welcome to the Cadet Playground!</h1>
      <p>The playground is for testing general functionality and the user experience of creating a transaction via the CryptoCadet&trade; Pay Modal before integrating the button on your own website. To receive test USDT to simulate a payment on the Sepolia network, please visit <a href="https://app.ascendant.finance" target="_blank">app.ascendant.finance</a> and use the Faucet.</p>
      <span className="settings">
      <label>Button Label</label>
      <input
      type='text'
      onChange={(e)=> {
        setLabel(e.target.value)
      }}
      />
        <label>Email Required?</label>
      <input
      type='checkbox'
      onChange={(e)=> {
        if(e.target.checked){
          setEmail(true)
          console.log('clicked')
        } else {
          setEmail(false)
        }
      }}
      />
        <label>Shipping Required?</label>
      <input
      type='checkbox'
      onChange={(e)=> {
        if(e.target.checked){
          setShipping(true)
          console.log('clicked')
        } else {
          setShipping(false)
        }
      }}
      />
        <label>Language</label>
      <select onChange={(e) => {setLang(e.target.value)}}>
      <option value='en'>English</option>
      <option value='ar'>Arabic</option>
      <option value='fr'>French</option>
      <option value='es'>Spanish</option>
      <option value='pt'>Portuguese</option>
      <option value='de'>German</option>
      <option value='zh'>Chinese</option>
      
      </select>
      </span>
      <div id='button-div'>
      <CryptoPayButton 
      apiKey='pk_lLDhK0gUlxspd3JnsyC8O7oz4d5cqvqc'

      productId='play0'

      label={label}

      style={null}

      email={email ? 'required':''}

      shippingAddress={shipping ? 'required':''}

      lang={lang}
      
      
      />
      </div>
    </div>
  )
}

export default App
