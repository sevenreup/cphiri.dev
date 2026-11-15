export interface ResumeExperience {
	name: string;
	position: string;
	meta: string;
	body: string;
	highlights: string[];
	responsibilities: string;
	logo: string;
}

export const workExperience: ResumeExperience[] = [
	{
		name: 'Mophones Kenya',
		position: 'Product Engineer Consultant',
		meta: 'May 2025 - Present',
		logo: 'mo',
		body: 'Led the onboarding squad as the primary developer, owning onboarding and underwriting services from customer acquisition through credit evaluation.',
		highlights: [
			'Maintained and improved the internal agent application for customer onboarding, lead management, and prospect tracking.',
			'Drove the migration from a hybrid low-code and microservice architecture to a fully custom-built in-house system.',
			'Built and maintained integrations with payment providers and identity verification platforms.'
		],
		responsibilities:
			'Full stack development with TypeScript, NestJS, and Next.js; mobile development with React Native and Expo; system and API design for the loan product lifecycle; sprint planning, scoping, and technical documentation.'
	},
	{
		name: 'D-Tree International',
		position: 'Software Developer',
		meta: 'Aug 2022 - Apr 2025',
		logo: 'dtree',
		body: 'Developed native Android applications with Kotlin and Jetpack Compose, alongside Kotlin backends and React frontends. Implemented FHIR standards in native Android.',
		highlights: [
			'Created a custom testing framework for FHIR StructureMap resources and a VS Code extension for running tests.',
			'Created a CI/CD pipeline for developing, testing, and deploying FHIR resources.',
			'Built developer tools and utilities to support development.'
		],
		responsibilities: ''
	},
	{
		name: 'Angle Dimensions',
		position: 'Lead Mobile Developer',
		meta: 'Jun 2021 - Jul 2022',
		logo: 'ad',
		body: 'Led the design, development, and maintenance of mobile applications built with Xamarin Forms and native Android and iOS.',
		highlights: [
			'Developed USSD applications using the State design pattern.',
			'Migrated internal apps to newer .NET and Xamarin versions, refactoring deprecated APIs and features.',
			'Championed Jetpack Compose and MAUI adoption and created annual roadmaps for mobile platforms.',
			'Integrated WorkManager, Room, Hilt, and other Android architecture components to improve app stability.'
		],
		responsibilities:
			'Testing, documentation, UI/UX design, and testing and debugging microservices supporting mobile applications.'
	},
	{
		name: 'Malawi University of Science and Technology',
		position: 'Software Developer',
		meta: 'May 2020 - Nov 2020',
		logo: 'must',
		body: 'Developed native Android applications and supporting backends funded by the United Nations Development Program.',
		highlights: [
			'Integrated WorkManager, Room, LiveData, ViewModels, Hilt, and other Android architecture components to improve app stability.'
		],
		responsibilities: 'System design and architecture, UI/UX design, testing, and debugging.'
	},
	{
		name: 'Airtel Malawi',
		position: 'Information Technology Intern',
		meta: 'Sep 2019 - Jun 2020',
		logo: 'airtel',
		body: 'Provided system support, server administration, and system troubleshooting, alongside network and database administration using IBM DB2.',
		highlights: [],
		responsibilities: ''
	},
	{
		name: 'Alcor',
		position: 'Software Developer',
		meta: 'Jan 2018 - May 2020',
		logo: 'alcor',
		body: 'Developed cross-platform Flutter applications, native mobile applications, and web apps for clients.',
		highlights: [
			'Improved app performance and integrated Hover SDK for payments.',
			'Migrated a Java codebase to Kotlin while maintaining reliability.',
			'Integrated analytics into web and mobile platforms to support management decisions.'
		],
		responsibilities: 'UI/UX design, deployment, and testing.'
	}
];

export const skillGroups = [
	{
		name: 'Core skills',
		skills:
			'Object-oriented and functional design principles and patterns, UI/UX design, unit testing, REST APIs'
	},
	{ name: 'Languages', skills: 'TypeScript, Kotlin, Java, JavaScript, Dart, C#, Swift, Python' },
	{
		name: 'Mobile',
		skills:
			'Flutter, React Native, Expo, Xamarin Forms, Material Design, Jetpack Compose, Dagger-Hilt, Room'
	},
	{
		name: 'Web & frameworks',
		skills: 'NestJS, Next.js, React, Node.js, Laravel, Angular, Vue, .NET'
	},
	{ name: 'Design & tooling', skills: 'Adobe XD, Figma, Git, GitHub, Jira, Confluence, CodeMagic' },
	{ name: 'Databases & testing', skills: 'SQL, NoSQL, JUnit, Espresso' }
];
