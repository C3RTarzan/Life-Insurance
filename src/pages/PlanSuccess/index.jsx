import './style.scss';

import { plan } from '../../utils/plan'

function PlanSuccess() {
  return (
    <div className="PlanSuccess">
      <div className='box'>
        <div className="check">
          <div className="circle-check">
            <span class="iconify" data-icon="emojione-v1:left-check-mark"></span>
          </div>
        </div>
        <div className='inffo'>
          <div className="primary-inffo">
            <span>Assinatura realizada com sucesso!</span>
          </div>
          <div className="secondary-inffo">
            <div className='text'>
              <span>Enviamos todas as informações de acesso para seu email, nós da IBB agradecemos pela preferência.</span>
            </div>
            <div className='link'>
              <span>Perguntas? Sugestões? Precisa de ajuda?</span>
              <a href=''>Nos envie um email.</a>
            </div>
          </div>

        </div>
        <div className="summary">
          <div className="box-summary">
            <div className="header-box">
              <span>Resumo da compra</span>
            </div>
            {plan.map(plans => (
              <div className="section-box">
                <div className='plan'>
                  <span>Plano <span>{plans.name}</span></span>
                </div>
                <div className='price'>
                  <span>{plans.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="button">
          <a href='./'>Ir para a página de login da IBB</a>
        </div>

      </div>
    </div>

  )
}

export default PlanSuccess;