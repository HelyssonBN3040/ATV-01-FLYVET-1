import React from 'react';

//criando uma função de Lançamento: const: LaunchSection()
//criar um array/coleção de dados e cada objeto terá um nome e uma imagem
// Usando a tag <section> para definir uma seção do site e adicionando a classe 'launch-section' para estilização específica
// Div para agrupar os lançamentos, usando a classe 'launch-list' para estilização e irei mapear o array de lançamentos para renderizar cada item dinamicamente
// Usando 'key' como 'index' para identificar cada elemento de forma única

const Nossoslancamentos = () => {

const launches = [
    { name: 'Penne ao Pesto', image: 'penneaopesto.jpg' },
    { name: 'Moqueca de Berinjela', image: 'Muquecaberinjela.jpg' },
    { name: 'Risoto com Pequi', image: 'risotocompequi.jpg' },
    { name: 'Carne de Jaca', image: 'carnedejaca.jpg' },
  ];

  return (
    <section className="launch-section">

      <h2>Nossos Lançamentos:</h2>
      
      <div className="launch-list">

        {launches.map((item, index) => (
          
          <div key={index} className="launch-item">
          
            <img src={item.image} alt={item.name} />
           
            <p>{item.name}</p>

          </div>
        ))}

      </div>

    </section>

  );
};

export default Nossoslancamentos;