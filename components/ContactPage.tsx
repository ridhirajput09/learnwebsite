import React from 'react';

const EmailIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const MapPinIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ContactCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    contactInfo: string;
    href: string;
}> = ({ icon, title, description, contactInfo, href }) => {
    return (
        <div className="dark:bg-slate-900/50 bg-white/50 backdrop-blur-lg gradient-border-card p-8 rounded-2xl text-center flex flex-col items-center">
            <div className="bg-indigo-100 text-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">{description}</p>
            <a href={href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-semibold text-indigo-500 dark:text-indigo-400 hover:underline transition-all transform hover:scale-105">
                {contactInfo}
            </a>
        </div>
    );
};


const ContactPage: React.FC = () => {
    return (
        <section className="pt-32 pb-24">
             <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                        Let's <span className="gradient-text">Connect</span>
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl text-slate-600 dark:text-slate-300">
                        Have questions or want to learn more? We're here to help you on your journey.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ContactCard
                        icon={<EmailIcon />}
                        title="Email Us"
                        description="For general inquiries, partnerships, or feedback, please email our team."
                        contactInfo="pradeep991733@gmail.com"
                        href="mailto:pradeep991733@gmail.com"
                    />
                    <ContactCard
                        icon={<PhoneIcon />}
                        title="Get connect"
                        description="Give us a call for immediate assistance or to learn more about our programs."
                        contactInfo="9917335000"
                        href="tel:9917335000"
                    />
                     <ContactCard
                        icon={<MapPinIcon />}
                        title="Our Location"
                        description="Find us on the map for in-person inquiries or to see where we're based."
                        contactInfo="View on Google Maps"
                        href="https://maps.app.goo.gl/czawkWGSNqCddSTi9?g_st=ac"
                    />
                </div>
                
                <div className="mt-24 text-center">
                     <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Follow Our Journey</h2>
                     <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                        Stay up-to-date with our latest news, course launches, and community stories.
                     </p>
                     <div className="mt-8 flex justify-center items-center space-x-8">
                        <a href="https://wa.me/919917335000" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors transform hover:scale-110">
                            <WhatsAppIcon />
                            <span className="sr-only">WhatsApp</span>
                        </a>
                        <a href="https://www.instagram.com/pradeep991733?igsh=Z3Y2eHNudnU0NGx3" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors transform hover:scale-110">
                            <InstagramIcon />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="https://www.facebook.com/thakur.shaabh.6682" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors transform hover:scale-110">
                            <FacebookIcon />
                            <span className="sr-only">Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

const InstagramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const FacebookIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

export default ContactPage;