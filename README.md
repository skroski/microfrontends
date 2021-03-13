# O que são os Micro Frontends?
É uma metodologia que divide as aplicações de um Domínio principal em sub-domínios, e são desenvolvidas de forma assíncrona, e cada equipe geralmente desenvolve uma aplicação separada em cada micro frontend. Cria uma autonomia muito maior para as equipes.

As vantagens é que cada funcionalidade pode ser executadas de forma independentes, e assim agrupando pequenas aplicações em aplicações maiores e dividindo funcionalidades que podem ser desenvolvidas com a possibiildade de usar frameworks diferentes e equipes diferentes.


# Começamos usando o Single SPA como o framework que vai Orquestrar nosso Micro Frontends
npx create-single-spa

Crie primeiro o orquestrador (root) e depois é possível utilizar o mesmo comando para criar os Parcels, o interessante é manter a independência de times e tempo para cada desenvolvimento.
