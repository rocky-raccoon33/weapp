import React, { useState } from 'react';
import { Input } from '@tarojs/components';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isAgreed) {
      alert('请勾选同意隐私政策')
    }

    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white p-8 rounded shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-left text-indigo-800'>欢迎使用！</h2>
      <div className='mb-4'>
        <label htmlFor='username' className='block text-sm font-medium text-gray-700'>用户名</label>
        <input
          type='text'
          id='username'
          value={username}
          placeholder='请输入手机/邮箱/用户名'
          onChange={(e) => setUsername(e.target.value)}
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
          className='mr-2'
        />
        <label htmlFor='agreement'>
          我已阅读并同意 <a href='/privacy' className='text-green-500 hover:underline'>隐私政策</a>
        </label>
      </div>
      <button
        disabled={!isAgreed}
        type='submit'
        className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-sky-800 focus:outline-none focus:ring-offset-2  disabled:bg-gray-400 cursor-not-allowed enabled:bg-indigo-600'
      >
        登陆
      </button>
      <div className='mt-4 text-center'>
        <a href='#' className='text-sm text-indigo-600 hover:text-indigo-700'>忘记密码?</a>
      </div>


    </form>
  );
};

export default LoginForm;
