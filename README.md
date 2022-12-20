<div id="top"></div>
<!--

<!-- PROJECT LOGO -->
<br />
<div align="">
  <a href="https://github.com/othneildrew/Best-README-Template">
</a>

  <h1 align="center">Template NextJS Typescript</h3>
</div>

<!-- ABOUT THE PROJECT -->

## Construido com

- ⚡ Next.js 13
- ⚛️ React 18
- 👑 TypeScript
- 🔎 ESLint - Eslint mostra e corrige problemas no código
- 🖌 Prettier - Prettier da estilo a seu código
- 🔨 Jest - Jest vai testar seus códigos
- 🐕 Husky/commitlint/commitizen - Todos para manter seus commits padronizados

<!-- GETTING STARTED -->

## Documentação

### Requisitos

- [VsCode](https://code.visualstudio.com/download)
- [Node](https://nodejs.org/en/download/)

### Estrutura

- [`public`](./public) — Imagens, robots.txt e favicon vão aqui dentro.<br>
- [`src`](./src) — Sua aplicação vai aqui dentro, como: components: pages, styles....
- [`.husky`](.husky) — Configuração do husk.<br>

### Instalação

1. Instalar template
   ```sh
   ❯ yarn create next-app -e https://github.com/Guilherme-Santos08/template-nextjs-typescript
   # ou
   ❯ npx create-next-app -e https://github.com/Guilherme-Santos08/template-nextjs-typescript
   ```
2. Starta projeto
   ```sh
   yarn dev
   # ou
   npm run dev
   ```

### Comandos

- `dev`: Aplicação vai rodar em modo desenvolvedor em `http://localhost:3000`
- `build`: Gerar uma versão de produção
- `test`: Roda todos seus test feito em Jest
- `commit`: vai te abrir oções padronizadas de commit
  [commitizen](https://github.com/commitizen/cz-cli)

### Mapeamento de pastas

O TypeScript é pré-configurado com mapeamentos de caminho personalizados. Para importar
componentes ou arquivos, use o prefixo `@`.

```tsx
import { Button } from '@/components/Button'

// Para importar imagens ou outros arquivos da pasta pública
import avatar from '@/public/avatar.png'
```

<!-- CONTACT -->

## Contato

Guilherme Ribeiro [linkedin](https://www.linkedin.com/in/guilherme-ribeiro08/) -
augusto.gui.2208@gmail.com

## Créditos

- Esse Readme foi baseado no repositório
[typescript-nextjs-starter](https://github.com/jpedroschmitz/typescript-nextjs-starter)

- [Sobre o Commitlint, Husky, Commitizen](https://dev.to/vinicius_rodrigues/padronize-seus-commits-com-commitlint-husky-commitzen-2o6h)
<!-- LICENSE -->

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for
more information.

<!-- ACKNOWLEDGMENTS -->
