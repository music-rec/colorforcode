const db = require('APP/db')
const {User, Employer, Skill, Job, Project, ProjectSkill, JobSkill} = db
const Promise = require('bluebird')
const {mapValues} = require('lodash')
const skillDictionary = require('APP/db/skills')

const employers = seed(Employer, {
  airbnb: {
    name: 'AirBnB',
    company_site: 'https://www.airbnb.com'
  },
  google: {
    name: 'Google',
    company_site: 'https://www.google.com'
  },
  colorforcode: {
    name: 'Color for Code',
    company_site: 'https://www.colorforcode.com'
  },
  shopify: {
    name: 'Shopify',
    company_site: 'https://www.shopify.com'
  }
})
// *** note that the longitude is first in the coordinates array, as is
// required by GeoJSON spec (which PostGIS uses)
const points = {
  bk: {
    type: 'Point',
    coordinates: [-73.8918897, 40.6655101],
    crs: { type: 'name', properties: { name: 'EPSG:32661' } }
  },
  on: {
    type: 'Point',
    coordinates: [-75.69314750000001, 45.4203521],
    crs: { type: 'name', properties: { name: 'EPSG:32661' } }
  },
  ca: {
    type: 'Point',
    coordinates: [-121.4599012, 38.5500434],
    crs: { type: 'name', properties: { name: 'EPSG:32661' } }
  }
}

const users = seed(User,
  ({users, employers, skills}) => ({
    rico: {
      first_name: 'Rico',
      last_name: 'Suarez',
      email: 'rico@123.com',
      password: '123',
      is_employer: true,
      is_looking: true,
      coords: points.bk,
      location: 'Brooklyn, NY',
      'zip_code': '11207',
      status: 'active',
      employer_id: 2
    },
    devin: {
      email: 'devin@123.com',
      first_name: 'Devin',
      last_name: 'Jackson',
      password: '123',
      is_employer: false,
      is_looking: true,
      coords: points.bk,
      'location': 'Brooklyn, NY',
      'zip_code': '11207',
      'employment_types': ['Full Time', 'Remote'],
      image_url: '',
      headline: 'I love code, this, that, and the third!',
      summary: '',
      title: 'Python Wizard',
      work_auth: 'US Citizen',
      personal_site: 'https://sliqback-hacks.io',
      github: 'https://github.com/jackson-',
      linkedin: 'https://linkedin.com/in/sliqbackhacks',
      twitter: 'https://twitter.com/sliqbackhacks',
      status: 'active'
    },
    chloe: {
      first_name: 'Chloe',
      last_name: 'Rice',
      email: 'chloe@123.com',
      password: '123',
      is_employer: false,
      is_looking: true,
      zip_code: '95817',
      location: 'Sacramento, CA',
      coords: points.ca,
      image_url: 'https://firebasestorage.googleapis.com/v0/b/colorforcode.appspot.com/o/avatars%2F1377eb3a-f246-4b2a-b06a-992512fede14?alt=media&token=3703f525-03f5-4605-b2a2-7a2408744210',
      headline: 'I love code, dogs, and fruit!',
      summary: '',
      title: 'Frontend Sorceress',
      work_auth: 'US Citizen',
      employment_types: ['Full Time', 'Contract to Hire', 'Internship'],
      personal_site: 'https://chloe-rice.com',
      github: 'https://github.com/chloerice',
      linkedin: 'https://linkedin.com/in/chloemrice',
      twitter: 'https://twitter.com/theunifarmer',
      status: 'active'
    },
    alex: {
      email: 'alex@123.com',
      first_name: 'Alex',
      last_name: 'Moore',
      password: '123',
      is_employer: false,
      is_looking: true,
      coords: points.bk,
      'location': 'Brooklyn, NY',
      'zip_code': '11207',
      'employment_types': ['Full Time', 'Remote'],
      image_url: '',
      headline: 'I love code, this, that, and the third!',
      summary: '',
      title: 'Node Wizard',
      work_auth: 'US Citizen',
      personal_site: 'https://sliqback-hacks.io',
      github: 'https://github.com/jackson-',
      linkedin: 'https://linkedin.com/in/sliqbackhacks',
      twitter: 'https://twitter.com/sliqbackhacks',
      status: 'active'
    },
    kris: {
      email: 'kris@123.com',
      first_name: 'Kris',
      last_name: 'Lee',
      password: '123',
      is_employer: false,
      is_looking: true,
      coords: points.bk,
      'location': 'Brooklyn, NY',
      'zip_code': '11207',
      'employment_types': ['Full Time', 'Remote'],
      image_url: '',
      headline: 'I love code, this, that, and the third!',
      summary: '',
      title: 'React Wizard',
      work_auth: 'US Citizen',
      personal_site: 'https://sliqback-hacks.io',
      github: 'https://github.com/jackson-',
      linkedin: 'https://linkedin.com/in/sliqbackhacks',
      twitter: 'https://twitter.com/sliqbackhacks',
      status: 'active'
    },
    rome: {
      email: 'rome@123.com',
      first_name: 'Jerome',
      last_name: 'Moore',
      password: '123',
      is_employer: false,
      is_looking: true,
      coords: points.bk,
      'location': 'Brooklyn, NY',
      'zip_code': '11207',
      'employment_types': ['Full Time', 'Remote'],
      image_url: '',
      headline: 'I love code, this, that, and the third!',
      summary: '',
      title: 'Mobile Wizard',
      work_auth: 'US Citizen',
      personal_site: 'https://sliqback-hacks.io',
      github: 'https://github.com/jackson-',
      linkedin: 'https://linkedin.com/in/sliqbackhacks',
      twitter: 'https://twitter.com/sliqbackhacks',
      status: 'active'
    },
    hb1: {
      first_name: 'Devin',
      last_name: 'Blackson',email: 'devin@colorforcode.com',
      password: '123',
      is_employer: true,
      is_looking: false,
      coords: points.bk,
      'location': 'Brooklyn, NY',
      'zip_code': '11207',
      employer_id: 3
    },
    hb2: {
      first_name: 'Chloe',
      last_name: 'Ice',email: 'chloe@colorforcode.com',
      password: '123',
      zip_code: '95817',
      location: 'Sacramento, CA',
      coords: points.ca,
      company_role: 'Engineer/Developer',
      employment_types: [],
      status: 'active',
      is_employer: true,
      is_looking: false,
      employer_id: 3
    },
    chlotilde: {
      first_name: 'Chlotilde',
      last_name: 'Reisenheimer',
      is_employer: true,
      is_looking: false,
      zip_code: 'K2P1L4',
      location: 'Ottawa, ON Canada',
      coords: points.on,
      company_role: 'Engineer/Developer',
      email: 'chlotilde@shopify.com',
      employment_types: [],
      status: 'active',
      password: '123',
      employer_id: 4
    }
  })
)

