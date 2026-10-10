import { useState } from 'react'
import CardProduto from "./components/CardProduto"
import EstilosGlobais, { Pagina } from './styles'

function App() {
  const [adicionado, setAdicionado] = useState(false)

  return (
    <>
      <EstilosGlobais />
      <Pagina>
      <CardProduto 
        img="/imgs/fone-de-ouvido-bluetooth.webp"
        nome="Fone de Ouvido Bluetooth Thinkplus GM2 Pro Max"
        preco={259}
        desc="O Lenovo GM2 Pro Max é um fone Bluetooth 5.4 com som surround Dolby e drivers de 13 mm, desenvolvido para oferecer áudio imersivo em jogos e músicas. Possui modo gamer com baixa latência de 45 ms, resistência à água IPX4, display LED para acompanhar a bateria e conexão estável para treinos, streaming e partidas intensas."
        adicionado={adicionado}
        aoAlternarCarrinho={() => setAdicionado((estadoAtual) => !estadoAtual)}
      />
      </Pagina>
    </>
  )
}

export default App
