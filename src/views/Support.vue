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
        <div class="bg-primary-light py-12">
            <div class="container mx-auto px-6">
                <h1 class="text-3xl md:text-4xl font-bold text-center text-gray-800">Contacta a Soporte</h1>
                <p class="mt-4 text-lg text-center text-gray-600 max-w-2xl mx-auto">
                    Estamos aquí para ayudarte. Completa el formulario a continuación y nuestro equipo se pondrá en
                    contacto contigo lo antes posible.
                </p>
            </div>
        </div>

        <!-- Contenido principal -->
        <div class="container mx-auto px-6 py-12">
            <div class="max-w-3xl mx-auto">
                <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <form @submit.prevent="submitForm">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                                    Nombre completo
                                </label>
                                <input id="name" type="text" v-model="form.name" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                                    Correo electrónico
                                </label>
                                <input id="email" type="email" v-model="form.email" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                        </div>

                        <div class="mt-6">
                            <label for="userType" class="block text-sm font-medium text-gray-700 mb-1">
                                Tipo de usuario
                            </label>
                            <select id="userType" v-model="form.userType" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                                <option value="">Selecciona una opción</option>
                                <option value="patient">Paciente</option>
                                <option value="professional">Profesional</option>
                                <option value="visitor">Visitante</option>
                            </select>
                        </div>

                        <div class="mt-6">
                            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">
                                Asunto
                            </label>
                            <select id="subject" v-model="form.subject" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                                <option value="">Selecciona una opción</option>
                                <option value="technical">Problema técnico</option>
                                <option value="account">Gestión de cuenta</option>
                                <option value="billing">Facturación</option>
                                <option value="other">Otro</option>
                            </select>
                        </div>

                        <div class="mt-6">
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                                Mensaje
                            </label>
                            <textarea id="message" v-model="form.message" rows="5" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                        </div>

                        <div class="mt-6">
                            <label class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="terms" type="checkbox" v-model="form.termsAccepted" required
                                        class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <span class="text-gray-700">Acepto que PsyCare procese mi información de acuerdo con
                                        su <a href="#" class="text-primary hover:text-primary-dark">política de
                                            privacidad</a>.</span>
                                </div>
                            </label>
                        </div>

                        <div class="mt-6">
                            <div class="flex items-center">
                                <label for="attachment" class="mr-4 text-sm font-medium text-gray-700">
                                    ¿Deseas adjuntar un archivo?
                                </label>
                                <button type="button" @click="toggleAttachment"
                                    class="px-3 py-1 text-xs font-medium rounded-md border border-gray-300 hover:bg-gray-50">
                                    {{ showAttachment ? 'Cancelar' : 'Agregar archivo' }}
                                </button>
                            </div>

                            <div v-if="showAttachment" class="mt-3">
                                <input type="file" id="attachment" @change="handleFileUpload" class="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-medium
                      file:bg-primary-light file:text-primary
                      hover:file:bg-primary-light/90" />
                                <p class="mt-1 text-xs text-gray-500">
                                    Formatos permitidos: JPG, PNG, PDF. Tamaño máximo: 5MB.
                                </p>
                            </div>
                        </div>

                        <div v-if="formSubmitted" class="mt-6 p-4 bg-green-50 border rounded-md border-green-200">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm font-medium text-green-800">
                                        Tu mensaje ha sido enviado. Te responderemos lo antes posible.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 flex items-center justify-between">
                            <button type="button" @click="$router.back()"
                                class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                Volver
                            </button>
                            <button type="submit" :disabled="isSubmitting"
                                class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50">
                                {{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Información de contacto alternativa -->
                <div class="mt-12 bg-gray-50 rounded-lg p-6">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Otras vías de contacto</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                            <div class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 class="text-lg font-medium text-gray-800 mb-1">Email</h3>
                            <p class="text-gray-600 text-center">soporte@psycare.com</p>
                        </div>
                        <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                            <div class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 class="text-lg font-medium text-gray-800 mb-1">Teléfono</h3>
                            <p class="text-gray-600 text-center">+1 (555) 123-4567</p>
                        </div>
                        <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                            <div class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 class="text-lg font-medium text-gray-800 mb-1">Chat en vivo</h3>
                            <p class="text-gray-600 text-center">Disponible 9:00-18:00</p>
                        </div>
                    </div>
                </div>

                <!-- FAQs rápidas -->
                <div class="mt-12">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Preguntas frecuentes</h2>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div v-for="(item, index) in faqs" :key="index"
                            class="border-b border-gray-200 last:border-b-0">
                            <button @click="toggleFaq(index)"
                                class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none">
                                <span class="text-gray-800 font-medium">{{ item.question }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" :class="[
                                    'h-5 w-5 text-gray-500 transition-transform',
                                    openFaqs.includes(index) ? 'transform rotate-180' : ''
                                ]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div v-show="openFaqs.includes(index)" class="px-6 pb-4 text-gray-600">
                                <p>{{ item.answer }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 text-center">
                        <a href="/faqs" class="text-primary hover:text-primary-dark font-medium">
                            Ver todas las preguntas frecuentes
                        </a>
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
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    name: '',
    email: '',
    userType: '',
    subject: '',
    message: '',
    termsAccepted: false,
    attachment: null
});

const showAttachment = ref(false);
const formSubmitted = ref(false);
const isSubmitting = ref(false);
const openFaqs = ref([]);

const faqs = [
    {
        question: '¿En cuánto tiempo responderán a mi consulta?',
        answer: 'Normalmente respondemos a todas las consultas en un plazo de 24-48 horas hábiles. Para casos urgentes, recomendamos utilizar nuestro chat en vivo o llamar directamente a nuestro teléfono de soporte.'
    },
    {
        question: '¿Qué información debo proporcionar sobre un problema técnico?',
        answer: 'Para ayudarnos a resolver tu problema más rápido, incluye: el dispositivo y navegador que estás usando, pasos para reproducir el error, capturas de pantalla si es posible, y cualquier mensaje de error que hayas recibido.'
    },
    {
        question: '¿Cómo puedo cambiar mi plan de suscripción?',
        answer: 'Puedes cambiar tu plan de suscripción directamente desde tu dashboard en la sección "Mi cuenta" > "Suscripción". Si encuentras algún problema, contáctanos y te ayudaremos con el cambio.'
    }
];

const toggleAttachment = () => {
    showAttachment.value = !showAttachment.value;
    if (!showAttachment.value) {
        form.value.attachment = null;
    }
};

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    form.value.attachment = file;
};

const toggleFaq = (index) => {
    if (openFaqs.value.includes(index)) {
        openFaqs.value = openFaqs.value.filter(i => i !== index);
    } else {
        openFaqs.value.push(index);
    }
};

const submitForm = () => {
    isSubmitting.value = true;

    // Simulación de envío del formulario
    setTimeout(() => {
        console.log('Formulario enviado:', form.value);
        formSubmitted.value = true;
        isSubmitting.value = false;

        // Reset form
        form.value = {
            name: '',
            email: '',
            userType: '',
            subject: '',
            message: '',
            termsAccepted: false,
            attachment: null
        };
        showAttachment.value = false;

        // Scroll to success message
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }, 100);
    }, 1500);
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

.transition {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
</style>