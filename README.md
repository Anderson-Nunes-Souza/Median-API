### Projeto API Trabalho 1

## Description

Projeto da API Produtos do Curso de API Gateway Impacta

## instalação

```bash 
$ npm install
```
# Subir o docker Compose do POSTGRES
```bash
$ docker-compose up
```
# Subir o banco para o diretório
```bash
$ npx prisma migrate dev --name "init"
```
# Realizar o Seed 
```bash
$ npx prisma db seed
```

## Running the app

```bash
$ npm run start:dev
```

## Endpoints não funcionais
- POST /api/v1/Produto/{codigo}/componente
- GET  /api/v1/Produto/componente

## Documentação utilizada no Projeto

https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0#create-a-prisma-service
