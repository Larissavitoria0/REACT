import githubIcon from '../../assets/githubIcon.png'
import './footer.css'

function Footer() {
  return (
    <div className="footer">
      Criado por:<br />
      <a href="https://github.com/Larissavitoria0" target="_blank"><img src={githubIcon} /> Larissa Vitória</a>
    </div>
  )
}

export default Footer;
