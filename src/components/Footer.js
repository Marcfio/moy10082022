import '../assets/styles/footer.css'
import '../assets/styles/main.css'

const Footer = () => (
    <footer>
        <hr/>
        <div className='row border-between pb-4'>
            <div className='col-md-4'>
                <h4 className='text-uppercase'> Términos y condiciones</h4>
            </div>
            <div className='col-md-4'>
                <a href="https://discord.com" className="social-media" id="discord-black"> </a>
                <a href="https://discord.com" className="social-media" id="twitter-black"> </a>
                <a href="https://discord.com" className="social-media" id="instagram-black"> </a>
                <a href="https://discord.com" className="social-media" id="youtube-black"> </a>
            </div>
            <div className='col-md-4'>
                <h4 className='text-uppercase'>Política de privacidad</h4>
            </div>
        </div>
    </footer>
)
export default Footer;