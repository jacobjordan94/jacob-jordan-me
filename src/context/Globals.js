import { href } from "react-router";

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
        'adobe premiere', 'gimp', 'paint.net', 'scss', 'vscode',
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
    `
};

export default Globals;
