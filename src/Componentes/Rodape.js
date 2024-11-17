import React from 'react';

// Definindo o componente Footer/Rodape como uma função
//tag <footer> para definir a seção do rodapé do site e adicionar uma classe para estilização específica

const Rodape = () => {
  return (

    <footer className="rodape">

      <p>Horário de funcionamento: 11:00 -  15:00 de Seg a Sáb.</p>
      
      <p>Endereço: R. Rua Alfredo Lopes 1717 - CEP 13560460 , 123, Bairro, Cidade - Estado</p>

      <p>Telefone: (16) 98765-1234 - Whatsapp</p>
      
      <div className="social-media">
       
        <a href="https://facebook.com">Facebook</a>
       
        <a href="https://instagram.com">Instagram</a>
     
        <a href="https://twitter.com">Twitter</a>

      </div>

    </footer>

  );
};


export default Rodape;