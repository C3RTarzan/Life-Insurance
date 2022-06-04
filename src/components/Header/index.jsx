import './style.scss'
const logo = require('../../assets/img/Logo.png');

function Header() {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
    </header>
  )
}

export default Header;