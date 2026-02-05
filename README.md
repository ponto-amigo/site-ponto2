# Ponto Amigo — Site (Next.js + React)

Versão mais "bonitona" (mais cor, imagens e páginas internas) para atrair parceiros (CORBAN), inspirada nas páginas oficiais:

- https://www.pontoamigo.com/
- https://www.pontoamigo.com/quemsomos
- https://www.pontoamigo.com/ondeestamos

## Rodar
```bash
npm install
npm run dev
```

## Páginas
- `/` (landing com CTA + formulário)
- `/quem-somos`
- `/produtos`
- `/onde-estamos`
- `/links-uteis`

## Imagens
As imagens de cabeçalho foram obtidas do próprio site (assets Wix) e colocadas em `public/images/`.

## Formulário
`/api/partner` valida e registra o lead. Para produção:
- integrar com webhook (Make/Zapier/Power Automate)
- ou CRM / e-mail
