<template>
    <div class="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <!-- Navbar (simplificado) -->
        <nav class="bg-white shadow-sm">
            <div class="container mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <a href="/" class="text-2xl font-bold">
                            <span class="text-primary">Psy</span><span class="text-secondary">Care</span>
                        </a>
                    </div>
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="/" class="text-gray-700 hover:text-primary transition">Inicio</a>
                        <a href="/blog" class="text-primary font-medium transition">Blog</a>
                        <a href="/hoy-me-senti" class="text-gray-700 hover:text-primary transition">Hoy me sentí</a>
                        <a href="/faqs" class="text-gray-700 hover:text-primary transition">FAQs</a>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/dashboard"
                            class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark transition">
                            Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Header -->
        <header class="bg-primary-light py-12">
            <div class="container mx-auto px-6">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Blog de Salud Mental
                        </h1>
                        <p class="text-lg text-gray-600 max-w-2xl">
                            Artículos escritos por profesionales sobre temas de salud mental,
                            bienestar emocional y consejos prácticos.
                        </p>
                    </div>
                    <div class="mt-6 md:mt-0" v-if="isAdmin || isProfessional">
                        <a href="/blog/crear"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m8-8H4" />
                            </svg>
                            Crear artículo
                        </a>
                    </div>
                </div>
            </div>
        </header>

        <!-- Filtros y búsqueda -->
        <div class="bg-white border-b">
            <div class="container mx-auto px-6 py-4">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div class="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                        <div class="relative">
                            <select v-model="filters.category"
                                class="appearance-none block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-primary focus:border-primary">
                                <option value="">Todas las categorías</option>
                                <option value="ansiedad">Ansiedad</option>
                                <option value="depresion">Depresión</option>
                                <option value="estres">Estrés</option>
                                <option value="autoestima">Autoestima</option>
                                <option value="relaciones">Relaciones</option>
                                <option value="trauma">Trauma</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                        <div class="relative">
                            <select v-model="filters.author"
                                class="appearance-none block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-primary focus:border-primary">
                                <option value="">Todos los autores</option>
                                <option value="dra-garcia">Dra. Maria García</option>
                                <option value="dr-rodriguez">Dr. Carlos Rodríguez</option>
                                <option value="dra-martinez">Dra. Ana Martínez</option>
                                <option value="dr-lopez">Dr. Javier López</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 md:mt-0">
                        <div class="relative">
                            <input type="text" v-model="searchQuery" placeholder="Buscar artículos..."
                                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contenido principal -->
        <div class="container mx-auto px-6 py-12">
            <!-- Featured Article -->
            <div v-if="featuredArticle" class="mb-12">
                <h2 class="text-xl font-semibold text-gray-800 mb-6">
                    Artículo destacado
                </h2>
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                            <img class="h-48 w-full object-cover md:h-full md:w-80" :src="featuredArticle.image"
                                :alt="featuredArticle.title" />
                        </div>
                        <div class="p-8">
                            <div class="flex items-center">
                                <span class="bg-primary-light text-primary text-xs px-2 py-1 rounded-full">{{
                                    featuredArticle.category }}</span>
                                <span class="ml-3 text-xs text-gray-500">{{
                                    featuredArticle.date
                                    }}</span>
                            </div>
                            <a :href="`/blog/${featuredArticle.slug}`" class="block mt-2">
                                <h3 class="text-2xl font-semibold text-gray-800 hover:text-primary transition">
                                    {{ featuredArticle.title }}
                                </h3>
                                <p class="mt-3 text-gray-600">{{ featuredArticle.excerpt }}</p>
                            </a>
                            <div class="mt-6 flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="h-10 w-10 rounded-full" :src="featuredArticle.author.avatar"
                                        :alt="featuredArticle.author.name" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm font-medium text-gray-800">
                                        {{ featuredArticle.author.name }}
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        {{ featuredArticle.author.role }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Articles Grid -->
            <div v-if="filteredArticles.length > 0">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="article in filteredArticles" :key="article.id"
                        class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                        <img :src="article.image" :alt="article.title" class="h-48 w-full object-cover" />
                        <div class="p-6 flex-grow">
                            <div class="flex items-center">
                                <span class="bg-primary-light text-primary text-xs px-2 py-1 rounded-full">{{
                                    article.category }}</span>
                                <span class="ml-3 text-xs text-gray-500">{{
                                    article.date
                                    }}</span>
                            </div>
                            <a :href="`/blog/${article.slug}`" class="block mt-2">
                                <h3 class="text-xl font-semibold text-gray-800 hover:text-primary transition">
                                    {{ article.title }}
                                </h3>
                                <p class="mt-2 text-gray-600 line-clamp-3">
                                    {{ article.excerpt }}
                                </p>
                            </a>
                        </div>
                        <div class="px-6 pb-6">
                            <div class="flex items-center mt-4">
                                <div class="flex-shrink-0">
                                    <img class="h-8 w-8 rounded-full" :src="article.author.avatar"
                                        :alt="article.author.name" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm font-medium text-gray-800">
                                        {{ article.author.name }}
                                    </p>
                                    <p class="text-xs text-gray-500">{{ article.author.role }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pagination -->
                <div class="mt-12">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-gray-700">
                                Mostrando <span class="font-medium">1</span> a
                                <span class="font-medium">{{ filteredArticles.length }}</span>
                                de
                                <span class="font-medium">{{ totalArticles }}</span> resultados
                            </p>
                        </div>
                        <nav class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                            <a href="#"
                                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span class="sr-only">Anterior</span>
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="#"
                                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">1</a>
                            <a href="#"
                                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-primary text-sm font-medium text-white">2</a>
                            <a href="#"
                                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">3</a>
                            <span
                                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
                            <a href="#"
                                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">8</a>
                            <a href="#"
                                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">9</a>
                            <a href="#"
                                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span class="sr-only">Siguiente</span>
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>

            <!-- No results -->
            <div v-else class="text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 class="mt-2 text-lg font-medium text-gray-900">
                    No se encontraron artículos
                </h3>
                <p class="mt-1 text-gray-500">
                    Intenta ajustar tus filtros o busca con otros términos.
                </p>
                <div class="mt-6">
                    <button @click="resetFilters"
                        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        Resetear filtros
                    </button>
                </div>
            </div>

            <!-- Newsletter -->
            <div class="mt-16 bg-primary-light rounded-lg p-8">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="md:w-0 md:flex-1">
                        <h3 class="text-xl font-semibold text-gray-800">
                            Suscríbete a nuestro newsletter
                        </h3>
                        <p class="mt-2 text-gray-600 max-w-3xl">
                            Recibe los últimos artículos sobre salud mental, consejos
                            prácticos y actualizaciones de nuestros especialistas directamente
                            en tu bandeja de entrada.
                        </p>
                    </div>
                    <div class="mt-4 md:mt-0 md:ml-8">
                        <form class="sm:flex" @submit.prevent="subscribeNewsletter">
                            <label for="email-address" class="sr-only">Email</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required
                                v-model="newsletterEmail"
                                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:max-w-xs"
                                placeholder="Ingresa tu email" />
                            <div class="mt-3 rounded-md sm:mt-0 sm:ml-3">
                                <button type="submit"
                                    class="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                    Suscribirme
                                </button>
                            </div>
                        </form>
                        <p class="mt-2 text-sm text-gray-500">
                            Nos preocupamos por tu privacidad. Lee nuestra
                            <a href="#" class="text-primary hover:text-primary-dark">política de privacidad</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer simplificado -->
        <footer class="bg-gray-800 text-white py-8 mt-12">
            <div class="container mx-auto px-6">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="mb-4 md:mb-0">
                        <div class="text-2xl font-bold">
                            <span class="text-primary-light">Psy</span><span class="text-secondary-light">Care</span>
                        </div>
                        <p class="text-gray-300 text-sm mt-2">
                            © 2023 PsyCare. Todos los derechos reservados.
                        </p>
                    </div>
                    <div class="flex space-x-6">
                        <a href="#" class="text-gray-300 hover:text-white transition">
                            Términos y condiciones
                        </a>
                        <a href="#" class="text-gray-300 hover:text-white transition">
                            Política de privacidad
                        </a>
                        <a href="/contacto" class="text-gray-300 hover:text-white transition">
                            Contacto
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Usuario simulado para mostrar/ocultar funcionalidades admin
const isAdmin = ref(true);
const isProfessional = ref(true);

// Filtros y búsqueda
const filters = ref({
    category: "",
    author: "",
});
const searchQuery = ref("");
const newsletterEmail = ref("");

// Artículo destacado
const featuredArticle = ref({
    id: 1,
    title: "Cómo manejar la ansiedad en tiempos de incertidumbre",
    slug: "manejar-ansiedad-incertidumbre",
    excerpt:
        "La ansiedad es una respuesta natural ante situaciones de incertidumbre, pero puede convertirse en un problema cuando interfiere con nuestra vida diaria. Aquí te mostramos técnicas efectivas para manejarla.",
    content: "",
    image: "/placeholder.svg?height=400&width=600",
    category: "Ansiedad",
    date: "15 de marzo, 2023",
    author: {
        name: "Dra. María García",
        role: "Psicóloga Clínica",
        avatar: "/placeholder.svg?height=50&width=50",
    },
});

// Lista de artículos
const articles = ref([
    {
        id: 2,
        title: "Signos tempranos de depresión que no debes ignorar",
        slug: "signos-tempranos-depresion",
        excerpt:
            "Reconocer los signos tempranos de depresión puede ser crucial para buscar ayuda a tiempo. En este artículo, exploramos los indicadores que podrían señalar un problema más serio.",
        content: "",
        image: "/placeholder.svg?height=300&width=500",
        category: "Depresión",
        date: "10 de marzo, 2023",
        author: {
            name: "Dr. Carlos Rodríguez",
            role: "Psiquiatra",
            avatar: "/placeholder.svg?height=50&width=50",
        },
    },
    {
        id: 3,
        title: "Estrategias efectivas para mejorar tu autoestima",
        slug: "estrategias-mejorar-autoestima",
        excerpt:
            "La autoestima saludable es fundamental para nuestro bienestar mental. Descubre prácticas cotidianas que pueden ayudarte a construir y mantener una imagen positiva de ti mismo.",
        content: "",
        image: "/placeholder.svg?height=300&width=500",
        category: "Autoestima",
        date: "5 de marzo, 2023",
        author: {
            name: "Dra. Ana Martínez",
            role: "Psicóloga",
            avatar: "/placeholder.svg?height=50&width=50",
        },
    },
    {
        id: 4,
        title: "El impacto del estrés crónico en tu salud física",
        slug: "impacto-estres-cronico-salud",
        excerpt:
            "El estrés prolongado no solo afecta tu bienestar mental, sino que también puede tener consecuencias graves para tu salud física. Aprende a identificar los síntomas y cómo abordarlo.",
        content: "",
        image: "/placeholder.svg?height=300&width=500",
        category: "Estrés",
        date: "1 de marzo, 2023",
        author: {
            name: "Dr. Javier López",
            role: "Médico Psiquiatra",
            avatar: "/placeholder.svg?height=50&width=50",
        },
    },
    {
        id: 5,
        title: "Cómo comunicarte mejor en relaciones interpersonales",
        slug: "comunicacion-relaciones-interpersonales",
        excerpt:
            "La comunicación efectiva es la base de relaciones saludables. Este artículo te ofrece herramientas para mejorar tu forma de expresarte y escuchar a los demás.",
        content: "",
        image: "/placeholder.svg?height=300&width=500",
        category: "Relaciones",
        date: "25 de febrero, 2023",
        author: {
            name: "Dra. María García",
            role: "Psicóloga Clínica",
            avatar: "/placeholder.svg?height=50&width=50",
        },
    },
    {
        id: 6,
        title: "Trauma: reconocerlo y comenzar el proceso de sanación",
        slug: "trauma-reconocer-proceso-sanacion",
        excerpt:
            "El trauma puede manifestarse de diversas formas y afectar nuestra vida de maneras que quizás no reconocemos. Aquí te guiamos en los primeros pasos hacia la recuperación.",
        content: "",
        image: "/placeholder.svg?height=300&width=500",
        category: "Trauma",
        date: "20 de febrero, 2023",
        author: {
            name: "Dr. Carlos Rodríguez",
            role: "Psiquiatra",
            avatar: "/placeholder.svg?height=50&width=50",
        },
    },
]);

// Total de artículos (simulando que hay más páginas)
const totalArticles = ref(24);

// Filtrar artículos según los criterios de búsqueda
const filteredArticles = computed(() => {
    return articles.value.filter((article) => {
        // Filtrar por categoría
        if (
            filters.value.category &&
            article.category.toLowerCase() !== filters.value.category
        ) {
            return false;
        }

        // Filtrar por autor
        if (filters.value.author) {
            const authorSlug = article.author.name.toLowerCase().replace(/\s+/g, "-");
            if (authorSlug !== filters.value.author) {
                return false;
            }
        }

        // Filtrar por término de búsqueda
        if (searchQuery.value) {
            const query = searchQuery.value.toLowerCase();
            return (
                article.title.toLowerCase().includes(query) ||
                article.excerpt.toLowerCase().includes(query) ||
                article.category.toLowerCase().includes(query) ||
                article.author.name.toLowerCase().includes(query)
            );
        }

        return true;
    });
});

// Resetear filtros
const resetFilters = () => {
    filters.value = {
        category: "",
        author: "",
    };
    searchQuery.value = "";
};

// Suscribirse al newsletter
const subscribeNewsletter = () => {
    console.log("Suscripción al newsletter:", newsletterEmail.value);
    alert("¡Gracias por suscribirte a nuestro newsletter!");
    newsletterEmail.value = "";
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

.bg-primary-light {
    background-color: rgb(var(--color-primary-light));
}

.text-primary {
    color: rgb(var(--color-primary));
}

.text-secondary {
    color: rgb(var(--color-secondary));
}

.text-primary-light {
    color: rgb(var(--color-primary-light));
}

.text-secondary-light {
    color: rgb(var(--color-secondary-light));
}

.hover\:bg-primary-dark:hover {
    background-color: rgb(var(--color-primary-dark));
}

.hover\:text-primary:hover {
    color: rgb(var(--color-primary));
}

.hover\:text-primary-dark:hover {
    color: rgb(var(--color-primary-dark));
}

.focus\:ring-primary:focus {
    --tw-ring-color: rgb(var(--color-primary));
}

.focus\:border-primary:focus {
    border-color: rgb(var(--color-primary));
}

.border-primary {
    border-color: rgb(var(--color-primary));
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.transition {
    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
        backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
</style>