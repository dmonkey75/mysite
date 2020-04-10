
import Project1 from '../images/project1.png';
//import Project2 from './../../images/project2.png';
import Project2 from '../images/project2.png';

export interface IProject {
    description: string;
    tools: string;
    url: string;
    github: string;
    image: string;
}

export const ProjectList: IProject[] = [{
    description: 'A three pages websiite highlights  the works of the tattoo artist. Implemented minimal animations to capture visitors attention.',
    tools: 'ReactJS | Redux | GSAP',
    url: ' https://tattooshop.com',
    github: 'https://github.com/mac/tattoshop',
    image: Project1,
}, {
    description: '.Net Core project hosted in azure web app service. The project serves as backend emailing service for client. Interagted with Google and Facebook for OAuth 2 authentication.',
    tools: '.Net Core | C# | EF | Azure | Web App',
    url: 'https://mac-web-api-azap.azurewebsites.net',
    github: 'https://github.com/mac/messaging-api',
    image: Project2,
}];

export interface ISkill {
    name: string,
    rating: number
}

export interface ISkills {
    items: ISkill[],
}

export interface IExperience {
    period: string,
    role: string,
    company: string,
    address: string,
    description: string,
    items: string[]
}

// {
//     period: '',
//     role: '',
//     company: '',
//     address: '',
//     description: '',
//     items: ['']
// },

export const ExperienceList: IExperience[] = [
    {
        period: 'Nov 23, 2015 - Present',
        role: 'Systems Developer',
        company: 'Grundfos IS Operation Centre Philippines',
        address: '26F Cybergate Beta Buillding, Topaz Road, Ortigas, Pasig City, Philippines',
        description: 'Develop cloud based solutions with microsoft tools and technologies. Develop frontend/backend applications. Building React applications and Restful API’s. Work closely with consultants, project managers and project owners.',
        items: ["Successfully developed and deployed restful api's to serve pump firmwares.",
            "Successfully implemented a feature to secure license keys for firmares.",
            "Designed solution how to properly handle firmware updates based from pump configurations.",
            "Assigned at company's office in Indiana, US in 2016 & 2018 for short term assignment to take over the support  for legacy applications and develop new solutions.",
            "Assigned at company's headquarters in Denmark in 2017 & 2019 for short term assignment to take over and to kick off new azure based projects.",
            "Successfully delivered projects on specified budget and with no major issues.",
            "Received 100% satisfaction rate from project managers that I worked with.",
            "Done a smooth project transition when moved to new department IoT. This with the help of technical document and implementing readable/maintainable codes.",
        ]
    },
    {
        period: 'Sep 15, 2014 - Nov 30, 2015',
        role: 'Software Engineer',
        company: 'FactSet Philippines, Inc. ',
        address: '8F Commerce and Industry Plaza 1030 Campus Avenue cor. Park Avenue McKinley Hill, Taguig City, Philippines ',
        description: 'Develop WPF applications and generic application components.',
        items: ["Develop custom controls that can be integrated to other projects.",
            "Successfully developed WPF MVVM projects with implementation of organization coding standards.",
            "Successfully rewrite foxpro application to WPF in C#.Net",
            "Have done support for critical issues in production."]
    },
    {
        period: 'May 05, 2012 - Sep 12, 2014',
        role: 'Programmer/Analyst ',
        company: 'Manulife Business Processing Services',
        address: 'Manulife Building, UP North Science & Technology Park, Commonwealth Avenue, Diliman, Quezon City, Philippines',
        description: 'Develop new and maintain existing applications. Follow coding standards and procedures on Planning, Requirements, Design, Implementation, Deployment and Maintenance. Use C#.Net and VB.Net. Windows Based and Web Based Application. Use of Entity Framework and implement a 3-Tier architecture.',
        items: ['Successfully developed and delivered VB6 applications for clients.',
            "Initiated development from VB6 to C#.Net.",
            "Successfully implemented coding standard for the team.",
            "Selected to join the group of developers to develop company's HR system to handle application process.",
            "Received Top Performer Award during company's annual Performers Night event in July 2014."]
    },
    {
        period: 'July 1, 2008 - April 30, 2012',
        role: 'Systems Developer',
        company: 'Kinetique Systems, Inc.',
        address: 'Plaza de Luisa, R.Magsaysay, Davao City, Philippines',
        description: 'Develop windows-based application. Worked with a team and build libraries. Create Stored Procedure, UDF, Views, UDT, Indices and Triggers and optimize large queries. Create Reports with Crystal Reports for data presentation. Create web services.',
        items: ['Significantly enhance sql queries performance for large transactions for Accounting system.',
            'Successfully deployed ERP applications to client site.',
            'Able to work with a smart/client architechture system.',
            'Able to work with integrated systems Inventory, POS and Accounting.',
            'Successfully developed applications from specs into a working system.']
    }]