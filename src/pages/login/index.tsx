import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import './index.less';
import logo from '../../assets/budget-24687.svg'

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isAgreed) {
      alert('请勾选同意隐私政策')
    }

    if (!username) {
      Taro.showModal({ title: "请输入用户名" })
      return
    }

    if (!password) {
      Taro.showModal({ title: "请输入密码" })
      return
    }

    Taro.setStorageSync("userToken", "mock-token")
    Taro.redirectTo({ url: "/pages/index/index" })

  };
  return (
    <div className='login-page'>
      <div className='login-container'>

        <img src={logo} alt='Company Logo' className='min-h-full' />

        <form onSubmit={handleSubmit} className='bg-white rounded shadow-md'>
          <h2 className='text-2xl font-bold mb-6 text-left text-sky-300'>欢迎使用！</h2>
          <div className='mb-4'>
            <label htmlFor='username' className='block text-sm font-medium text-gray-700'>用户名</label>
            <input
              type='text'
              id='username'
              value={username}
              placeholder='请输入手机/邮箱/用户名'
              onChange={(e) => setUsername(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border-8 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>密码</label>
            <input
              type='password'
              id='password'
              value={password}
              placeholder='请输入密码'
              onChange={(e) => setPassword(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required
            />
          </div>

          <div className='flex items-center text-gray-600 text-sm'>
            <input
              type='checkbox'
              id='agreement'
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className=''
            />
            <label htmlFor='agreement' className='flex items-center whitespace-nowrap'> 我已阅读并同意 <a href='/privacy' className='text-sky-300 hover:underline ml-1'>隐私政策</a></label>
          </div>
          <button
            disabled={!isAgreed}
            type='submit'
            className='bg-sky-500 font-bold font-mono text-white disabled:bg-sky-200 btn btn--primary mt-2'
          >
            登陆
          </button>
          <div className='mt-4 text-center'>
            <a href='#' className='text-sm text-sky-300 hover:text-indigo-700'>忘记密码?</a>
          </div>


        </form>
      </div>
    </div>
  );
};

export default Login;
