import { useState } from 'react'
import {
    Card,
    ImgProduto,
    NomeProduto,
    PrecoProduto,
    DescProduto,
    AreaDescricao,
    BotaoCarrinho,
    BotaoLerMais,
} from './styles'

function CardProduto({ nome, preco, desc, img, adicionado, aoAlternarCarrinho }) {
    const [descricaoExpandida, setDescricaoExpandida] = useState(false)

    return (
        <Card>
            <ImgProduto src={img} alt={nome} />
            <NomeProduto>{nome}</NomeProduto>
            <PrecoProduto>{preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PrecoProduto>
            <AreaDescricao $expandida={descricaoExpandida}>
                <DescProduto>{desc}</DescProduto>
            </AreaDescricao>
            <BotaoLerMais
                type="button"
                onClick={() => setDescricaoExpandida(!descricaoExpandida)}
                aria-expanded={descricaoExpandida}
            >
                {descricaoExpandida ? 'Ler menos' : 'Ler mais'}
            </BotaoLerMais>

            <BotaoCarrinho
                type="button"
                $adicionado={adicionado}
                onClick={aoAlternarCarrinho}
            >
                {adicionado ? 'Adicionado ao Carrinho' : 'Adicionar ao Carrinho +'}
            </BotaoCarrinho>
        </Card>
    )
};

export default CardProduto;
