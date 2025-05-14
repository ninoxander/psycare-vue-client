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
                        <a href="/blog" class="text-gray-700 hover:text-primary transition">Blog</a>
                        <a href="/hoy-me-senti" class="text-primary font-medium transition">Hoy me sentí</a>
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
        <div class="bg-primary-light py-12">
            <div class="container mx-auto px-6">
                <h1 class="text-3xl md:text-4xl font-bold text-center text-gray-800">Hoy me sentí...</h1>
                <p class="mt-4 text-lg text-center text-gray-600 max-w-2xl mx-auto">
                    Registra tus emociones diarias para llevar un seguimiento de tu bienestar emocional.
                    Esta información puede ser compartida con tu profesional de salud mental si así lo deseas.
                </p>
            </div>
        </div>

        <!-- Contenido principal -->
        <div class="container mx-auto px-6 py-12">
            <div class="max-w-3xl mx-auto">
                <!-- Formulario de entrada diaria -->
                <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <div class="mb-6">
                        <div class="flex items-center justify-between mb-2">
                            <h2 class="text-xl font-semibold text-gray-800">¿Cómo te sientes hoy?</h2>
                            <span class="text-sm text-gray-500">{{ currentDate }}</span>
                        </div>

                        <!-- Selector de nivel emocional -->
                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Intensidad de tu emoción</label>
                            <div class="flex items-center justify-between">
                                <div class="flex space-x-4">
                                    <button v-for="level in 5" :key="level" @click="emotionLevel = level" :class="[
                                        'w-10 h-10 rounded-full flex items-center justify-center transition-colors',
                                        emotionLevel === level
                                            ? 'bg-primary text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    ]">
                                        {{ level }}
                                    </button>
                                </div>
                                <div class="text-sm text-gray-500">
                                    {{ getEmotionLevelText() }}
                                </div>
                            </div>
                        </div>

                        <!-- Área de texto principal -->
                        <div class="mb-6">
                            <label for="emotion-text" class="block text-sm font-medium text-gray-700 mb-2">
                                Describe cómo te sientes hoy
                            </label>
                            <textarea id="emotion-text" v-model="emotionText" rows="5" placeholder="Hoy me sentí..."
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                            <div class="mt-1 text-xs text-gray-500 flex justify-between">
                                <span>Mínimo 10 caracteres</span>
                                <span>{{ emotionText.length }} / 500</span>
                            </div>
                        </div>

                        <!-- Etiquetas de emociones -->
                        <div class="mb-6">
                            <label for="emotion-tags" class="block text-sm font-medium text-gray-700 mb-2">
                                Etiquetas de emociones
                            </label>
                            <div class="flex items-center">
                                <input id="emotion-tags" type="text" v-model="newTag" @keydown.enter.prevent="addTag"
                                    placeholder="Añade una emoción y presiona Enter"
                                    class="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                                <button @click="addTag"
                                    class="ml-2 px-3 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                    Añadir
                                </button>
                            </div>

                            <!-- Sugerencias de etiquetas -->
                            <div class="mt-2 flex flex-wrap gap-2">
                                <button v-for="suggestion in tagSuggestions" :key="suggestion"
                                    @click="addSuggestedTag(suggestion)"
                                    class="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
                                    {{ suggestion }}
                                </button>
                            </div>

                            <!-- Etiquetas seleccionadas -->
                            <div v-if="tags.length > 0" class="mt-3 flex flex-wrap gap-2">
                                <div v-for="(tag, index) in tags" :key="index"
                                    class="px-3 py-1 bg-primary-light text-primary rounded-full flex items-center">
                                    <span>{{ tag }}</span>
                                    <button @click="removeTag(index)" class="ml-1 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Opciones adicionales -->
                        <div class="mb-6 space-y-3">
                            <div class="flex items-center">
                                <input id="share-professional" type="checkbox" v-model="shareWithProfessional"
                                    class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                                <label for="share-professional" class="ml-2 text-sm text-gray-700">
                                    Compartir con mi profesional de salud mental
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="reminder" type="checkbox" v-model="setReminder"
                                    class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                                <label for="reminder" class="ml-2 text-sm text-gray-700">
                                    Recordarme registrar mis emociones mañana
                                </label>
                            </div>
                        </div>

                        <!-- Botones de acción -->
                        <div class="flex justify-end space-x-3">
                            <button @click="resetForm"
                                class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                Cancelar
                            </button>
                            <button @click="saveEmotion" :disabled="!isFormValid"
                                class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed">
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Entradas recientes -->
                <div class="mt-12">
                    <h2 class="text-xl font-semibold text-gray-800 mb-6">Tus entradas recientes</h2>

                    <div v-if="recentEntries.length > 0" class="space-y-4">
                        <div v-for="(entry, index) in recentEntries" :key="index"
                            class="bg-white rounded-lg shadow-md p-6">
                            <div class="flex justify-between items-start">
                                <div>
                                    <div class="flex items-center">
                                        <span class="text-sm font-medium text-gray-800">{{ entry.date }}</span>
                                        <div class="ml-3 flex space-x-1">
                                            <span v-for="(tag, tagIndex) in entry.tags" :key="tagIndex"
                                                class="px-2 py-0.5 text-xs bg-primary-light text-primary rounded-full">
                                                {{ tag }}
                                            </span>
                                        </div>
                                    </div>
                                    <p class="mt-2 text-gray-600">{{ entry.text }}</p>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div
                                        class="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white text-sm font-medium">
                                        {{ entry.level }}
                                    </div>
                                    <span class="mt-1 text-xs text-gray-500">Nivel</span>
                                </div>
                            </div>
                            <div class="mt-4 flex justify-between items-center">
                                <div class="text-xs text-gray-500">
                                    <span v-if="entry.sharedWithProfessional" class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                        </svg>
                                        Compartido con profesional
                                    </span>
                                </div>
                                <div class="flex space-x-2">
                                    <button class="text-gray-500 hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button class="text-gray-500 hover:text-red-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-else class="bg-white rounded-lg shadow-md p-8 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 class="mt-2 text-lg font-medium text-gray-900">No hay entradas recientes</h3>
                        <p class="mt-1 text-gray-500">
                            Comienza a registrar tus emociones diarias para ver tu historial aquí.
                        </p>
                    </div>
                </div>

                <!-- Estadísticas y patrones -->
                <div class="mt-12 bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Tus patrones emocionales</h2>
                    <p class="text-gray-600 mb-6">
                        Aquí podrás ver patrones y tendencias en tus emociones a lo largo del tiempo.
                        Registra tus emociones regularmente para obtener información más precisa.
                    </p>

                    <div class="flex justify-center">
                        <div class="bg-gray-100 rounded-lg p-8 text-center w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <p class="mt-2 text-gray-500">
                                Las estadísticas estarán disponibles después de registrar al menos 5 entradas.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Consejos y recursos -->
                <div class="mt-12">
                    <h2 class="text-xl font-semibold text-gray-800 mb-6">Recursos para el bienestar emocional</h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <div class="p-6">
                                <h3 class="text-lg font-medium text-gray-800 mb-2">Técnicas de respiración</h3>
                                <p class="text-gray-600 mb-4">
                                    Aprende técnicas de respiración que pueden ayudarte a manejar momentos de estrés o
                                    ansiedad.
                                </p>
                                <a href="#" class="text-primary hover:text-primary-dark font-medium">
                                    Ver más <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <div class="p-6">
                                <h3 class="text-lg font-medium text-gray-800 mb-2">Ejercicios de mindfulness</h3>
                                <p class="text-gray-600 mb-4">
                                    Descubre cómo la práctica de mindfulness puede ayudarte a conectar con el momento
                                    presente.
                                </p>
                                <a href="#" class="text-primary hover:text-primary-dark font-medium">
                                    Ver más <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
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
import { ref, computed } from 'vue';

