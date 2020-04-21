# Vue-EasyMDE

> [english version](README.md)

> Компонент редактора Markdown для Vue.js. Поддерживается только Vue2.x.

[![npm package](https://img.shields.io/npm/v/vue-easymde.svg)](https://npmjs.org/package/vue-easymde)
[![npm downloads](http://img.shields.io/npm/dm/vue-easymde.svg)](https://npmjs.org/package/vue-easymde)

# Пользовательские настройки

> Больше не поддерживается Vue1.x

## Установка

```bash
npm install vue-easymde --save

yarn add vue-easymde
```

## Использование

- Внутрення ссылка в единичном компоненте

```vue
<template>
 <vue-easymde v-model="content" ref="markdownEditor" />
</template>

<script>
 import VueEasymde from "vue-easymde";

 export default {
  components: {
    VueEasymde
  }
 };
</script>

<style>
 @import "~easymde/dist/easymde.min.css";
</style>
```

- Глобальная ссылка

```javascript
import Vue from "vue";
import VueEasymde from "vue-easymde";
import "easymde/dist/easymde.min.css";

Vue.component('vue-easymde', VueEasymde)
```

## Props

| Свойство      | Тип     | По умолчанию | Описание                                                |
| ------------- | ------- | ----------- | -------------------------------------------------------- |
| value         | String  | None        | Начальное значение, может быть использован хук v-model   |
| name          | String  | None        | Название контроля                                        |
| preview-class | String  | None        | Пользовательский класс стилей предварительного просмотра |
| autoinit      | Boolean | true        | Автоматическая инициализация                             |
| highlight     | Boolean | false       | Доступно для выделения                                   |
| sanitize      | Boolean | false       | HTML, который не отображает ввод после открытия          |
| configs       | Object  | {}          | [Конфигурация EasyMDE](#Конфигурация)                   |
| previewRender | Function | - | configs.previewRender |

## Методы

``` js
this.$refs.markdownEditor.simplemde.togglePreview();
```

[examples/index.vue](./examples/index.vue)

[simplemde.js](https://github.com/sparksuite/simplemde-markdown-editor/blob/6abda7ab68cc20f4aca870eb243747951b90ab04/src/js/simplemde.js#L1908-L2026)

## Стиль Markdown
> Например, стиль markdown от Github

[github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

### Установка
```bash
$ npm install --save github-markdown-css

$ yarn add github-markdown-css
```

### Использование
```vue
<template>
 <vue-easymde preview-class="markdown-body" />
</template>

<style>
 @import "~easymde/dist/easymde.min.css";
 @import "~github-markdown-css";
</style>
```

## Highlight

### Установка
```
$ npm install --save highlight.js

$ yarn add highlight.js
```

### Использование
```vue
<template>
 <vue-easymde :highlight="true" />
</template>

<script>
 import hljs from "highlight.js";

 window.hljs = hljs;
</script>

<style>
 @import "~easymde/dist/easymde.min.css";
 @import "~highlight.js/styles/atom-one-dark.css";
 /* Highlight theme list: https://github.com/isagalaev/highlight.js/tree/master/src/styles */
</style>
```

## Редактор тем ([simplemde-theme-base](https://github.com/xcatliu/simplemde-theme-base/wiki/List-of-themes))

> например, тема simplemde-theme-base

### Установка
```
$ npm install --save simplemde-theme-base

$ yarn add simplemde-theme-base
```

### Использование
```vue
<style>
  @import "~simplemde-theme-base/dist/simplemde-theme-base.min.css";
  /* no need import simplemde.min.css */
</style>
```

## Конфигурация
> Конфигурация основана на EasyMDE [config](https://github.com/Ionaru/easy-markdown-editor)

- [Русский](doc/configuration_ru.md)
- [English](doc/configuration_en.md)
- [中文](doc/configuration_zh.md)

## Примеры

- [Простой Пример](./examples/index.vue)
- [Пример на Nuxt](./examples/nuxt)
- [Страница Демо](https://NikulinIlya.github.io/vue-easymde/)
- [Исходники Демо](https://github.com/NikulinIlya/vue-easymde/tree/gh-pages)

## Зависимости

- [EasyMDE](https://github.com/Ionaru/easy-markdown-editor)

## Лицензия

vue-easymde выпущен с открытым исходным кодом и под лицензией MIT.

Copyright (c) 2018 F-loat

Copyright (c) 2019 Ilya Nikulin