const projects = seed(Project,
  ({users}) => ({
    d1: {
      user_id: users.devin.id,
      title: 'Data Visualizererer: Make Your Data Sexy',
      screenshot: '',
      problem: 'This is a description',
      approach: 'This is how I approached it.',
      challenges: 'This really pissed me off',
      outcome: 'I learned so much yo',
      site: 'http://www.visualizererer.data',
      repo: 'https://github.com/visualizererer'
    },
    d2: {
      user_id: users.devin.id,
      title: 'Instaknow: Expert Answers Fast',
      screenshot: '',
      problem: 'This is a description',
      approach: 'This is how I approached it.',
      challenges: 'This really pissed me off',
      outcome: 'I learned so much yo',
      site: 'http://www.insta.know',
      repo: 'https://github.com/instaknow'
    },
    c1: {
      user_id: users.chloe.id,
      title: 'Where Can I Eat?: Gluten Free Restaurant Finder',
      screenshot: 'https://firebasestorage.googleapis.com/v0/b/colorforcode.appspot.com/o/screenshots%2FWhere-Can-I-Eat%3F%3A-Gluten-Free-Restaurant-Finder-1377eb3a-f246-4b2a-b06a-992512fede14?alt=media&token=2c5b3d90-e2a1-4603-a090-7901af768f5c',
      problem: 'This is a description',
      approach: 'This is how I approached it.',
      challenges: 'This really pissed me off',
      outcome: 'I learned so much yo',
      site: 'http://www.wherecanieat.com',
      repo: 'https://github.com/where-can-i-eat'
    },
    c2: {
      user_id: users.chloe.id,
      title: 'Interactive Guide: Working with an OCD programmer',
      screenshot: 'https://firebasestorage.googleapis.com/v0/b/colorforcode.appspot.com/o/screenshots%2FInteractive-Guide%3A-Working-with-an-OCD-programmer-1377eb3a-f246-4b2a-b06a-992512fede14?alt=media&token=d89cd542-9b2e-427d-89e5-614f855b3138',
      problem: 'This is a description',
      approach: 'This is how I approached it.',
      challenges: 'This really pissed me off',
      outcome: 'I learned so much yo',
      site: 'http://www.ocd-programmer.guide',
      repo: 'https://github.com/ocd-programmer'
    },
    c3: {
      user_id: users.chloe.id,
      title: `Color for Code`,
      screenshot: `https://firebasestorage.googleapis.com/v0/b/colorforcode.appspot.com/o/screenshots%2FColor-for-Code-1377eb3a-f246-4b2a-b06a-992512fede14?alt=media&token=049eb454-0248-42ef-9578-7684336b3b2a`,
      problem: `Tech has a diversity problem and everyone's talking about it. Many companies were approaching my co-founder Devin, the organizer and founder of the Black Software Engineers of NYC Meetup, with recruitment inquiries as the group has thousands of talented members. It was becoming cumbersome to keep passing job opportunities along from recruiters to well-suited members on an individual basis. On the other hand, each week members casually discuss their experiences with one another, and all too often those experiences are job search and interview horror stories detailing the ignorance and even outright racism they've encountered from employers. There was a clear need for amazing employers eagerly cultivating diverse teams and our job seeking Meetup members to have a platform on which to meet and build a better tech industry together. So C4C was born!`,
      approach: `We built the platform using React, Redux, and Bootstrap for the performant, responsive client. Node, Express, PostgreSQL and Sequelize are the fantastic four holding down the server side. Though we work in a pretty agile style, we were focused on quality and performance so we didn't rush to release.`,
      challenges: `We ran into quite a few hiccups along the way. AWS S3 crapped out on us a couple of days prior to beta testing, so we happily switched to Firebase Storage for storing user image and resume assets. We initially used Elasticsearch for the job and user search and were really happy with the speed and extensibility, but the SDK was weighing down the server to an egregious extent. We pivoted and went out on a limb to try implementing full text search with Postgres. Getting the raw queries just right (our ORM Sequelize doesn't have an implementation built in) was quite the challenge. Postgres' archaic documentation paled in comparison to that of PostGIS, which we needed in order to make the advanced search options geo-aware. After 3 days of trial and error we got the search back up and running, and we couldn't be happier! The speed and scalability are still there, but now we no longer need to cross update our data as the indexing and data all live in one place.`,
      outcome: `After a long summer and lots of late nights debugging and making the UI pixel perfect, we’re really proud of what we’ve built. What differentiates us from other recruitment platforms is our project based approach to presenting the skills of our candidates. Our goal is for our applicants to have a chance to show off their talent and present themselves to hiring employers as much more than buzzwords on paper. `,
      site: `http://colorforcode.com`,
      repo: `https://github.com/jackson-/colorforcode`
    },
    a1: {
      user_id: users.alex.id,
      title: 'Where Can I Eat?: Gluten Free Restaurant Finder',
      screenshot: 'https://firebasestorage.googleapis.com/v0/b/colorforcode.appspot.com/o/screenshots%2FWhere-Can-I-Eat%3F%3A-Gluten-Free-Restaurant-Finder-1377eb3a-f246-4b2a-b06a-992512fede14?alt=media&token=2c5b3d90-e2a1-4603-a090-7901af768f5c',
      problem: 'This is a description',
      approach: 'This is how I approached it.',
      challenges: 'This really pissed me off',
      outcome: 'I learned so much yo',
      site: 'http://www.wherecanieat.com',
      repo: 'https://github.com/where-can-i-eat'
    },
    a2: {
      user_id: users.alex.id,
      title: 'Interactive Guide: Working with an OCD programmer',
      screenshot: 'https://firebasestorage.googleapis.com/v0/b/colorforcode.appspot.com/o/screenshots%2FInteractive-Guide%3A-Working-with-an-OCD-programmer-1377eb3a-f246-4b2a-b06a-992512fede14?alt=media&token=d89cd542-9b2e-427d-89e5-614f855b3138',
      problem: 'This is a description',
      approach: 'This is how I approached it.',
      challenges: 'This really pissed me off',
      outcome: 'I learned so much yo',
      site: 'http://www.ocd-programmer.guide',
      repo: 'https://github.com/ocd-programmer'
    },
    a3: {
      user_id: users.alex.id,
      title: `Color for Code`,
      screenshot: `https://firebasestorage.googleapis.com/v0/b/colorforcode.appspot.com/o/screenshots%2FColor-for-Code-1377eb3a-f246-4b2a-b06a-992512fede14?alt=media&token=049eb454-0248-42ef-9578-7684336b3b2a`,
      problem: `Tech has a diversity problem and everyone's talking about it. Many companies were approaching my co-founder Devin, the organizer and founder of the Black Software Engineers of NYC Meetup, with recruitment inquiries as the group has thousands of talented members. It was becoming cumbersome to keep passing job opportunities along from recruiters to well-suited members on an individual basis. On the other hand, each week members casually discuss their experiences with one another, and all too often those experiences are job search and interview horror stories detailing the ignorance and even outright racism they've encountered from employers. There was a clear need for amazing employers eagerly cultivating diverse teams and our job seeking Meetup members to have a platform on which to meet and build a better tech industry together. So C4C was born!`,
      approach: `We built the platform using React, Redux, and Bootstrap for the performant, responsive client. Node, Express, PostgreSQL and Sequelize are the fantastic four holding down the server side. Though we work in a pretty agile style, we were focused on quality and performance so we didn't rush to release.`,
      challenges: `We ran into quite a few hiccups along the way. AWS S3 crapped out on us a couple of days prior to beta testing, so we happily switched to Firebase Storage for storing user image and resume assets. We initially used Elasticsearch for the job and user search and were really happy with the speed and extensibility, but the SDK was weighing down the server to an egregious extent. We pivoted and went out on a limb to try implementing full text search with Postgres. Getting the raw queries just right (our ORM Sequelize doesn't have an implementation built in) was quite the challenge. Postgres' archaic documentation paled in comparison to that of PostGIS, which we needed in order to make the advanced search options geo-aware. After 3 days of trial and error we got the search back up and running, and we couldn't be happier! The speed and scalability are still there, but now we no longer need to cross update our data as the indexing and data all live in one place.`,
      outcome: `After a long summer and lots of late nights debugging and making the UI pixel perfect, we’re really proud of what we’ve built. What differentiates us from other recruitment platforms is our project based approach to presenting the skills of our candidates. Our goal is for our applicants to have a chance to show off their talent and present themselves to hiring employers as much more than buzzwords on paper. `,
      site: `http://colorforcode.com`,
      repo: `https://github.com/jackson-/colorforcode`
    },
    k1: {
      user_id: users.kris.id,
      title: 'Where Can I Eat?: Gluten Free Restaurant Finder',
      screenshot: 'https://firebasestorage.googleapis.com/v0/b/colorforcode.appspot.com/o/screenshots%2FWhere-Can-I-Eat%3F%3A-Gluten-Free-Restaurant-Finder-1377eb3a-f246-4b2a-b06a-992512fede14?alt=media&token=2c5b3d90-e2a1-4603-a090-7901af768f5c',
      problem: 'This is a description',
      approach: 'This is how I approached it.',
      challenges: 'This really pissed me off',
      outcome: 'I learned so much yo',
      site: 'http://www.wherecanieat.com',
      repo: 'https://github.com/where-can-i-eat'
    },
    k2: {
      user_id: users.kris.id,
      title: 'Interactive Guide: Working with an OCD programmer',
      screenshot: 'https://firebasestorage.googleapis.com/v0/b/colorforcode.appspot.com/o/screenshots%2FInteractive-Guide%3A-Working-with-an-OCD-programmer-1377eb3a-f246-4b2a-b06a-992512fede14?alt=media&token=d89cd542-9b2e-427d-89e5-614f855b3138',
      problem: 'This is a description',
      approach: 'This is how I approached it.',
      challenges: 'This really pissed me off',
      outcome: 'I learned so much yo',
      site: 'http://www.ocd-programmer.guide',
      repo: 'https://github.com/ocd-programmer'
    },
    k3: {
      user_id: users.kris.id,
      title: `Color for Code`,
      screenshot: `https://firebasestorage.googleapis.com/v0/b/colorforcode.appspot.com/o/screenshots%2FColor-for-Code-1377eb3a-f246-4b2a-b06a-992512fede14?alt=media&token=049eb454-0248-42ef-9578-7684336b3b2a`,
      problem: `Tech has a diversity problem and everyone's talking about it. Many companies were approaching my co-founder Devin, the organizer and founder of the Black Software Engineers of NYC Meetup, with recruitment inquiries as the group has thousands of talented members. It was becoming cumbersome to keep passing job opportunities along from recruiters to well-suited members on an individual basis. On the other hand, each week members casually discuss their experiences with one another, and all too often those experiences are job search and interview horror stories detailing the ignorance and even outright racism they've encountered from employers. There was a clear need for amazing employers eagerly cultivating diverse teams and our job seeking Meetup members to have a platform on which to meet and build a better tech industry together. So C4C was born!`,
      approach: `We built the platform using React, Redux, and Bootstrap for the performant, responsive client. Node, Express, PostgreSQL and Sequelize are the fantastic four holding down the server side. Though we work in a pretty agile style, we were focused on quality and performance so we didn't rush to release.`,
      challenges: `We ran into quite a few hiccups along the way. AWS S3 crapped out on us a couple of days prior to beta testing, so we happily switched to Firebase Storage for storing user image and resume assets. We initially used Elasticsearch for the job and user search and were really happy with the speed and extensibility, but the SDK was weighing down the server to an egregious extent. We pivoted and went out on a limb to try implementing full text search with Postgres. Getting the raw queries just right (our ORM Sequelize doesn't have an implementation built in) was quite the challenge. Postgres' archaic documentation paled in comparison to that of PostGIS, which we needed in order to make the advanced search options geo-aware. After 3 days of trial and error we got the search back up and running, and we couldn't be happier! The speed and scalability are still there, but now we no longer need to cross update our data as the indexing and data all live in one place.`,
      outcome: `After a long summer and lots of late nights debugging and making the UI pixel perfect, we’re really proud of what we’ve built. What differentiates us from other recruitment platforms is our project based approach to presenting the skills of our candidates. Our goal is for our applicants to have a chance to show off their talent and present themselves to hiring employers as much more than buzzwords on paper. `,
      site: `http://colorforcode.com`,
      repo: `https://github.com/jackson-/colorforcode`
    },
    r1: {
      user_id: users.rome.id,
      title: 'Where Can I Eat?: Gluten Free Restaurant Finder',
      screenshot: 'https://firebasestorage.googleapis.com/v0/b/colorforcode.appspot.com/o/screenshots%2FWhere-Can-I-Eat%3F%3A-Gluten-Free-Restaurant-Finder-1377eb3a-f246-4b2a-b06a-992512fede14?alt=media&token=2c5b3d90-e2a1-4603-a090-7901af768f5c',
      problem: 'This is a description',
      approach: 'This is how I approached it.',
      challenges: 'This really pissed me off',
      outcome: 'I learned so much yo',
      site: 'http://www.wherecanieat.com',
      repo: 'https://github.com/where-can-i-eat'
    },
    r2: {
      user_id: users.rome.id,
      title: 'Interactive Guide: Working with an OCD programmer',
      screenshot: 'https://firebasestorage.googleapis.com/v0/b/colorforcode.appspot.com/o/screenshots%2FInteractive-Guide%3A-Working-with-an-OCD-programmer-1377eb3a-f246-4b2a-b06a-992512fede14?alt=media&token=d89cd542-9b2e-427d-89e5-614f855b3138',
      problem: 'This is a description',
      approach: 'This is how I approached it.',
      challenges: 'This really pissed me off',
      outcome: 'I learned so much yo',
      site: 'http://www.ocd-programmer.guide',
      repo: 'https://github.com/ocd-programmer'
    },
    r3: {
      user_id: users.rome.id,
      title: `Color for Code`,
      screenshot: `https://firebasestorage.googleapis.com/v0/b/colorforcode.appspot.com/o/screenshots%2FColor-for-Code-1377eb3a-f246-4b2a-b06a-992512fede14?alt=media&token=049eb454-0248-42ef-9578-7684336b3b2a`,
      problem: `Tech has a diversity problem and everyone's talking about it. Many companies were approaching my co-founder Devin, the organizer and founder of the Black Software Engineers of NYC Meetup, with recruitment inquiries as the group has thousands of talented members. It was becoming cumbersome to keep passing job opportunities along from recruiters to well-suited members on an individual basis. On the other hand, each week members casually discuss their experiences with one another, and all too often those experiences are job search and interview horror stories detailing the ignorance and even outright racism they've encountered from employers. There was a clear need for amazing employers eagerly cultivating diverse teams and our job seeking Meetup members to have a platform on which to meet and build a better tech industry together. So C4C was born!`,
      approach: `We built the platform using React, Redux, and Bootstrap for the performant, responsive client. Node, Express, PostgreSQL and Sequelize are the fantastic four holding down the server side. Though we work in a pretty agile style, we were focused on quality and performance so we didn't rush to release.`,
      challenges: `We ran into quite a few hiccups along the way. AWS S3 crapped out on us a couple of days prior to beta testing, so we happily switched to Firebase Storage for storing user image and resume assets. We initially used Elasticsearch for the job and user search and were really happy with the speed and extensibility, but the SDK was weighing down the server to an egregious extent. We pivoted and went out on a limb to try implementing full text search with Postgres. Getting the raw queries just right (our ORM Sequelize doesn't have an implementation built in) was quite the challenge. Postgres' archaic documentation paled in comparison to that of PostGIS, which we needed in order to make the advanced search options geo-aware. After 3 days of trial and error we got the search back up and running, and we couldn't be happier! The speed and scalability are still there, but now we no longer need to cross update our data as the indexing and data all live in one place.`,
      outcome: `After a long summer and lots of late nights debugging and making the UI pixel perfect, we’re really proud of what we’ve built. What differentiates us from other recruitment platforms is our project based approach to presenting the skills of our candidates. Our goal is for our applicants to have a chance to show off their talent and present themselves to hiring employers as much more than buzzwords on paper. `,
      site: `http://colorforcode.com`,
      repo: `https://github.com/jackson-/colorforcode`
    }
  })
)

