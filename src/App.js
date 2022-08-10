import './App.css';
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import {ethers} from "ethers"
import abi_ from './abi.json'


const collection_add = "0xB0eb034BA19DC2B8BeFc1e9E95220429a0B1D728"

const connectWallet = async  () => {
  await window.ethereum.enable()
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const collection = new ethers.Contract (collection_add, abi_, signer);
  console.log(signer);
};

var scrollFunc = function() {
  let myID = document.getElementById("wallet");
  var y = window.scrollY;
  if (y >= 80) {
    myID.className = "cta show"
  } else {
    myID.className = "cta hide"
  }
};

window.addEventListener("scroll", scrollFunc);

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <button id={"wallet"} onClick={connectWallet}>
        <img src={require('./assets/images/connectWalletCircle.png')} alt="Boton wallet flotante" className='circle-wallet'/>
      </button>
      <Footer />
    </div>
  );
}
export default App;
