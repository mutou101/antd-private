import React, { useContext } from 'react';
import classnames from 'classnames';
import { ConfigContext } from '@constants/config-provide';
import './login.less';

export interface LoginComponentProps {
  className?: string;
  backImageUrl?: string;
  isLeftAndRight?: boolean;
  background?: string,
  slogan?: string,
  logo?: string,
  children: React.ReactNode;
  statement?: React.ReactNode;
}

const LoginComponent = (props: LoginComponentProps) => {
  const { className, backImageUrl, children, isLeftAndRight, background, slogan, logo, statement } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const loginPrefixCls = getPrefixCls('login');
  const leftAndRightLoginPrefixCls = getPrefixCls('leftAndRight-login-root');
  if (!isLeftAndRight) {
    return (
      <div
        className={classnames(loginPrefixCls, className)}
        style={{
          backgroundImage: `url(${backImageUrl})`,
          backgroundRepeat: "round"
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={classnames(leftAndRightLoginPrefixCls)}>
      <div
        className='AntdPrivate-left-container'
        style={{
          backgroundImage: `url(${backImageUrl})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img className='AntdPrivate-left-slogan' src={slogan} />
      </div>
      <div className='AntdPrivate-right-container' style={{ background: `${background}` }}>
        <div className='AntdPrivate-wrapper'>
          <div>
            <div style={{textAlign:'center'}}>
            {
              logo && <img className='AntdPrivate-logo' src={logo} alt="logo" />
            }
            </div>
            <div className='AntdPrivate-form-container'>
              {children}
            </div>
          </div>
        </div>
        <div className='AntdPrivate-statement'>
          {statement}
        </div>
      </div>

    </div>
  );
};

export default LoginComponent;