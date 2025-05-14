<template>
    <div class="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <!-- Navbar -->
        <nav class="container mx-auto px-6 py-4">
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
                    <a href="#" class="text-gray-700 hover:text-primary transition">Profesionales</a>
                    <a href="#" class="text-gray-700 hover:text-primary transition">Contacto</a>
                </div>
                <div class="flex items-center space-x-4">
                    <a href="/login">
                        <button
                            class="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition">
                            Iniciar sesión
                        </button>
                    </a>
                    <button
                        class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark transition">
                        Registrarse
                    </button>
                </div>
                <div class="md:hidden">
                    <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700">
                        <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Mobile Menu -->
            <div v-if="mobileMenuOpen" class="md:hidden mt-4 space-y-4">
                <a href="#" class="block text-gray-700 hover:text-primary transition">Inicio</a>
                <a href="#" class="block text-gray-700 hover:text-primary transition">Blog</a>
                <a href="#" class="block text-gray-700 hover:text-primary transition">Hoy me sentí</a>
                <a href="#" class="block text-gray-700 hover:text-primary transition">Profesionales</a>
                <a href="#" class="block text-gray-700 hover:text-primary transition">Contacto</a>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="container mx-auto px-6 py-16 md:py-24">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-12 md:mb-0">
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                        Conectando <span class="text-primary">pacientes</span> con <span
                            class="text-secondary">profesionales</span>
                    </h1>
                    <p class="text-lg text-gray-600 mb-8">
                        PsyCare es una plataforma que facilita el acceso a la salud mental, conectando a pacientes con
                        profesionales calificados en un entorno seguro y confidencial.
                    </p>
                    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button
                            class="px-8 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-primary-dark transition">
                            Buscar ayuda
                        </button>
                        <button
                            class="px-8 py-3 text-base font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition">
                            Soy profesional
                        </button>
                    </div>
                </div>
                <div class="md:w-1/2">

                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="bg-gray-50 py-16">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros servicios</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Blog Feature -->
                    <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <div
                            class="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 text-center mb-4">Blog de Salud Mental</h3>
                        <p class="text-gray-600 text-center">
                            Accede a artículos escritos por profesionales sobre temas de salud mental, bienestar
                            emocional y consejos prácticos.
                        </p>
                    </div>

                    <!-- Diary Feature -->
                    <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <div
                            class="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mb-6 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 text-center mb-4">Hoy me sentí</h3>
                        <p class="text-gray-600 text-center">
                            Un diario personal donde puedes registrar tus emociones y compartirlas con tu profesional de
                            confianza para un mejor seguimiento.
                        </p>
                    </div>

                    <!-- Dashboard Feature -->
                    <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <div
                            class="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 text-center mb-4">Dashboard Personalizado</h3>
                        <p class="text-gray-600 text-center">
                            Visualiza tu progreso, gestiona tus citas y accede a recursos personalizados según tus
                            necesidades específicas.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- For Professionals Section -->
        <section class="container mx-auto px-6 py-16">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-12 md:mb-0">

                </div>
                <div class="md:w-1/2 md:pl-12">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6">Para profesionales</h2>
                    <p class="text-lg text-gray-600 mb-6">
                        Únete a nuestra red de profesionales de la salud mental y expande tu práctica. Ofrecemos
                        herramientas para gestionar pacientes, seguimiento de progreso y más.
                    </p>
                    <ul class="space-y-4 mb-8">
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mr-2 flex-shrink-0"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-gray-600">Gestión de pacientes simplificada</span>
                        </li>
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mr-2 flex-shrink-0"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-gray-600">Acceso a diarios emocionales de pacientes</span>
                        </li>
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mr-2 flex-shrink-0"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-gray-600">Herramientas para seguimiento de progreso</span>
                        </li>
                    </ul>
                    <button
                        class="px-8 py-3 text-base font-medium text-white bg-secondary rounded-md hover:bg-secondary-dark transition">
                        Registrarme como profesional
                    </button>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="bg-gray-50 py-16">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Lo que dicen nuestros usuarios</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Testimonial 1 -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="flex items-center mb-4">
                            <div class="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-800">María G.</h4>
                                <p class="text-gray-500">Paciente</p>
                            </div>
                        </div>
                        <p class="text-gray-600 italic">
                            "PsyCare me ha ayudado a encontrar el profesional adecuado para mis necesidades. El diario
                            'Hoy me sentí' ha sido una herramienta invaluable para mi proceso terapéutico."
                        </p>
                    </div>

                    <!-- Testimonial 2 -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="flex items-center mb-4">
                            <div class="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-800">Dr. Carlos R.</h4>
                                <p class="text-gray-500">Psicólogo</p>
                            </div>
                        </div>
                        <p class="text-gray-600 italic">
                            "Como profesional, PsyCare me ha permitido ampliar mi práctica y ofrecer un mejor
                            seguimiento a mis pacientes gracias a las herramientas de monitoreo emocional."
                        </p>
                    </div>

                    <!-- Testimonial 3 -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="flex items-center mb-4">
                            <div class="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-800">Alejandra M.</h4>
                                <p class="text-gray-500">Paciente</p>
                            </div>
                        </div>
                        <p class="text-gray-600 italic">
                            "Los artículos del blog me han ayudado a entender mejor mis emociones. La plataforma es
                            intuitiva y me ha facilitado mucho el proceso de buscar ayuda profesional."
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="container mx-auto px-6 py-16">
            <div class="bg-primary rounded-lg shadow-xl p-8 md:p-12">
                <div class="text-center">
                    <h2 class="text-3xl font-bold text-white mb-6">Comienza tu camino hacia el bienestar emocional</h2>
                    <p class="text-lg text-white opacity-90 mb-8 max-w-3xl mx-auto">
                        Ya sea que busques ayuda profesional o quieras ofrecer tus servicios como especialista, PsyCare
                        es la plataforma que conecta a las personas con el apoyo que necesitan.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button
                            class="px-8 py-3 text-base font-medium text-primary bg-white rounded-md hover:bg-gray-100 transition">
                            Crear una cuenta
                        </button>
                        <button
                            class="px-8 py-3 text-base font-medium text-white border border-white rounded-md hover:bg-white hover:text-primary transition">
                            Conocer más
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-12">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4">PsyCare</h3>
                        <p class="text-gray-300">
                            Conectando pacientes con profesionales de la salud mental para un mundo emocionalmente más
                            saludable.
                        </p>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Enlaces rápidos</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-300 hover:text-white transition">Inicio</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white transition">Blog</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white transition">Hoy me sentí</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white transition">Dashboard</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Recursos</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-300 hover:text-white transition">Artículos</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white transition">Guías</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white transition">Preguntas frecuentes</a>
                            </li>
                            <li><a href="#" class="text-gray-300 hover:text-white transition">Soporte</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Contacto</h4>
                        <ul class="space-y-2">
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-300" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:info@psycare.com"
                                    class="text-gray-300 hover:text-white transition">info@psycare.com</a>
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-300" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span class="text-gray-300">+1 (555) 123-4567</span>
                            </li>
                        </ul>
                        <div class="mt-4 flex space-x-4">
                            <a href="#" class="text-gray-300 hover:text-white transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                </svg>
                            </a>
                            <a href="#" class="text-gray-300 hover:text-white transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a href="#" class="text-gray-300 hover:text-white transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p class="text-gray-300">© 2023 PsyCare. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);
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

.bg-secondary {
    background-color: rgb(var(--color-secondary));
}

.bg-secondary-dark {
    background-color: rgb(var(--color-secondary-dark));
}

.bg-secondary-light {
    background-color: rgb(var(--color-secondary-light));
}

.text-primary {
    color: rgb(var(--color-primary));
}

.text-secondary {
    color: rgb(var(--color-secondary));
}

.border-primary {
    border-color: rgb(var(--color-primary));
}

.hover\:bg-primary:hover {
    background-color: rgb(var(--color-primary));
}

.hover\:bg-primary-dark:hover {
    background-color: rgb(var(--color-primary-dark));
}

.hover\:bg-secondary-dark:hover {
    background-color: rgb(var(--color-secondary-dark));
}

.hover\:text-primary:hover {
    color: rgb(var(--color-primary));
}

.transition {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
</style>