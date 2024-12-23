import React from 'react';
import classes from './Checkout.module.scss';

type InputFieldProps = {
  label: string;
  type?: string;
  style?: React.CSSProperties;
  containerClass?: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', style, containerClass }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }} className={containerClass}>
    <div>{label}</div>
    <input style={style} type={type} />
  </div>
);

const Checkout = () => {
  return (
    <div className={classes['checkout-container']}>
      <div className={classes['left-conatiner']}>
        <section className={classes['delivery-information-container']}>
          <div className={classes['heading']}>Delivery Information</div>
          <div className={classes['delivery-information-body']}>
            <div className={classes['input-conatiner-1']}>
              <InputField
                label="Name"
                style={{ width: '300px', height: '40px' }}
                containerClass={classes['name-conatiner']}
              />
              <InputField
                label="Mobile Number"
                style={{ width: '300px', height: '40px' }}
                containerClass={classes['number-container']}
              />
            </div>
            <div className={classes['input-conatiner-2']}>
              <InputField
                label="Email"
                style={{ width: '300px', height: '40px' }}
                containerClass={classes['email-container']}
              />
              <InputField
                label="City"
                style={{ width: '300px', height: '40px' }}
                containerClass={classes['city-container']}
              />
            </div>
            <div className={classes['input-conatiner-3']}>
              <InputField
                label="State"
                style={{ width: '300px', height: '40px' }}
                containerClass={classes['state-conatiner']}
              />
              <InputField
                label="Zip Code"
                style={{ width: '150px', height: '40px' }}
                containerClass={classes['zip-code-conatiner']}
              />
              <InputField
                label="State Code"
                style={{ width: '150px', height: '40px' }}
                containerClass={classes['state-code-conatiner']}
              />
            </div>
            <InputField
              label="Address"
              style={{ width: '600px', height: '40px' }}
              containerClass={classes['input-address-4']}
            />
          </div>
        </section>
        <section className={classes['schedule-delivery-container']}>
          <div className={classes['heading']}>Schedule Delivery</div>
          <div className={classes['schedule-delivery-body']}>
          <InputField
                label="Date"
                style={{ width: '100%', height: '40px' , padding:"10px" , border:"1px solid #e0e0e0 " }}
                containerClass={classes['name-conatiner']}
                type='date'
              />
         
              <div className={classes['']}>
              <div className={classes['']}>Note</div>
              <textarea name="" id="" style={{ width: '100%', height: '40px' , padding:"10px" , border:"1px solid #e0e0e0 " }}/>

              </div>
          </div>
        </section>
        <section className={classes['payment-method-container']}>
          <div className={classes['heading']}>Payment Method</div>
          <div className={classes['payment-method-body']} >
          <div style={{ display: 'flex', flexDirection: 'row' , justifyContent:"space-around" , marginTop:"1.5rem"}} >
      <div>
        <input type="radio" id="online-payment" name="fav_language" value="online-payment" style={{marginRight:"10px"}} />
        <label htmlFor="online-payment">Online Payment</label>
      </div>
      <div>
        <input type="radio" id="cash-on-delivery" name="fav_language" value="cash-on-delivery" style={{marginRight:"10px"}} />
        <label htmlFor="cash-on-delivery">Cash on Delivery</label>
      </div>
      <div>
        <input type="radio" id="pos-on-delivery" name="fav_language" value="pos-on-delivery" style={{marginRight:"10px"}} />
        <label htmlFor="pos-on-delivery">POS on Delivery</label>
      </div>
    </div>
          </div>
        </section>
      </div>
      <div className={classes['right-container']}>
        <div className={classes['heading']}>Order Summary</div>
        <div className={classes['right-container-body']}>

          
        </div>
      </div>
    </div>
  );
};

export default Checkout;
