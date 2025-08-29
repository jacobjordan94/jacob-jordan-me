const Globals = {
    contact: {
        phone: {
            href: 'tel:+14327709334',
            text: '+1 432-770-9334'
        },
        email: {
            href: 'mailto:jacobjordan94@live.com',
            text: 'jacobjordan94@live.com',
        },
        discord: {
            href: 'https://discord.com/users/278942049917468684',
            text: 'jorcob_',
        },
        linkedin: {
            href: 'https://www.linkedin.com/in/jacob-jordan-0ab56061/',
            text: 'linkedin',
        },
    },
    // todo - more skills
    skills: [
        'javascript', 'typescript', 'react', 'angular', 'vue', 'tailwind', 'bash', 'linux', 
        'ubuntu', 'macOS', 'windows', 'arch linux', 'portainer', 'docker', 'adobe photoshop', 
        'adobe premiere', 'gimp', 'paint.net', 'scss', 'vscode', 'sql', 'ionic', 'cordova', 'android studio',
        'xcode', 'node', 'nvm', 'ms teams', 'slack', 'davinci resolve', 'zsh'
    ],
    projects: {
        react: [
            {
                title: 'jacob-jordan.me',
                image: '',
                description: 'does this website count? i sure hope so.',
                source: '',
                type: 'react'
            },
            {
                title: 'kexp-react',
                image: '',
                description: '',
                url: 'kexp-react.jacob-jordan.me',
                source: '',
                type: 'react',
            }
        ],
        angular: [
    
        ],
        mobile: [

        ],
        other: [

        ]
    },
    education: {
        name: 'the university of texas permian basin',
        city: 'odessa, tx',
        degree: 'b.s. computer science; minor in mathematics',
        dates: ['8/12', '12/15'],
        awards: 'dean\'s honor roll x4; president\'s honor roll x1',
        courses: [
            'introduction to computer science i/ii',
            'information systems',
            'digital computer organization',
            'data structures',
            'c programming',
            'discrete mathematics',
            'programming languages',
            'database systems',
            'multimedia and web development',
            'introduction to game development',
            'data communications',
            'software engineering',
        ],
    },
    about: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius sit amet velit semper pharetra. Maecenas ac purus tempus massa facilisis porta eu nec tellus. 
        Nam congue dolor arcu, a hendrerit nisl molestie et. Etiam accumsan, lorem quis tincidunt condimentum, nunc lorem placerat enim, eu pretium quam nunc vel lectus. 
        In pellentesque rhoncus viverra. Nulla in nibh mauris. Aliquam ullamcorper varius dolor, eget auctor libero venenatis vitae. Vivamus vulputate nulla erat. 
        Maecenas egestas mattis euismod. Fusce fermentum enim ut fermentum pulvinar. Donec nec diam in ligula molestie lobortis a quis arcu. 
        Morbi arcu velit, mattis eget ex vel, viverra dictum magna. Maecenas dapibus metus vel sapien consectetur, placerat sollicitudin orci rutrum. 
        Proin pulvinar consectetur libero, et commodo quam. Integer sollicitudin neque nulla, eget egestas ex rhoncus sed. 
    `,
    experience: [
        { /* ........................................................ UPMC ............................................................. */
            name: 'upmc',
            location: 'pittsburgh, pa',
            position: 'sr. software engineer i',
            dates: ['6/23', '4/24'], 
            description: 'university of pittsburgh medical center (upmc) is a pennsylvania based health care provider and insurer',
            detailedDescription: `
                in june of 2023 i transferred from iq inc. to upmc where i continued work on the rxwell project
            `,
            bullets: [
                'Became certified in SAFe 5.1 (Scaled Agile Framework)',
                'Routinely updated Angular codebases to the latest version of Angular; implementing new Angular features when appropriate',
                'Participated in code reviews for Angular and Nativescript codebases',
            ],
            skills: [
                'angular', 'nativescript', 'safe 5.1'
            ],
            href: 'https://www.upmchealthplan.com/members/digital-tools/rxwell',
        },
        { /* ........................................................ IQ INC ........................................................... */
            name: 'iq inc.',
            location: 'monroeville, pa',
            position: 'software engineer iii',
            dates: ['7/22', '5/23'], 
            description: 'iq inc. is a software development and consulting company that specializes in custom software development',
            detailedDescription: `
                for my time at iq, i worked with upmc on the rxwell project
            `,
            bullets: [
                `front-end developer responsible for maintaining a web-based application used by health care specialists to manage and message RxWell users`,
                `primary front-end developer responsible for rewriting a legacy web application from AngularJS to Angular 14.
                 This application is a CMS used by health care specialists to create and manage content for the RxWell mobile application `,
                `used Azure DevOps as a team to assign tasks and meet sprint goals in CI/CD manner`,
                `wrote unit tests and worked with testers to ensure that deployed software was up to a high standard and quality`,
                `worked efficiently and productively in a remote employment setting while also effectively communicating with colleagues through either voice or text`,
            ],
            skills: [
                '', '', ''
            ],
            href: 'https://www.iq-inc.com/',
        },
        { /* ........................................................ VERTICAL LIFE .................................................... */
            name: 'vertical life llc',
            location: 'seattle, wa',
            position: 'front-end developer',
            dates: ['11/16', '9/20'], 
            description: 'vertical life llc is mobile-based startup specializing in augmented reality (ar) technologies',
            detailedDescription: `
                for most of my time at vertical life i was the sole front-end developer of an augmented reality based social media platform
            `,
            bullets: [
                `Created multiple Angular components used by other members of the front-end team`,
                `Wrote pages to be responsive to both mobile and desktop views`,
                `implemented the Clarifai API for general object-recognition as well as flagging NSFW or inappropriate content`,
                `forked the Wikitude and AR.js codebases to make modifications needed for the application`,
                `Helped integrate Google Maps into the desktop version of the application and some parts of the mobile application`,
                `Worked with the back-end developer to troubleshoot and suggest improvements to the API`,
                `Used JIRA as a team to assign tasks and meet sprint goals`,
                `Helped onboard new developers into the project`,
            ],
            skills: [
                'cordova', 'ionic', 'angular', 'wikitude', 'ar.js', 'vue'
            ],
            href: 'https://www.linkedin.com/company/vertical-life-inc.',
        },
        { /* ........................................................ AFFILIATED FOODS ................................................. */
            name: 'affiliated foods inc.',
            location: 'amarillo, tx',
            position: 'database administrator',
            dates: ['3/16', '11/16'], 
            description: 'operating in seven states, affiliated foods is a grocery distributor to over 700 stores',
            detailedDescription: `
                wasn't there too long but in my short time there i was given the responsibility of installing and helping maintain a new company-wide it ticketing / asset tracking system.
            `,
            bullets: [
                `Wrote software to convert and migrate multiple ~20 year-old Microsoft Access files into a new database`,
                `Routinely added new products and computer equipment to the database to ensure that all company property was properly accounted for`,
                `responded to it tickets`,
                `set up computers/e-mail accounts for new employees`,
                `helped other members of the IT department troubleshoot, fix, or replace servers and other colleague's computers`,
            ],
            skills: [
                'c# '
            ],
            href: 'https://www.amarillohcc.com/members/1073/affiliated-foods-inc-2/',
        },
    ],
};

export default Globals;
