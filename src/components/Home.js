import React from 'react';

function Home() {

  const handleWhatsAppClick = () => {
    // Redirecionar para o link do WhatsApp
    window.location.href = 'https://api.whatsapp.com/send?phone=5549992014663';
  };

  return (
    <div className="about-container">
      <h1 className='about-title'>Olá, eu sou Wesllen da Cruz</h1>
      <h2 className='about-subtitle'>Desenvolvedor Frontend</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt illum rem voluptatibus eligendi earum dolorem ut iste, corrupti natus blanditiis! Voluptatem nisi eum, inventore excepturi voluptatum nemo nobis officia quo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque magnam omnis odit sit, qui labore ipsam ex quia quasi, distinctio voluptates nostrum quibusdam aut velit deserunt ratione molestias fugiat quaerat?</p>

      <div className="btn-container">
        <button className="show-content__cta">
          Ler mais
        </button>

        <button className="about__cta whatsapp-btn" onClick={handleWhatsAppClick}>
          Vamos Conversar
        </button>
      </div>
    </div>
  );
}

export default Home;