// Fecha actual
const currentDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Estado del formulario
const emotionText = ref('');
const emotionLevel = ref(3);
const newTag = ref('');
const tags = ref([]);
const shareWithProfessional = ref(false);
const setReminder = ref(false);

// Sugerencias de etiquetas
const tagSuggestions = [
    'Feliz', 'Triste', 'Ansioso', 'Tranquilo', 'Estresado',
    'Motivado', 'Cansado', 'Frustrado', 'Agradecido', 'Confundido'
];

// Entradas recientes (simuladas)
const recentEntries = ref([
    {
        date: 'Ayer, 14 de marzo, 2023',
        text: 'Hoy me sentí bastante tranquilo. La meditación de la mañana me ayudó a mantener la calma durante una reunión de trabajo que normalmente me causaría estrés.',
        level: 4,
        tags: ['Tranquilo', 'Relajado', 'Productivo'],
        sharedWithProfessional: true
    },
    {
        date: '13 de marzo, 2023',
        text: 'Tuve un día difícil con muchas preocupaciones sobre el proyecto en el trabajo. Me costó concentrarme y sentí mucha presión.',
        level: 2,
        tags: ['Estresado', 'Preocupado'],
        sharedWithProfessional: true
    },
    {
        date: '10 de marzo, 2023',
        text: 'Hoy fue un gran día. Recibí buenas noticias sobre mi ascenso y celebré con amigos. Me siento muy agradecido por las oportunidades que estoy teniendo.',
        level: 5,
        tags: ['Feliz', 'Agradecido', 'Emocionado'],
        sharedWithProfessional: false
    }
]);

// Validación del formulario
const isFormValid = computed(() => {
    return emotionText.value.length >= 10 && tags.value.length > 0;
});

// Métodos
const getEmotionLevelText = () => {
    const levels = [
        'Muy bajo',
        'Bajo',
        'Neutral',
        'Alto',
        'Muy alto'
    ];
    return levels[emotionLevel.value - 1];
};

const addTag = () => {
    if (newTag.value.trim() && !tags.value.includes(newTag.value.trim())) {
        tags.value.push(newTag.value.trim());
        newTag.value = '';
    }
};

const addSuggestedTag = (tag) => {
    if (!tags.value.includes(tag)) {
        tags.value.push(tag);
    }
};

const removeTag = (index) => {
    tags.value.splice(index, 1);
};

const resetForm = () => {
    emotionText.value = '';
    emotionLevel.value = 3;
    newTag.value = '';
    tags.value = [];
    shareWithProfessional.value = false;
    setReminder.value = false;
};

const saveEmotion = () => {
    if (!isFormValid.value) return;

    // Crear nueva entrada
    const newEntry = {
        date: 'Hoy, ' + new Date().toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }),
        text: emotionText.value,
        level: emotionLevel.value,
        tags: [...tags.value],
        sharedWithProfessional: shareWithProfessional.value
    };

    // Añadir a entradas recientes
    recentEntries.value.unshift(newEntry);

    // Mostrar mensaje de éxito
    alert('Tu entrada ha sido guardada correctamente.');

    // Resetear formulario
    resetForm();
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

.transition {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
</style>