# Card de Produto Responsivo

Projeto desenvolvido como atividade prática de React para aplicar **CSS-in-JS** com Styled Components. A aplicação exibe um card de produto de e-commerce com imagem, nome, preço, descrição expansível e botão de carrinho com estilo dinâmico.

## Objetivo da atividade

Praticar a criação de componentes reutilizáveis em React e a estilização isolada com Styled Components, usando propriedades para modificar a aparência da interface conforme o estado da aplicação.

## Funcionalidades

- Exibição de imagem, nome, preço e descrição de um produto.
- Botão **Ler mais/Ler menos** para expandir e recolher a descrição.
- Botão de carrinho interativo: alterna entre “Adicionar ao Carrinho” e “Adicionado ao Carrinho”.
- Cor do botão definida dinamicamente pela prop `adicionado`:
  - `false`: cinza (`#6c757d`)
  - `true`: verde (`#198754`)
- Animações suaves para interação com o card, botão e descrição.
- Layout mobile first e responsivo nos breakpoints `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px) e `2xl` (1536px).

## Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Styled Components](https://styled-components.com/)
- JavaScript (ES6+)
- ESLint

## Organização do projeto

```text
src/
├── components/
│   └── CardProduto/
│       ├── index.jsx       # Componente e comportamento do card
│       └── styles.js       # Estilos do componente
├── App.jsx                 # Estado do carrinho e uso do CardProduto
├── main.jsx                # Ponto de entrada da aplicação
└── styles.js               # Estilos globais e layout da página

public/
└── imgs/                   # Imagens estáticas dos produtos
```

## Como executar localmente

1. Clone este repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Entre na pasta do projeto:

   ```bash
   cd card-produto
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o ambiente de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço exibido pelo Vite, geralmente `http://localhost:5173`.

## Scripts disponíveis

```bash
npm run dev     # Inicia o servidor de desenvolvimento
npm run build   # Gera a versão de produção
npm run lint    # Verifica padrões e possíveis problemas no código
```

## Critérios trabalhados

- Componentização e reutilização de código.
- CSS-in-JS com template literals.
- Estilização dinâmica baseada em props.
- Estado local com `useState`.
- Design responsivo com abordagem mobile first.
