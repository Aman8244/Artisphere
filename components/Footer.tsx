import React from 'react'

const Footer = () => {
    return (
        <footer>
            <section className="bg-black">
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    {/* <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                About
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Blog
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Team
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Pricing
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Contact
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Terms
                            </a>
                        </div>
                    </nav> */}
                    <div className="flex justify-center mt-8 space-x-6">
                        <a href="https://www.instagram.com/__a_man_7.0/" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                            </svg>
                        </a>

                        <a href="https://github.com/Aman8244" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/aman-singh-433240225/" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.23 0zM7.09 20.45H3.58V9H7.1v11.45zM5.34 7.41a2.12 2.12 0 110-4.24 2.12 2.12 0 010 4.24zM20.45 20.45h-3.51v-5.82c0-1.39-.02-3.17-1.93-3.17-1.94 0-2.24 1.52-2.24 3.07v5.92H9.26V9h3.37v1.56h.05c.47-.89 1.63-1.83 3.35-1.83 3.58 0 4.24 2.36 4.24 5.44v6.28z" />
                            </svg>
                        </a>
                    </div>
                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        © 2024 Aman Singh, Inc. All rights reserved.
                    </p>
                </div>
            </section>

        </footer>
    )
}

export default Footer