const skills = seed(Skill, skillDictionary)

const jobs = seed(Job,
  // We're specifying a function here, rather than just a rows object.
  // Using a function lets us receive the previously-seeded rows (the seed
  // function does this wiring for us).
  //
  // This lets us reference previously-created rows in order to create the join
  // rows. We can reference them by the names we used above (which is why we used
  // Objects above, rather than just arrays).
  ({users, employers, skills}) => {
    return ({
      // The easiest way to seed associations seems to be to just create rows
      // in the join table.
      full_stack: {
        'employer_id': employers.colorforcode.id,
        'title': 'Full Stack Dev',
        'description': 'This is a job for a full stack dev',
        'status': 'open',
        'application_email': 'emp1@123.com',
        'cc_email': 'emp2@123.com',
        'application_url': '',
        'coords': points.bk,
        'location': 'Brooklyn, New York',
        'zip_code': '11207',
        'employment_types': ['Full Time', 'Remote'],
        'pay_rate': '$98000',
        'compensation_type': 'Salary',
        'travel_requirements': 'None'
      },
      dev_ops: {
        'employer_id': employers.colorforcode.id,
        'title': 'DevOps',
        'description': 'This is a job for a devops dude',
        'status': 'open',
        'application_email': 'emp1@123.com',
        'cc_email': 'emp2@123.com',
        'application_url': null,
        'coords': points.bk,
        'location': 'Brooklyn, NY',
        'zip_code': '11207',
        'employment_types': ['Full Time', 'Remote'],
        'pay_rate': '$100',
        'compensation_type': 'Hourly',
        'travel_requirements': 'None'
      },
      ml: {
        'title': 'Machine Learning Expert',
        'description': `Work with the latest machine learning techniques and technologies to influence the innovation of products in a highly collaborative environment.`,
        'status': 'open',
        'application_email': '',
        'cc_email': '',
        'application_url': 'https://www.shopify.com/careers/fall-2017-internship',
        'coords': points.bk,
        'location': 'Brooklyn, NY',
        'zip_code': '11207',
        'employment_types': ['Full Time'],
        'pay_rate': '$108000',
        'compensation_type': 'Salary',
        'travel_requirements': 'None',
        'employer_id': employers.colorforcode.id
      },
      ux: {
        'title': 'UX Designer',
        'description': `BlackRocks User Experience team is looking for a professional with experience conceptualizing and visualizing user interfaces for large scale enterprise web applications to help us design next generation user interfaces for our Aladdin platform.`,
        'status': 'open',
        'application_email': '',
        'cc_email': '',
        'application_url': 'https://www.shopify.com/careers/fall-2017-internship',
        'coords': points.bk,
        'location': 'Brooklyn, NY',
        'zip_code': '11207',
        'employment_types': ['Full Time'],
        'pay_rate': '$70',
        'compensation_type': 'Hourly',
        'travel_requirements': 'None',
        'employer_id': employers.colorforcode.id
      },
      messaging: {
        'title': 'Messaging Engineer',
        'description': `Our client, a local Healthcare organization, is looking for a full-time Messaging Engineer. This individual will be part of a 7-12 member team of AD and Messaging Engineers (some offshore that do the overnight support).`,
        'status': 'open',
        'application_email': '',
        'cc_email': '',
        'application_url': 'https://www.shopify.com/careers/fall-2017-internship',
        'coords': points.bk,
        'location': 'Brooklyn, NY',
        'zip_code': '11207',
        'employment_types': ['Remote', 'Full Time'],
        'pay_rate': '$70',
        'compensation_type': 'Hourly',
        'travel_requirements': 'None',
        'employer_id': employers.colorforcode.id
      },
      net_dev: {
        'title': 'Junior .Net Developer',
        'description': `An NYC government agency located in Brooklyn, NY is looking for a junior .NET Developer for a 6 month contract, with the strong possibility for a long term renewal.`,
        'status': 'open',
        'application_email': '',
        'cc_email': '',
        'application_url': 'https://www.shopify.com/careers/fall-2017-internship',
        'coords': points.bk,
        'location': 'Brooklyn, NY',
        'zip_code': '11207',
        'employment_types': ['Contract to Hire', 'Full Time'],
        'pay_rate': '$60',
        'compensation_type': 'Hourly',
        'travel_requirements': 'None',
        'employer_id': employers.colorforcode.id
      },
      merchant: {
        'title': 'Merchant Success Engineer',
        'description': 'Help make commerce better for everyone while building the biggest Rails app in the world!',
        'status': 'open',
        'application_email': 'jobs@shopify.com',
        'cc_email': '',
        'application_url': '',
        'coords': points.on,
        'location': 'Ottawa, ON Canada',
        'zip_code': 'K2P1L4',
        'employment_types': ['Remote', 'Full Time'],
        'pay_rate': '$94000',
        'compensation_type': 'Salary',
        'travel_requirements': 'None',
        'employer_id': employers.shopify.id
      },
      backend: {
        'title': 'Backend Engineer',
        'description': 'Work on the largest Rails app in the world!',
        'status': 'open',
        'application_email': 'jobs@shopify.com',
        'cc_email': '',
        'application_url': '',
        'coords': points.on,
        'location': 'Ottawa, ON Canada',
        'zip_code': 'K2P1L4',
        'employment_types': ['Full Time'],
        'pay_rate': '$94000',
        'compensation_type': 'Salary',
        'travel_requirements': 'None',
        'employer_id': employers.shopify.id
      },
      intern: {
        'title': 'Front End Developer Intern',
        'description': `4 month internship, Fall 2017 (9/5 - 12-22)\n\nCome help us build our new design system with React! \n\nYou'll be get to: \n\n~work on the largest Rails app on the planet\n~be treated like any other full time engineer\n~have an awesome dedicated mentor\n~eat fantastic meals catered daily by local restaurants (gluten free vegan options always!)`,
        'status': 'open',
        'application_email': '',
        'cc_email': '',
        'application_url': 'https://www.shopify.com/careers/fall-2017-internship',
        'coords': points.on,
        'location': 'Ottawa, ON Canada',
        'zip_code': 'K2P1L4',
        'employment_types': ['Internship', 'Full Time'],
        'pay_rate': '$30',
        'compensation_type': 'Hourly',
        'travel_requirements': 'None',
        'employer_id': employers.shopify.id
      },
      data: {
        'title': 'Data Engineer',
        'description': `We've got over 400,000 merchants from Tesla and Kanye West to small shops selling enamel pins. Help us build the best product to serve all of their needs by making our data talk!`,
        'status': 'open',
        'application_email': 'jobs@shopify.com',
        'cc_email': '',
        'application_url': '',
        'coords': points.on,
        'location': 'Ottawa, ON Canada',
        'zip_code': 'K2P1L4',
        'employment_types': ['Full Time'],
        'pay_rate': '$94000',
        'compensation_type': 'Salary',
        'travel_requirements': 'None',
        'employer_id': employers.shopify.id
      },
      sen_full_stack: {
        'employer_id': employers.colorforcode.id,
        'title': 'Senior Full Stack Dev',
        'description': 'This is a job for a full stack dev',
        'status': 'open',
        'application_email': 'emp1@123.com',
        'cc_email': 'emp2@123.com',
        'application_url': '',
        'coords': points.bk,
        'location': 'Brooklyn, New York',
        'zip_code': '11207',
        'employment_types': ['Full Time', 'Remote'],
        'pay_rate': '$125000',
        'compensation_type': 'Salary',
        'travel_requirements': 'None'
      },
      sen_dev_ops: {
        'employer_id': employers.colorforcode.id,
        'title': 'Senior DevOps Engineer',
        'description': 'This is a job for a devops dude',
        'status': 'open',
        'application_email': 'emp1@123.com',
        'cc_email': 'emp2@123.com',
        'application_url': null,
        'coords': points.bk,
        'location': 'Brooklyn, New York',
        'zip_code': '11207',
        'employment_types': ['Full Time', 'Contract'],
        'pay_rate': '$100',
        'compensation_type': 'Hourly',
        'travel_requirements': 'None'
      },
      sen_ml: {
        'title': 'Senior Machine Learning Architect',
        'description': `Work with the latest machine learning techniques and technologies to influence the innovation of products in a highly collaborative environment.`,
        'status': 'open',
        'application_email': '',
        'cc_email': '',
        'application_url': 'https://www.shopify.com/careers/fall-2017-internship',
        'coords': points.bk,
        'location': 'Brooklyn, NY',
        'zip_code': '11207',
        'employment_types': ['Full Time'],
        'pay_rate': '$145000',
        'compensation_type': 'Salary',
        'travel_requirements': 'None',
        'employer_id': employers.colorforcode.id
      },
      sen_ux: {
        'title': 'Senior UX Designer',
        'description': `BlackRocks User Experience team is looking for a professional with experience conceptualizing and visualizing user interfaces for large scale enterprise web applications to help us design next generation user interfaces for our Aladdin platform.`,
        'status': 'open',
        'application_email': '',
        'cc_email': '',
        'application_url': 'https://www.shopify.com/careers/fall-2017-internship',
        'coords': points.bk,
        'location': 'Brooklyn, NY',
        'zip_code': '11207',
        'employment_types': ['Full Time'],
        'pay_rate': '$68',
        'compensation_type': 'Hourly',
        'travel_requirements': 'None',
        'employer_id': employers.colorforcode.id
      },
      sen_messaging: {
        'title': 'Senior Messaging Engineer',
        'description': `Our client, a local Healthcare organization, is looking for a full-time Messaging Engineer. This individual will be part of a 7-12 member team of AD and Messaging Engineers (some offshore that do the overnight support).`,
        'status': 'open',
        'application_email': '',
        'cc_email': '',
        'application_url': 'https://www.shopify.com/careers/fall-2017-internship',
        'coords': points.bk,
        'location': 'Brooklyn, NY',
        'zip_code': '11207',
        'employment_types': ['Remote', 'Full Time'],
        'pay_rate': '$80',
        'compensation_type': 'Hourly',
        'travel_requirements': 'None',
        'employer_id': employers.colorforcode.id
      },
      sen_net_dev: {
        'title': 'Senior .Net Developer',
        'description': `An NYC government agency located in Brooklyn, NY is looking for a senior .NET Developer for a 6 month contract, with the strong possibility for a long term renewal.`,
        'status': 'open',
        'application_email': '',
        'cc_email': '',
        'application_url': 'https://www.shopify.com/careers/fall-2017-internship',
        'coords': points.bk,
        'location': 'Brooklyn, NY',
        'zip_code': '11207',
        'employment_types': ['Contract to Hire', 'Full Time'],
        'pay_rate': '$90',
        'compensation_type': 'Hourly',
        'travel_requirements': 'None',
        'employer_id': employers.colorforcode.id
      },
      sen_merchant: {
        'title': 'Merchant Success Engineering Lead',
        'description': 'Help make commerce better for everyone while building the biggest Rails app in the world!',
        'status': 'open',
        'application_email': 'jobs@shopify.com',
        'cc_email': '',
        'application_url': '',
        'coords': points.bk,
        'location': 'New York, NY',
        'zip_code': '10009',
        'employment_types': ['Remote', 'Full Time'],
        'pay_rate': '$119000',
        'compensation_type': 'Salary',
        'travel_requirements': 'None',
        'employer_id': employers.shopify.id
      },
      sen_backend: {
        'title': 'Backend Engineering Lead',
        'description': 'Work on the largest Rails app in the world!',
        'status': 'open',
        'application_email': 'jobs@shopify.com',
        'cc_email': '',
        'application_url': '',
        'coords': points.on,
        'location': 'Ottawa, ON Canada',
        'zip_code': 'K2P1L4',
        'employment_types': ['Full Time'],
        'pay_rate': '$119000',
        'compensation_type': 'Salary',
        'travel_requirements': 'None',
        'employer_id': employers.shopify.id
      },
      sen_data: {
        'title': 'Data Engineering Lead',
        'description': `We've got over 400,000 merchants from Tesla and Kanye West to small shops selling enamel pins. Help us build the best product to serve all of their needs by making our data talk!`,
        'status': 'open',
        'application_email': 'jobs@shopify.com',
        'cc_email': '',
        'application_url': '',
        'coords': points.on,
        'location': 'Ottawa, ON Canada',
        'zip_code': 'K2P1L4',
        'employment_types': ['Full Time'],
        'pay_rate': '$119000',
        'compensation_type': 'Salary',
        'travel_requirements': 'None',
        'employer_id': employers.shopify.id
      }
    })
  }
)

