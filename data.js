// Apps Data
const appsData = [
    {
        id: 'vr-anatomy-explorer',
        title: 'VR Anatomy Explorer',
        description: 'Immersive virtual reality experience for exploring human anatomy in 3D space with detailed organ systems.',
        longDescription: 'VR Anatomy Explorer revolutionizes medical education by providing students and professionals with an immersive 3D environment to study human anatomy. Navigate through complete organ systems, examine detailed structures, and interact with anatomical models in ways impossible with traditional textbooks. Features include guided tours, interactive quizzes, and collaborative study sessions.',
        image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg',
        icon: 'fas fa-user-md',
        tags: ['VR', 'Medical', 'Education', '3D'],
        category: 'Medical Education',
        platform: 'VR Headsets',
        releaseDate: '2024',
        downloads: '15,000+',
        rating: '4.8/5',
        downloadLinks: {
            'VR Application': [
                { platform: 'Google Drive', url: '#', icon: 'fab fa-google-drive' },
                { platform: 'Dropbox', url: '#', icon: 'fab fa-dropbox' }
            ],
            'Documentation': [
                { platform: 'Google Drive', url: '#', icon: 'fab fa-google-drive' },
                { platform: 'OneDrive', url: '#', icon: 'fab fa-microsoft' }
            ]
        },
        featured: true
    },
    {
        id: 'ar-chemistry-lab',
        title: 'AR Chemistry Lab',
        description: 'Augmented reality chemistry laboratory for safe experimentation and molecular visualization.',
        longDescription: 'Transform any space into a fully-equipped chemistry laboratory with AR Chemistry Lab. Conduct virtual experiments, visualize molecular structures in 3D, and learn chemical reactions without safety concerns. Perfect for schools with limited lab resources or for supplementing traditional chemistry education with interactive elements.',
        image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg',
        icon: 'fas fa-flask',
        tags: ['AR', 'Chemistry', 'Laboratory', 'Science'],
        category: 'Science Education',
        platform: 'Mobile & Tablet',
        releaseDate: '2024',
        downloads: '25,000+',
        rating: '4.7/5',
        downloadLinks: {
            'Mobile App': [
                { platform: 'Google Drive', url: '#', icon: 'fab fa-google-drive' },
                { platform: 'Dropbox', url: '#', icon: 'fab fa-dropbox' }
            ],
            'AR Models Pack': [
                { platform: 'OneDrive', url: '#', icon: 'fab fa-microsoft' },
                { platform: 'Google Drive', url: '#', icon: 'fab fa-google-drive' }
            ]
        },
        featured: true
    },
    {
        id: 'vr-history-walk',
        title: 'VR History Walk',
        description: 'Step into historical events and locations through immersive virtual reality experiences.',
        longDescription: 'Experience history like never before with VR History Walk. Transport yourself to ancient civilizations, witness pivotal historical moments, and explore historically accurate reconstructions of famous landmarks. Each experience is carefully researched and designed to provide educational value while maintaining historical accuracy.',
        image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg',
        icon: 'fas fa-landmark',
        tags: ['VR', 'History', 'Culture', 'Exploration'],
        category: 'History Education',
        platform: 'VR Headsets',
        releaseDate: '2024',
        downloads: '18,000+',
        rating: '4.9/5',
        downloadLinks: {
            'VR Experience': [
                { platform: 'Google Drive', url: '#', icon: 'fab fa-google-drive' },
                { platform: 'Mega', url: '#', icon: 'fas fa-cloud' }
            ],
            'Historical Assets': [
                { platform: 'Dropbox', url: '#', icon: 'fab fa-dropbox' },
                { platform: 'OneDrive', url: '#', icon: 'fab fa-microsoft' }
            ]
        },
        featured: true
    },
    {
        id: 'ar-solar-system',
        title: 'AR Solar System',
        description: 'Interactive augmented reality model of our solar system for immersive astronomy education.',
        longDescription: 'Bring the wonders of space into your classroom or home with AR Solar System. Explore planets, moons, and asteroids in stunning detail, learn about orbital mechanics, and witness astronomical phenomena through interactive simulations. Perfect for astronomy students and space enthusiasts of all ages.',
        image: 'https://images.pexels.com/photos/956999/pexels-photo-956999.jpeg',
        icon: 'fas fa-globe',
        tags: ['AR', 'Astronomy', 'Space', 'Planets'],
        category: 'Space Education',
        platform: 'Mobile & Tablet',
        releaseDate: '2024',
        downloads: 'None',
        rating: '4.6/5',
        downloadLinks: {
            'Not Yet Released': [
                { platform: 'Coming Soon', url: '#', icon: 'fas fa-hourglass-half' }
            ]
        },
        featured: false
    },
    {
        id: 'vr-math-playground',
        title: 'VR Math Playground',
        description: 'Gamified virtual reality mathematics learning environment for students of all ages.',
        longDescription: 'Make mathematics fun and engaging with VR Math Playground. Solve problems in immersive 3D environments, visualize complex mathematical concepts, and progress through gamified challenges that adapt to your skill level. From basic arithmetic to advanced calculus, learning math has never been this exciting.',
        image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg',
        icon: 'fas fa-calculator',
        tags: ['VR', 'Mathematics', 'Gaming', 'Interactive'],
        category: 'Mathematics Education',
        platform: 'VR Headsets',
        releaseDate: '2024',
        downloads: '12,000+',
        rating: '4.5/5',
        downloadLinks: {
            'VR Game': [
                { platform: 'Google Drive', url: '#', icon: 'fab fa-google-drive' },
                { platform: 'OneDrive', url: '#', icon: 'fab fa-microsoft' }
            ],
            'Math Resources': [
                { platform: 'Dropbox', url: '#', icon: 'fab fa-dropbox' }
            ]
        },
        featured: false
    },
    {
        id: 'ar-language-immersion',
        title: 'AR Language Immersion',
        description: 'Augmented reality language learning with real-world object recognition and translation.',
        longDescription: 'Immerse yourself in foreign languages with AR Language Immersion. Point your device at real-world objects to see translations, pronunciation guides, and contextual usage examples. Practice conversations with AI-powered characters in realistic scenarios and build vocabulary through interactive challenges.',
        image: 'https://images.pexels.com/photos/6238302/pexels-photo-6238302.jpeg',
        icon: 'fas fa-language',
        tags: ['AR', 'Language', 'Translation', 'AI'],
        category: 'Language Education',
        platform: 'Mobile & Tablet',
        releaseDate: '2024',
        downloads: '22,000+',
        rating: '4.4/5',
        downloadLinks: {
            'Mobile App': [
                { platform: 'Google Drive', url: '#', icon: 'fab fa-google-drive' },
                { platform: 'Dropbox', url: '#', icon: 'fab fa-dropbox' }
            ],
            'Language Packs': [
                { platform: 'OneDrive', url: '#', icon: 'fab fa-microsoft' },
                { platform: 'Mega', url: '#', icon: 'fas fa-cloud' }
            ]
        },
        featured: false
    }
];

