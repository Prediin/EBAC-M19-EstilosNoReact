import styled from 'styled-components'

export const Card = styled.article`
    width: 100%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 24px;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    background-color: #ffffff;
    box-shadow: 0 12px 30px rgb(15 23 42 / 10%);
    transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
        box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1);

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 18px 38px rgb(15 23 42 / 14%);
    }

    @media (min-width: 640px) {
        max-width: 440px;
        padding: 28px;
    }

    @media (min-width: 768px) {
        max-width: 560px;
        gap: 20px;
        padding: 32px;
    }

    @media (min-width: 1024px) {
        max-width: 880px;
        display: grid;
        grid-template-columns: minmax(260px, 320px) 1fr;
        column-gap: 32px;
        align-items: start;
        padding: 32px;
    }

    @media (min-width: 1280px) {
        max-width: 980px;
        grid-template-columns: minmax(280px, 360px) 1fr;
        column-gap: 40px;
        padding: 36px;
    }

    @media (min-width: 1536px) {
        max-width: 1100px;
        grid-template-columns: minmax(320px, 400px) 1fr;
        column-gap: 48px;
        padding: 40px;
    }
`

export const ImgProduto = styled.img`
    width: 100%;
    height: 240px;
    object-fit: contain;
    padding: 16px;
    border-radius: 14px;
    background: #f8fafc;

    @media (min-width: 640px) {
        height: 250px;
    }

    @media (min-width: 768px) {
        height: 280px;
    }

    @media (min-width: 1024px) {
        grid-row: 1 / span 5;
        height: 100%;
        min-height: 320px;
    }

    @media (min-width: 1280px) {
        min-height: 340px;
        padding: 24px;
    }

    @media (min-width: 1536px) {
        min-height: 360px;
    }
`

export const NomeProduto = styled.h2`
    margin: 0;
    color: #0f172a;
    font-size: 1.3rem;
    line-height: 1.3;

    @media (min-width: 768px) {
        font-size: 1.45rem;
    }

    @media (min-width: 1280px) {
        font-size: 1.65rem;
    }
`

export const PrecoProduto = styled.p`
    margin: 0;
    color: #15803d;
    font-size: 1.5rem;
    font-weight: 700;

    @media (min-width: 768px) {
        font-size: 1.65rem;
    }

    @media (min-width: 1280px) {
        font-size: 1.8rem;
    }
`

export const DescProduto = styled.p`
    margin: 0;
    text-align: justify;
    hyphens: auto;
    color: #475569;
    line-height: 1.5;
    font-size: 0.95rem;

    @media (min-width: 768px) {
        font-size: 1rem;
    }
`

export const AreaDescricao = styled.div`
    position: relative;
    max-height: ${({ $expandida }) => ($expandida ? '20rem' : '2.85rem')};
    overflow: hidden;
    will-change: max-height;
    transition: max-height 520ms cubic-bezier(0.16, 1, 0.3, 1);

    &::after {
        content: ${({ $expandida }) => ($expandida ? "''" : "'...'")};
        position: absolute;
        right: 0;
        bottom: 0;
        padding-left: 4px;
        background: #ffffff;
        color: #475569;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`

export const BotaoLerMais = styled.button`
    align-self: flex-start;
    margin-top: -8px;
    padding: 0;
    border: 0;
    background: transparent;
    color: #2563eb;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        color: #1d4ed8;
        text-decoration: underline;
    }
`

export const BotaoCarrinho = styled.button`
    width: 100%;
    padding: 14px 18px;
    border: 0;
    border-radius: 10px;
    background: ${({ $adicionado }) => ($adicionado ? '#198754' : '#6c757d')};
    color: #ffffff;
    font-weight: 700;
    cursor: pointer;
    transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
        filter 220ms ease;

    &:hover {
        filter: brightness(1.06);
    }

    &:active {
        transform: scale(0.98);
        filter: brightness(0.96);
    }
`
