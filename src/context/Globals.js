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
                description: '',
                source: '',
            },
            {
                title: 'kexp-react',
                image: '',
                description: '',
                url: 'kexp-react.jacob-jordan.me',
                source: '',
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
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            `,
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
            `,
            bullets: [
                `front-end developer responsible for maintaining a web-based application used by health care specialists to manage and message RxWell users`,
                `primary front-end developer responsible for rewriting a legacy web application from AngularJS to Angular 14.
                 This application is a CMS used by health care specialists to create and manage content for the RxWell mobile application `,
                `used Azure DevOps as a team to assign tasks and meet sprint goals in CI/CD manner`,
                `wrote unit tests and worked with testers to ensure that deployed software was up to a high standard and quality`,
                `worked efficiently and productively in a remote employment setting while also effectively communicating with colleagues though either voice or text`,
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
                after this was successfully completed, i wrote software that converted and migrated multiple ms access files into the newly installed asset tracking system
            `,
            skills: [
                'c# '
            ],
            href: 'https://www.amarillohcc.com/members/1073/affiliated-foods-inc-2/',
        },
    ],
};

export default Globals;