// Developers Data
const developersData = [
    {
        id: 'sarah-chen',
        name: 'Sarah Chen',
        role: 'Lead VR Developer',
        bio: 'Sarah is a passionate VR developer with over 8 years of experience in immersive technologies. She specializes in educational VR applications and has led the development of our most popular medical and science apps.',
        longBio: 'Sarah Chen brings over 8 years of cutting-edge experience in virtual reality development to ImmersioLab. As our Lead VR Developer, she has pioneered innovative approaches to educational immersion, leading the development of award-winning applications like VR Anatomy Explorer and VR History Walk. Sarah holds a Master\'s degree in Computer Science from Stanford University and has published numerous papers on VR in education. Her passion for making learning accessible and engaging drives her to push the boundaries of what\'s possible in educational technology.',
        avatar: 'SC',
        github: 'https://github.com/sarahchen',
        linkedin: 'https://linkedin.com/in/sarahchen',
        email: 's.chen@immersiolab.com',
        phone: '+1 (555) 123-4567',
        expertise: ['Unity 3D', 'C#', 'VR SDKs', 'Educational Design']
    },
    {
        id: 'marcus-rodriguez',
        name: 'Marcus Rodriguez',
        role: 'AR Solutions Architect',
        bio: 'Marcus brings extensive experience in augmented reality and mobile development. He focuses on creating AR experiences that seamlessly blend digital content with the real world.',
        longBio: 'Marcus Rodriguez is our AR Solutions Architect, bringing a unique blend of technical expertise and creative vision to mobile augmented reality development. With 6 years of specialized experience in AR technologies, Marcus has been instrumental in developing breakthrough applications like AR Chemistry Lab and AR Solar System. He holds a Bachelor\'s degree in Software Engineering from MIT and is certified in multiple AR development platforms. Marcus is passionate about making complex scientific concepts accessible through innovative AR interfaces.',
        avatar: 'MR',
        github: 'https://github.com/marcusrodriguez',
        linkedin: 'https://linkedin.com/in/marcusrodriguez',
        email: 'm.rodriguez@immersiolab.com',
        phone: '+1 (555) 234-5678',
        expertise: ['ARKit', 'ARCore', 'Swift', 'Kotlin', 'Mobile UI/UX']
    },
    {
        id: 'emily-watson',
        name: 'Emily Watson',
        role: 'Educational Content Designer',
        bio: 'Emily combines her background in education and UX design to create engaging learning experiences. She ensures all our apps meet pedagogical standards while remaining fun and accessible.',
        longBio: 'Emily Watson serves as our Educational Content Designer, bringing over 10 years of combined experience in education and user experience design. With a Master\'s in Educational Technology and a background as a classroom teacher, Emily understands the unique challenges of modern education. She works closely with educators and subject matter experts to ensure our applications not only entertain but genuinely enhance learning outcomes. Emily\'s research on gamification in education has been featured in leading educational journals.',
        avatar: 'EW',
        github: 'https://github.com/emilywatson',
        linkedin: 'https://linkedin.com/in/emilywatson',
        email: 'e.watson@immersiolab.com',
        phone: '+1 (555) 345-6789',
        expertise: ['Educational Design', 'UX Research', 'Learning Analytics', 'Accessibility']
    },
    {
        id: 'david-kim',
        name: 'David Kim',
        role: 'Technical Lead',
        bio: 'David oversees our technical architecture and ensures scalable, maintainable code across all projects. His expertise in cloud technologies keeps our apps running smoothly.',
        longBio: 'David Kim leads our technical architecture as Technical Lead, bringing 12 years of full-stack development and cloud infrastructure experience to ImmersioLab. With expertise spanning from backend systems to deployment automation, David ensures our applications are built on solid foundations that can scale with our growing user base. He holds certifications in AWS and Azure, and has previously worked at major tech companies optimizing high-traffic applications. David is passionate about clean code, system reliability, and mentoring junior developers.',
        avatar: 'DK',
        github: 'https://github.com/davidkim',
        linkedin: 'https://linkedin.com/in/davidkim',
        email: 'd.kim@immersiolab.com',
        phone: '+1 (555) 456-7890',
        expertise: ['Node.js', 'Python', 'AWS', 'DevOps', 'System Architecture']
    }
];

// Export data for use in other scripts
window.appsData = appsData;
window.developersData = developersData;