const job_skills = seed(JobSkill,
  ({skills, jobs}) => ({
    1: {
      job_id: jobs.full_stack.id,
      skill_id: skills.react.id
    },
    2: {
      job_id: jobs.full_stack.id,
      skill_id: skills.nginx.id
    },
    3: {
      job_id: jobs.dev_ops.id,
      skill_id: skills.aws.id
    },
    4: {
      job_id: jobs.dev_ops.id,
      skill_id: skills.google_app_engine.id
    },
    5: {
      job_id: jobs.full_stack.id,
      skill_id: skills.node.id
    },
    6: {
      job_id: jobs.data.id,
      skill_id: skills.react.id
    },
    7: {
      job_id: jobs.data.id,
      skill_id: skills.python.id
    },
    8: {
      job_id: jobs.data.id,
      skill_id: skills.d3.id
    },
    9: {
      job_id: jobs.data.id,
      skill_id: skills.rails.id
    },
    10: {
      job_id: jobs.data.id,
      skill_id: skills.ruby.id
    },
    11: {
      job_id: jobs.data.id,
      skill_id: skills.scala.id
    },
    12: {
      job_id: jobs.dev_ops.id,
      skill_id: skills.continuous_integration.id
    },
    13: {
      job_id: jobs.dev_ops.id,
      skill_id: skills.docker.id
    },
    14: {
      job_id: jobs.backend.id,
      skill_id: skills.rails.id
    },
    15: {
      job_id: jobs.backend.id,
      skill_id: skills.ruby.id
    },
    16: {
      job_id: jobs.backend.id,
      skill_id: skills.python.id
    },
    17: {
      job_id: jobs.merchant.id,
      skill_id: skills.rails.id
    },
    18: {
      job_id: jobs.merchant.id,
      skill_id: skills.redux.id
    },
    19: {
      job_id: jobs.merchant.id,
      skill_id: skills.react.id
    },
    20: {
      job_id: jobs.merchant.id,
      skill_id: skills.javascript.id
    },
    21: {
      job_id: jobs.merchant.id,
      skill_id: skills.ruby.id
    },
    22: {
      job_id: jobs.merchant.id,
      skill_id: skills.html5.id
    },
    23: {
      job_id: jobs.merchant.id,
      skill_id: skills.css3.id
    },
    24: {
      job_id: jobs.merchant.id,
      skill_id: skills.git.id
    },
    25: {
      job_id: jobs.intern.id,
      skill_id: skills.react.id
    },
    26: {
      job_id: jobs.intern.id,
      skill_id: skills.javascript.id
    },
    27: {
      job_id: jobs.intern.id,
      skill_id: skills.d3.id
    },
    28: {
      job_id: jobs.intern.id,
      skill_id: skills.html5.id
    },
    29: {
      job_id: jobs.intern.id,
      skill_id: skills.css3.id
    },
    30: {
      job_id: jobs.intern.id,
      skill_id: skills.git.id
    },
    31: {
      job_id: jobs.sen_full_stack.id,
      skill_id: skills.react.id
    },
    32: {
      job_id: jobs.sen_full_stack.id,
      skill_id: skills.nginx.id
    },
    33: {
      job_id: jobs.sen_dev_ops.id,
      skill_id: skills.travis_ci.id
    },
    34: {
      job_id: jobs.sen_dev_ops.id,
      skill_id: skills.heroku.id
    },
    35: {
      job_id: jobs.sen_full_stack.id,
      skill_id: skills.node.id
    },
    36: {
      job_id: jobs.sen_data.id,
      skill_id: skills.react.id
    },
    37: {
      job_id: jobs.sen_data.id,
      skill_id: skills.python.id
    },
    38: {
      job_id: jobs.sen_data.id,
      skill_id: skills.d3.id
    },
    39: {
      job_id: jobs.sen_data.id,
      skill_id: skills.rails.id
    },
    40: {
      job_id: jobs.sen_data.id,
      skill_id: skills.ruby.id
    },
    41: {
      job_id: jobs.sen_data.id,
      skill_id: skills.scala.id
    },
    42: {
      job_id: jobs.sen_dev_ops.id,
      skill_id: skills.google_cloud_functions.id
    },
    43: {
      job_id: jobs.sen_dev_ops.id,
      skill_id: skills.kubernetes.id
    },
    44: {
      job_id: jobs.sen_backend.id,
      skill_id: skills.rails.id
    },
    45: {
      job_id: jobs.sen_backend.id,
      skill_id: skills.ruby.id
    },
    46: {
      job_id: jobs.sen_backend.id,
      skill_id: skills.python.id
    },
    47: {
      job_id: jobs.sen_merchant.id,
      skill_id: skills.rails.id
    },
    48: {
      job_id: jobs.sen_merchant.id,
      skill_id: skills.react.id
    },
    49: {
      job_id: jobs.sen_merchant.id,
      skill_id: skills.javascript.id
    },
    50: {
      job_id: jobs.sen_merchant.id,
      skill_id: skills.ruby.id
    },
    52: {
      job_id: jobs.sen_merchant.id,
      skill_id: skills.html5.id
    },
    53: {
      job_id: jobs.sen_merchant.id,
      skill_id: skills.css3.id
    },
    54: {
      job_id: jobs.sen_merchant.id,
      skill_id: skills.git.id
    },
    55: {
      job_id: jobs.messaging.id,
      skill_id: skills.react.id
    },
    56: {
      job_id: jobs.messaging.id,
      skill_id: skills.javascript.id
    },
    57: {
      job_id: jobs.messaging.id,
      skill_id: skills.websockets.id
    },
    58: {
      job_id: jobs.sen_messaging.id,
      skill_id: skills.react.id
    },
    59: {
      job_id: jobs.sen_messaging.id,
      skill_id: skills['socket.io'].id
    },
    60: {
      job_id: jobs.sen_messaging.id,
      skill_id: skills.firebase.id
    },
    61: {
      job_id: jobs.sen_ml.id,
      skill_id: skills.python.id
    },
    62: {
      job_id: jobs.sen_ml.id,
      skill_id: skills.neural_network.id
    },
    63: {
      job_id: jobs.sen_ml.id,
      skill_id: skills.scala.id
    },
    64: {
      job_id: jobs.sen_net_dev.id,
      skill_id: skills['asp.net'].id
    },
    65: {
      job_id: jobs.sen_net_dev.id,
      skill_id: skills.windows.id
    },
    66: {
      job_id: jobs.net_dev.id,
      skill_id: skills['vb.net'].id
    },
    67: {
      job_id: jobs.net_dev.id,
      skill_id: skills['.net'].id
    },
    68: {
      job_id: jobs.sen_ux.id,
      skill_id: skills.uxpin.id
    },
    69: {
      job_id: jobs.sen_ux.id,
      skill_id: skills.adobe_cc.id
    },
    70: {
      job_id: jobs.ux.id,
      skill_id: skills.sketch.id
    },
    71: {
      job_id: jobs.ux.id,
      skill_id: skills.user_research.id
    },
    72: {
      job_id: jobs.ml.id,
      skill_id: skills.neural_network.id
    },
    73: {
      job_id: jobs.ml.id,
      skill_id: skills.lisp.id
    }
  })
)

