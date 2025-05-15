
# README Básico - PsyCare Vue Client

## Descripción
PsyCare es una plataforma web desarrollada con Vue.js que facilita el acceso a la salud mental, conectando a pacientes con profesionales calificados en un entorno seguro y confidencial.  


## Tecnologías Utilizadas
- Vue.js 3
- Vue Router
- Tailwind CSS  


## Características Principales

1. **Blog de Salud Mental**  
   Acceso a artículos escritos por profesionales sobre temas de salud mental, bienestar emocional y consejos prácticos.  


2. **Seguimiento Emocional ("Hoy me sentí")**  
   Un diario personal donde los usuarios pueden registrar sus emociones y compartirlas con su profesional de confianza para un mejor seguimiento.  


3. **Sistema de Soporte**  
   Incluye un formulario de contacto para que los usuarios puedan comunicarse con el equipo de soporte, así como métodos alternativos de contacto.

4. **Sección de Preguntas Frecuentes (FAQs)**  
   Respuestas a preguntas comunes organizadas por categorías para ayudar a los usuarios a encontrar información rápidamente.  


## Estructura del Proyecto
El proyecto está organizado en vistas principales:

- **LandingPage.vue:** Página principal que introduce la plataforma  
- **BlogIndex.vue:** Sistema de blog con artículos sobre salud mental  
- **Support.vue:** Sistema de soporte y contacto  
- **FAQs.vue:** Preguntas frecuentes organizadas por categorías  

## Funcionalidades para Diferentes Usuarios

### Para Pacientes
- Acceso a artículos informativos sobre salud mental  
- Registro de emociones diarias  
- Contacto con profesionales  

### Para Profesionales
- Herramientas para gestionar pacientes  
- Acceso a datos de seguimiento emocional (con consentimiento)  
- Creación de contenido para el blog  


## Instalación y Ejecución

```bash
# Clonar el repositorio  
git clone https://github.com/ninoxander/psycare-vue-client.git  
  
# Navegar al directorio del proyecto  
cd psycare-vue-client  
  
# Instalar dependencias  
npm install  
  
# Iniciar servidor de desarrollo  
npm run dev
