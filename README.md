# ⚙ Steampunk Portfolio — Jair Frison Júnior

Portfólio pessoal com tema steampunk, construído com **React 19 + TypeScript + Vite** e animado com **anime.js v4**.

## Rodando o projeto

```bash
npm install
npm run dev      # servidor de desenvolvimento em http://localhost:5173
npm run build    # build de produção em dist/
npm run preview  # pré-visualiza o build de produção
```

## Idiomas (PT / EN)

- O botão com bandeira no menu alterna entre Português e Inglês (a escolha fica salva no navegador).
- O idioma pode ser pré-definido pela URL — ideal para compartilhar com recrutadores estrangeiros:
  - `https://seusite.com/?lang=en` → abre tudo em inglês
  - `https://seusite.com/?lang=pt` → abre tudo em português
- Os textos dos dois idiomas ficam em `src/data/resume.ts` (`pt` e `en`).

## Estrutura

- `src/data/resume.ts` — todo o conteúdo do currículo (perfil, habilidades, experiências, formação, idiomas). **Edite este arquivo para atualizar os textos do site.**
- `src/components/Gear.tsx` — engrenagem SVG gerada proceduralmente (dentes, raios e furo parametrizáveis).
- `src/components/Hero.tsx` — seção de abertura: engrenagens girando, nome com entrada letra a letra, subtítulo com efeito máquina de escrever e vapor animado.
- `src/components/Experience.tsx` — linha do tempo em forma de tubulação de latão com nós de engrenagem.
- `src/components/Education.tsx` — formação + "manômetros de fluência" para idiomas (ponteiro animado com easing elástico).
- `src/hooks/useReveal.ts` — dispara as animações do anime.js quando cada seção entra no viewport (IntersectionObserver).
- `src/index.css` — tema completo: latão, cobre, pergaminho, rebites e texturas metálicas.

## Animações e ambientação (anime.js)

- Dirigível cruzando o céu com hélice girando e balanço suave.
- Skyline de fábrica vitoriana com chaminés soltando vapor e torre do relógio.
- Lâmpadas de Edison penduradas, com balanço de pêndulo e luz tremulante.
- Par de engrenagens engrenadas (velocidades proporcionais ao número de dentes).
- Névoa rasteira em movimento no rodapé do hero.
- Manômetro fixo no canto que marca o progresso do scroll da página.
- Relógio de bolso no menu com ponteiros na hora real.
- Estatísticas em estilo tubo Nixie com contagem animada ao entrar na tela.
- Selo de cera, carimbo no diploma, brasas de fornalha na seção de contato.
- Texturas: grão de filme, vinheta e moldura de máquina com parafusos.
- Timeline de entrada no hero (`createTimeline` + `stagger`) e revelação por scroll em todas as seções.