const project_skills = seed(ProjectSkill,
  ({skills, projects}) => ({
    1: {
      project_id: projects.d1.id,
      skill_id: skills.react.id
    },
    2: {
      project_id: projects.d1.id,
      skill_id: skills.nginx.id
    },
    3: {
      project_id: projects.d1.id,
      skill_id: skills.mongodb.id
    },
    4: {
      project_id: projects.d2.id,
      skill_id: skills.node.id
    },
    5: {
      project_id: projects.d2.id,
      skill_id: skills.react.id
    },
    6: {
      project_id: projects.d2.id,
      skill_id: skills.nginx.id
    },
    7: {
      project_id: projects.c1.id,
      skill_id: skills.mongodb.id
    },
    8: {
      project_id: projects.c1.id,
      skill_id: skills.node.id
    },
    9: {
      project_id: projects.c1.id,
      skill_id: skills.react.id
    },
    10: {
      project_id: projects.c2.id,
      skill_id: skills.nginx.id
    },
    11: {
      project_id: projects.c2.id,
      skill_id: skills.mongodb.id
    },
    12: {
      project_id: projects.c2.id,
      skill_id: skills.node.id
    },
    13: {
      project_id: projects.a1.id,
      skill_id: skills.python.id
    },
    14: {
      project_id: projects.a1.id,
      skill_id: skills.jquery.id
    },
    15: {
      project_id: projects.a1.id,
      skill_id: skills.django.id
    },
    16: {
      project_id: projects.a2.id,
      skill_id: skills.ruby.id
    },
    17: {
      project_id: projects.a2.id,
      skill_id: skills.rails.id
    },
    18: {
      project_id: projects.a2.id,
      skill_id: skills.regex.id
    },
    19: {
      project_id: projects.a3.id,
      skill_id: skills.iOS.id
    },
    20: {
      project_id: projects.a3.id,
      skill_id: skills.swift.id
    },
    21: {
      project_id: projects.a3.id,
      skill_id: skills.sorting.id
    },
    22: {
      project_id: projects.k1.id,
      skill_id: skills.postgresql.id
    },
    23: {
      project_id: projects.k1.id,
      skill_id: skills.angular.id
    },
    24: {
      project_id: projects.k1.id,
      skill_id: skills.javascript.id
    },
    25: {
      project_id: projects.k2.id,
      skill_id: skills.spring.id
    },
    26: {
      project_id: projects.k2.id,
      skill_id: skills.eclipse.id
    },
    27: {
      project_id: projects.k2.id,
      skill_id: skills.html5.id
    },
    28: {
      project_id: projects.k3.id,
      skill_id: skills.iOS.id
    },
    29: {
      project_id: projects.k3.id,
      skill_id: skills.swift.id
    },
    30: {
      project_id: projects.k3.id,
      skill_id: skills.xcode.id
    },
    31: {
      project_id: projects.r1.id,
      skill_id: skills.shell.id
    },
    32: {
      project_id: projects.r1.id,
      skill_id: skills.perl.id
    },
    33: {
      project_id: projects.r1.id,
      skill_id: skills.sqlite.id
    },
    34: {
      project_id: projects.r2.id,
      skill_id: skills.maven.id
    },
    35: {
      project_id: projects.r2.id,
      skill_id: skills.cordova.id
    },
    36: {
      project_id: projects.r2.id,
      skill_id: skills.websockets.id
    },
    37: {
      project_id: projects.r3.id,
      skill_id: skills.android.id
    },
    38: {
      project_id: projects.r3.id,
      skill_id: skills.java.id
    },
    39: {
      project_id: projects.r3.id,
      skill_id: skills.bootstrap.id
    },
    40: {
      project_id: projects.c3.id,
      skill_id: skills.bootstrap.id
    },
    41: {
      project_id: projects.c3.id,
      skill_id: skills.react.id
    },
    42: {
      project_id: projects.c3.id,
      skill_id: skills.node.id
    },
    43: {
      project_id: projects.c3.id,
      skill_id: skills.postgresql.id
    },
    44: {
      project_id: projects.c3.id,
      skill_id: skills.redux.id
    },
    45: {
      project_id: projects.c3.id,
      skill_id: skills.bemcss.id
    }
  })
)

