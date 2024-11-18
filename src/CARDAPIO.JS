import React from "react";
import HeaderCardapio from "./Componentes/HeaderCardapio";
import PromoCardapio from "./Componentes/PromoCardapio";
import ValoresCardapio from "./Componentes/ValoresCardapio";

function CARDAPIO() {
  return (
    <div className="divcardapio">
      <header className="cardapioHeader">
        <div className="Cardapio">

          <HeaderCardapio />

          <PromoCardapio />

          <ValoresCardapio />

        </div>
      </header>
    </div>
  );
}

export default CARDAPIO;

