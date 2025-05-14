<template>
    <div class="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
        <!-- Navbar simplificado -->
        <nav class="bg-white shadow-sm">
            <div class="container mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <a href="/" class="text-2xl font-bold text-primary">
                            <span class="text-primary">Psy</span><span class="text-secondary">Care</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Contenido principal -->
        <main class="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full text-center">
                <div class="mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-primary mx-auto" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h1 class="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
                <h2 class="text-3xl font-bold text-gray-800 mb-6">Página no encontrada</h2>
                <p class="text-lg text-gray-600 mb-8">
                    Lo sentimos, la página que estás buscando no existe o ha sido movida.
                </p>
                <div class="space-y-4">
                    <button @click="goBack"
                        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Volver atrás
                    </button>
                    <div>
                        <a href="/" class="text-primary hover:text-primary-dark transition font-medium">
                            Ir a la página de inicio
                        </a>
                    </div>
                </div>

                <!-- Sugerencias -->
                <div class="mt-12 bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-lg font-medium text-gray-800 mb-4">¿Buscabas alguna de estas páginas?</h3>
                    <ul class="space-y-2 text-left">
                        <li>
                            <a href="/blog" class="text-primary hover:text-primary-dark transition flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Blog de salud mental
                            </a>
                        </li>
                        <li>
                            <a href="/hoy-me-senti"
                                class="text-primary hover:text-primary-dark transition flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Diario "Hoy me sentí"
                            </a>
                        </li>
                        <li>
                            <a href="/profesionales"
                                class="text-primary hover:text-primary-dark transition flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Directorio de profesionales
                            </a>
                        </li>
                        <li>
                            <a href="/contacto"
                                class="text-primary hover:text-primary-dark transition flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>

        <!-- Footer simplificado -->
        <footer class="bg-gray-800 text-white py-6">
            <div class="container mx-auto px-6">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="mb-4 md:mb-0">
                        <p class="text-gray-300 text-sm">
                            © 2023 PsyCare. Todos los derechos reservados.
                        </p>
                    </div>
                    <div class="flex space-x-6">
                        <a href="#" class="text-gray-300 hover:text-white transition">
                            Términos
                        </a>
                        <a href="#" class="text-gray-300 hover:text-white transition">
                            Privacidad
                        </a>
                        <a href="#" class="text-gray-300 hover:text-white transition">
                            Contacto
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
const goBack = () => {
    window.history.back();
};
</script>

<style>
:root {
    --color-primary: 146, 64, 213;
    --color-primary-dark: 123, 44, 191;
    --color-primary-light: 232, 221, 255;
    --color-secondary: 64, 185, 213;
    --color-secondary-dark: 44, 162, 191;
    --color-secondary-light: 221, 245, 255;
}

.bg-primary {
    background-color: rgb(var(--color-primary));
}

.bg-primary-dark {
    background-color: rgb(var(--color-primary-dark));
}

.text-primary {
    color: rgb(var(--color-primary));
}

.text-secondary {
    color: rgb(var(--color-secondary));
}

.hover\:bg-primary-dark:hover {
    background-color: rgb(var(--color-primary-dark));
}

.hover\:text-primary-dark:hover {
    color: rgb(var(--color-primary-dark));
}

.focus\:ring-primary:focus {
    --tw-ring-color: rgb(var(--color-primary));
}

.transition {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
</style>