function getMethods (obj) {
  var res = []
  for (var m in obj) {
    if (typeof obj[m] === 'function') {
      res.push(m)
    }
  }
  return res
}

function seedEverything () {
  const seeded = {
    employers: employers(),
    users: users(),
    skills: skills(),
  }
  seeded.jobs = jobs(seeded)
  seeded.projects = projects(seeded)
  seeded.job_skills = job_skills(seeded)
  seeded.project_skills = project_skills(seeded)
  return Promise.props(seeded)
}

if (module === require.main) {
  console.log('seeding')
  db.didSync
    .then(() => db.sync({force: true}))
    .then(seedEverything)
    // .then(seedAssociations)
    // .then(jobs => jobs.forEach(job => job.addSkills([1,2,3]).then(() => {console.log('GOT EM')}) ) )

    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor (key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString () {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed (Model, rows) {
  return (others = {}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }
    return Promise.resolve(rows)
      .then(rows => {
        console.log('TYPE', typeof rows)
        return Promise.props(
          Object.keys(rows)
            .map(key => {
              const row = rows[key]
              return {
                key,
                value: Promise.props(row)
                  .then(row => Model.create(row)
                    .catch(error => { throw new BadRow(key, row, error) })
                  )
              }
            }).reduce(
              (all, one) => Object.assign({}, all, {[one.key]: one.value}),
              {}
            )
        )
      })
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, {users, employers, jobs, skills, projects})
