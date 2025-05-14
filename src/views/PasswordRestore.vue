<template>
    <div class="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="flex justify-center">
                <div class="text-3xl font-bold text-center">
                    <span class="text-primary">Psy</span><span class="text-secondary">Care</span>
                </div>
            </div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-800">
                Recuperar contraseña
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
                <div v-if="!emailSent">
                    <form class="space-y-6" @submit.prevent="handleResetPassword">
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">
                                Correo electrónico
                            </label>
                            <div class="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" required
                                    v-model="email"
                                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition">
                                Enviar enlace de recuperación
                            </button>
                        </div>
                    </form>
                </div>

                <div v-else class="text-center">
                    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-light mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Correo enviado</h3>
                    <div class="mt-2">
                        <p class="text-sm text-gray-500">
                            Hemos enviado un enlace de recuperación a <strong>{{ email }}</strong>. Por favor, revisa tu
                            bandeja de entrada y sigue las instrucciones.
                        </p>
                    </div>
                    <div class="mt-6">
                        <button @click="resetForm"
                            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition">
                            Volver a intentar
                        </button>
                    </div>
                </div>

                <div class="mt-6">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-white text-gray-500">
                                O
                            </span>
                        </div>
                    </div>

                    <div class="mt-6 flex justify-center">
                        <a href="/login" class="font-medium text-primary hover:text-primary-dark transition">
                            Volver a iniciar sesión
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const emailSent = ref(false);

const handleResetPassword = () => {
    // Aquí iría la lógica para enviar el correo de recuperación
    console.log('Recuperación solicitada para:', email.value);
    emailSent.value = true;
};

const resetForm = () => {
    email.value = '';
    emailSent.value = false;
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

.hover\:bg-primary-dark:hover {
    background-color: rgb(var(--color-primary-dark));
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