# react-ecommerce

This is my final project of AceleraDev React Online @Codenation. This is a sample of an e-commerce website which provides the following functionalities:

- It is *mobile-first* but works also in desktop;
- presents a catalog of available products in the online store;
- allows user to select multiple products and add them to a shopping cart.

The application is a SPA (*Single Page Application*) which relies on React.js and uses Redux for state managing. There is a similar application running [here](https://viniciusvinna.netlify.app/react-fashionista).


## Requisitos 

- Para cada item do catálogo de produtos as seguintes informações devem estar na página:
Imagem, Nome, Preço, Status “Em promoção”, Preço promocional (se disponível), Tamanhos disponíveis (opcional: não mostrar tamanho se não tiver disponível), Selo “Promoção”
- Deve ser possível adicionar itens por tamanho no carrinho de compras.
- Deve ser possível visualizar os itens adicionados no carrinho de compras, exibindo imagem, nome, preço e quantidade.
- Deve ser possível remover itens do carrinho de compras.

## opcionais
- O carrinho de compras deve persistir entre reloads de página;
- Mostrar apenas os tamanhos de produto disponíveis em estoque;
- Implementar a funcionalidade de busca em tempo real.