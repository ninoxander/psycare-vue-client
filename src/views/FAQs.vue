<template>
    <div class="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <!-- Navbar (simplificado) -->
        <nav class="bg-white shadow-sm">
            <div class="container mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="text-2xl font-bold text-primary">
                            <span class="text-primary">Psy</span><span class="text-secondary">Care</span>
                        </div>
                    </div>
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="#" class="text-gray-700 hover:text-primary transition">Inicio</a>
                        <a href="#" class="text-gray-700 hover:text-primary transition">Blog</a>
                        <a href="#" class="text-gray-700 hover:text-primary transition">Hoy me sentí</a>
                        <a href="#" class="text-gray-700 hover:text-primary transition">Contacto</a>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/login" class="text-sm font-medium text-primary hover:text-primary-dark transition">
                            Iniciar sesión
                        </a>
                        <a href="/signup"
                            class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark transition">
                            Registrarse
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Header -->
        <div class="bg-primary-light py-16">
            <div class="container mx-auto px-6">
                <h1 class="text-4xl font-bold text-center text-gray-800">Preguntas Frecuentes</h1>
                <p class="mt-4 text-xl text-center text-gray-600 max-w-3xl mx-auto">
                    Encuentra respuestas a las preguntas más comunes sobre PsyCare, nuestros servicios y cómo podemos
                    ayudarte.
                </p>
            </div>
        </div>

        <!-- FAQs Section -->
        <div class="container mx-auto px-6 py-12">
            <div class="max-w-3xl mx-auto">
                <!-- Categorías de FAQs -->
                <div class="flex flex-wrap justify-center mb-12 gap-4">
                    <button v-for="(category, index) in categories" :key="index" @click="activeCategory = category"
                        :class="[
                            'px-4 py-2 rounded-full text-sm font-medium transition',
                            activeCategory === category
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        ]">
                        {{ category }}
                    </button>
                </div>

                <!-- Preguntas y respuestas -->
                <div class="space-y-6">
                    <div v-for="(faq, index) in filteredFaqs" :key="index"
                        class="bg-white rounded-lg shadow-md overflow-hidden">
                        <button @click="toggleFaq(index)"
                            class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none">
                            <span class="text-lg font-medium text-gray-800">{{ faq.question }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" :class="[
                                'h-5 w-5 transition-transform',
                                openFaqs.includes(index) ? 'transform rotate-180' : ''
                            ]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div v-show="openFaqs.includes(index)" class="px-6 pb-4 text-gray-600">
                            <p>{{ faq.answer }}</p>
                        </div>
                    </div>
                </div>

                <!-- No se encontraron resultados -->
                <div v-if="filteredFaqs.length === 0" class="text-center py-12">
                    <p class="text-gray-500">No se encontraron preguntas en esta categoría.</p>
                </div>

                <!-- Contacto adicional -->
                <div class="mt-12 bg-gray-50 rounded-lg p-6 text-center">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">¿No encontraste lo que buscabas?</h3>
                    <p class="text-gray-600 mb-6">
                        Si tienes alguna pregunta adicional, no dudes en contactarnos. Estamos aquí para ayudarte.
                    </p>
                    <a href="/contacto"
                        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition">
                        Contactar soporte
                    </a>
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
import { ref, computed } from 'vue';

const categories = ['Todas', 'Pacientes', 'Profesionales', 'Plataforma', 'Pagos'];
const activeCategory = ref('Todas');
const openFaqs = ref([]);

const faqs = [
    {
        question: '¿Qué es PsyCare?',
        answer: 'PsyCare es una plataforma que conecta a pacientes con profesionales de la salud mental. Ofrecemos herramientas como un diario emocional, blog informativo y un dashboard personalizado para mejorar la experiencia terapéutica.',
        category: 'Plataforma'
    },
    {
        question: '¿Cómo puedo registrarme como paciente?',
        answer: 'Para registrarte como paciente, haz clic en el botón "Registrarse" en la parte superior derecha de la página, completa el formulario seleccionando la opción "Paciente" y sigue las instrucciones.',
        category: 'Pacientes'
    },
    {
        question: '¿Cómo puedo registrarme como profesional?',
        answer: 'Para registrarte como profesional, haz clic en "Registrarse", selecciona la opción "Profesional" y completa el formulario. Deberás proporcionar tus credenciales profesionales para la verificación.',
        category: 'Profesionales'
    },
    {
        question: '¿Qué es "Hoy me sentí"?',
        answer: '"Hoy me sentí" es un diario emocional donde puedes registrar tus emociones diarias. Esta información puede ser compartida con tu profesional de salud mental para un mejor seguimiento de tu progreso.',
        category: 'Pacientes'
    },
    {
        question: '¿Cómo funciona el sistema de citas?',
        answer: 'Puedes programar citas directamente desde tu dashboard. Selecciona el profesional, elige una fecha y hora disponible, y confirma tu cita. Recibirás recordatorios por correo electrónico.',
        category: 'Pacientes'
    },
    {
        question: '¿Cómo gestiono mis pacientes como profesional?',
        answer: 'Como profesional, tendrás acceso a un dashboard donde podrás ver la lista de tus pacientes, su historial de citas, notas de sesiones anteriores y acceso a sus diarios emocionales si ellos lo han autorizado.',
        category: 'Profesionales'
    },
    {
        question: '¿Es segura mi información personal?',
        answer: 'Sí, la seguridad de tus datos es nuestra prioridad. Utilizamos encriptación de extremo a extremo y cumplimos con todas las regulaciones de protección de datos aplicables.',
        category: 'Plataforma'
    },
    {
        question: '¿Cuáles son los métodos de pago aceptados?',
        answer: 'Aceptamos tarjetas de crédito/débito (Visa, Mastercard, American Express), PayPal y transferencias bancarias para algunos países.',
        category: 'Pagos'
    },
    {
        question: '¿Puedo cancelar mi suscripción en cualquier momento?',
        answer: 'Sí, puedes cancelar tu suscripción en cualquier momento desde la sección "Mi cuenta" en tu dashboard. No hay penalizaciones por cancelación.',
        category: 'Pagos'
    },
    {
        question: '¿Cómo puedo contactar con soporte técnico?',
        answer: 'Puedes contactar con nuestro equipo de soporte a través del formulario de contacto en nuestra web, por correo electrónico a soporte@psycare.com o por teléfono al +1 (555) 123-4567.',
        category: 'Plataforma'
    }
];

const filteredFaqs = computed(() => {
    if (activeCategory.value === 'Todas') {
        return faqs;
    }
    return faqs.filter(faq => faq.category === activeCategory.value);
});

const toggleFaq = (index) => {
    if (openFaqs.value.includes(index)) {
        openFaqs.value = openFaqs.value.filter(i => i !== index);
    } else {
        openFaqs.value.push(index);
    }
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

.transition {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
</style>