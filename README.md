# fugapedia-api-types
<p align="center">
  <a href="https://discord.gg/Phqaa4DVEK"><img src="https://img.shields.io/discord/911878509599817739?color=5865F2&logo=discord&logoColor=white&maxAge=3600" alt="Discord" /></a>
  <a href="https://www.npmjs.com/package/fugapedia-api-types"><img src="https://img.shields.io/npm/v/fugapedia-api-types?maxAge=3600" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/fugapedia-api-types"><img src="https://img.shields.io/npm/dt/fugapedia-api-types?maxAge=3600" alt="npm downloads" /></a>
</p>

fugapedia-api-types is provide you type definitions for the [Fugapedia API](https://fugapedia.xyz/api.php)

[Fugapedia](https://fugapedia.xyz) supports only the Russian language, so that all information below will be in Russian.

## Установка
### npm
```
npm i fugapedia-api-types
```
### Yarn
```
yarn add fugapedia-api-types
```
### pnpm
```
pnpm add fugapedia-api-types
```

## Пример использования
Для импорта модуля вам потребуется указать версию API, для которого вы собираетесь получить типы. Чтобы сделать это — просто добавтье `/v*` после назания модуля, где `*` — это номер версии API.
### JavaScript
```js
const { APIArticle } = require('fugapedia-api-types/v1');
```
```ts
import { APIArticle } from 'fugapedia-api-types/v1';
```