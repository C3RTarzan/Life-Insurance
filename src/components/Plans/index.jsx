import './style.scss'

import { plan } from '../../utils/plan'

export const Plans = () => (
  <div className="box-plan">
    <span className='title-box'>Plano</span>
    {plan.map(plans => (
      <div key={plans.id} className='itens-box'>
        <div className='header-itens'>
          <h2>{plans.name}</h2>
          <div className='feature'></div>
        </div>
        <div className="section-itens">
          {plans.benefit.map(plan => (
            <div className='iten'>
              <div className="icon">
                <span class="iconify" data-icon="akar-icons:circle-check-fill"></span>
              </div>

              <div className="text">
                <span>{plan.iten}</span>
              </div>
            </div>
          ))}
          <div className='feature'>

          </div>
        </div>
        <div className="footer-itens">
          <div className="header-footer">
            <div className='text'>
              <span>Total</span>
            </div>
            <div className="price">
              <span>{plans.price}</span>
            </div>
          </div>
          <div className="button-footer">
            <button disabled>Realizar pagamento <span className="iconify" data-icon="bi:arrow-right"></span></button>
          </div>

        </div>
      </div>
    ))}
  </div>
)

