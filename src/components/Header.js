import '../assets/styles/header.css'
import '../assets/styles/main.css'
import Button from './Button'
import {ethers} from "ethers"


const rinkeby_link = "https://testnets.opensea.io/collection/moy";
const open_rinkeby = async() => {window.open(rinkeby_link, '_blank')};


const connectWallet = async  () => {
    await window.ethereum.enable()
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(signer)
};

const Header = () => (
    <div className='row bg-noise py-4'>
        <div className='col-md-6 pb-3'>
            <Button text="Connect wallet" onClick={connectWallet}/>
        </div>
        <div className='col-md-6'>
            <a href="https://discord.com" className="social-media" id="discord"> </a>
            <a href="https://discord.com" className="social-media" id="twitter"> </a>
            <a href="https://discord.com" className="social-media" id="instagram"> </a>
            <a onClick= {open_rinkeby} className="social-media" id="youtube"> </a>
        </div>
    </div>
)
export default Header;
