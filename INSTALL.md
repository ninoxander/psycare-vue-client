
  

# Guía de Instalación para Replicar este Repositorio Localmente usando Yarn

  

## Requisitos Previos

  

Antes de comenzar, asegúrate de tener instalado:

  

- Node.js (versión recomendada: 16.x o superior)

- Yarn (como gestor de paquetes)

- Git (para clonar el repositorio)

  

## Pasos para la Instalación

  

### 1. Clonar el Repositorio

  

```bash

git  clone  https://github.com/ninoxander/psycare-vue-client.git

cd  psycare-vue-client

```

  

### 2. Instalar Dependencias

  

```bash

yarn  install

```

  

Este comando instalará todas las dependencias definidas en el archivo `package.json`, incluyendo Vue 3, TypeScript, Tailwind CSS y Vue Router.

  

### 3. Iniciar el Proyecto en Modo Desarrollo

  

```bash

yarn  dev

```

  

Este comando ejecutará Vite en modo desarrollo, lo que iniciará un servidor de desarrollo local con recarga en caliente (HMR).

  

### 4. Compilar para Producción

  

```bash

yarn  build

```

  

Este comando ejecutará primero el compilador de TypeScript para Vue (`vue-tsc -b`) y luego construirá la versión de producción con Vite.

  

### 5. Previsualizar la Versión de Producción

  

```bash

yarn  preview

```

  

Este comando te permitirá previsualizar localmente la versión de producción compilada.

  

## Estructura del Proyecto

  

El proyecto está configurado como una aplicación Vue 3 con TypeScript y utiliza Vite como herramienta de construcción. La aplicación se monta en el elemento con id `app` en el archivo HTML principal `index.html`.

  

La configuración de Vite incluye plugins para Vue y Tailwind CSS (`vite.config.ts`).

  

## Dependencias Principales

  

-  **Vue 3**: Framework progresivo para construir interfaces de usuario

-  **Vue Router**: Enrutador oficial para Vue.js

-  **Tailwind CSS**: Framework de CSS utilitario

-  **TypeScript**: Superset tipado de JavaScript

-  **Vite**: Herramienta de construcción frontend moderna y rápida

  

## Comandos Útiles

  

```bash

# Iniciar en modo desarrollo

yarn  dev

  

# Compilar para producción

yarn  build

  

# Previsualizar la versión de producción

yarn  preview

```