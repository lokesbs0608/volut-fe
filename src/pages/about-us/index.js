import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <section class="bg-gray-50 dark:bg-gray-900 py-16">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">About Us</h2>
                        <p class="text-lg text-gray-600 dark:text-gray-400">
                            We are dedicated to simplifying the way people connect with NGOs and organizations for volunteering opportunities.
                            Our platform makes it easy for individuals to find and apply for volunteer roles, and for organizations to
                            manage their volunteer requests efficiently.
                        </p>
                    </div>

                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                        <div class="flex flex-col md:flex-row items-center md:space-x-8">
                            <img src="https://lokeshbs.vercel.app/_next/image?url=%2Fstatic%2Fimages%2FSasyas.jpeg&w=256&q=75" alt="Janav B S" class="w-32 h-32 rounded-full mb-4 md:mb-0 md:w-48 md:h-48 object-cover" />
                            <div class="text-center md:text-left">
                                <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Janav B S</h3>
                                <p class="text-lg text-gray-600 dark:text-gray-400">Full Stack Developer with 3 years of experience</p>
                                <p class="mt-4 text-gray-700 dark:text-gray-300">
                                    With a passion for connecting people and organizations, I am committed to improving the way volunteers find and
                                    engage with NGOs. Our mission is to bridge the gap between enthusiastic volunteers and organizations in need,
                                    making the process seamless and impactful.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AboutUs
