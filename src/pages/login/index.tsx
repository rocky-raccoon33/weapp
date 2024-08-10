import React from 'react';
import LoginForm from '../../components/LoginForm';
import './index.less';

const LoginPage: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    console.log('Username:', username);
    console.log('Password:', password);
    // 处理登录逻辑
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        {/* <img src='/path/to/your/logo.png' alt='Company Logo' className='logo' /> */}
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
