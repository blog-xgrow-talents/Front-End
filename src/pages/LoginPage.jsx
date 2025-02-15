import { Input } from '@/components/Input/Input';
import React from 'react';
import ButtonVariants from '@/components/Button/Button';

function LoginPage() {
  return (  
    <div>
      <h1>Email</h1>
      <Input/>
      <h2>Senha</h2>
      <Input/>
      <ButtonVariants> Entrar </ButtonVariants>
    </div>
  );
}

export default LoginPage;
