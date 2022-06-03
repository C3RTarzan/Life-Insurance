import './style.scss'

export const CreditCard = () => (
  <div className="card">
    <div className="header">
      <div className="text-header">
        <div className="icon">
          <span className="iconify" data-icon="bi:credit-card"></span>
        </div>
        <div className="text">
          <span>Cadastrar cartão de cobrança</span>
        </div>
      </div>
      <div className="flagCard">
        <span class="iconify" data-icon="logos:visa"></span>
        <span class="iconify" data-icon="logos:mastercard"></span>
        <span class="iconify" data-icon="logos:amex"></span>
      </div>
    </div>
    <div className="input">
    <div className="box">
      <div className='input-box'>
        <label htmlFor="">Nome no cartão</label>
        <input type="text" placeholder='Nome' />
      </div>
      <div className="input-box">
        < label htmlFor="">Expiração</label>
        <input type="text" placeholder='25/05' />
      </div>
    </div>
    <div className="box">
      <div className='input-box'>
        <label htmlFor="">Número do cartão</label>
        <input type="text" placeholder='11.111.111.111' />
      </div>
      <div className="surname input-box">
        <label htmlFor="">CVV</label>
        <input type="text" placeholder='11' />
      </div>
    </div>
  </div>
  </div >
)

