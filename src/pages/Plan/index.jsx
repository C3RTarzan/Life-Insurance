import './style.scss';

import { CreditCard } from '../../components/CreditCard';

const logo = require('../../assets/img/Logo.png');

function Plan() {
  return (
    <>
      <header>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
      </header>
      <section>
        <form action="" method="post">
          <div className='form'>
            <div className="title">
              <div className='icon'>
                <span className="iconify" data-icon="bi:arrow-left"></span>
              </div>
              <div className="text">
                <h1> Checkout</h1>

              </div>
            </div>
            <div className="inffo">
              <h2>1. Informações pessoais</h2>
              <div className='input-inffo'>
                <div className="box1">
                  <div className='name input-box'>
                    <label htmlFor="">Primeiro nome</label>
                    <input type="text" placeholder='Pedro' />
                  </div>
                  <div className="surname input-box">
                    <label htmlFor="">Sobrenome</label>
                    <input type="text" placeholder='Sousa Lima' />
                  </div>
                </div>
                <div className="box2">
                  <div className='name input-box'>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='teste@teste' />
                  </div>
                </div>
                <div className="box1">
                  <div className='name input-box'>
                    <label htmlFor="">Data de nascimento</label>
                    <input type="text" placeholder='16/04/2001' />
                  </div>
                  <div className="surname input-box">
                    <label htmlFor="">Sexo</label>
                    <input type="text" placeholder='Masculino' />
                  </div>
                </div>
                <div className="box1">
                  <div className='name input-box'>
                    <label htmlFor="">CPF</label>
                    <input type="text" placeholder='11.111.111.111' />
                  </div>
                  <div className="surname input-box">
                    <label htmlFor="">Telefone</label>
                    <input type="text" placeholder='(31) 9 9230499' />
                  </div>
                </div>
                <div className="box2">
                  <div className='name input-box'>
                    <label htmlFor="">Endereço</label>
                    <input type="text" placeholder='Pedroso carvalho do santos' />
                  </div>
                </div>
                <div className="box1">
                  <div className='name input-box'>
                    <label htmlFor="">CEP</label>
                    <input type="text" placeholder='11.111.111.111' />
                  </div>
                  <div className="surname input-box">
                    <label htmlFor="">N*</label>
                    <input type="text" placeholder='11' />
                  </div>
                </div>
              </div>
            </div>
            <div className="method">
              <h2>2. Método de pagamento</h2>
              <CreditCard />
            </div>
            <div className="text-footer">
              <div>
                <span class="iconify" data-icon="uil:padlock"></span>
              </div>
              <div>
                <span>Suas informações de pagamento estão protegidas por criptografia ponta a ponta.</span>
              </div>
            </div>
          </div>
          <div className='plan'>
            <span>la</span>
          </div>
        </form>
      </section>
    </>
  );
}

export default Plan;