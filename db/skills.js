const mapSkills = (skills) => {
  let dict = {}
  skills.forEach(skill => {
    const title = skill.title.split(' ').join('_')
    dict[`${title}`] = skill
  })
  return dict
}

const skillList = [{
  'title': 'kubernetes',
  'template': true
}, {
  'title': 'uxpin',
  'template': true
}, {
  'title': 'wordpress',
  'template': true
}, {
  'title': 'xcode',
  'template': true
}, {
  'title': 'spring',
  'template': true
}, {
  'title': 'vb.net',
  'template': true
}, {
  'title': 'windows',
  'template': true
}, {
  'title': 'eclipse',
  'template': true
}, {
  'title': 'html5',
  'template': true
}, {
  'title': 'multithreading',
  'template': true
}, {
  'title': 'git',
  'template': true
}, {
  'title': 'bash',
  'template': true
}, {
  'title': 'oracle',
  'template': true
}, {
  'title': 'mongodb',
  'template': true
}, {
  'title': 'vba',
  'template': true
}, {
  'title': 'bootstrap',
  'template': true
}, {
  'title': 'facebook',
  'template': true
}, {
  'title': 'osx',
  'template': true
}, {
  'title': 'algorithm',
  'template': true
}, {
  'title': 'winforms',
  'template': true
}, {
  'title': 'apache',
  'template': true
}, {
  'title': 'matlab',
  'template': true
}, {
  'title': 'postgresql',
  'template': true
}, {
  'title': 'performance',
  'template': true
}, {
  'title': 'visual-studio',
  'template': true
}, {
  'title': 'scala',
  'template': true
}, {
  'title': 'entity-framework',
  'template': true
}, {
  'title': 'python',
  'template': true
}, {
  'title': 'laravel',
  'template': true
}, {
  'title': 'angular',
  'template': true
}, {
  'title': 'swing',
  'template': true
}, {
  'title': 'list',
  'template': true
}, {
  'title': 'css3',
  'template': true
}, {
  'title': 'excel-vba',
  'template': true
}, {
  'title': 'hibernate',
  'template': true
}, {
  'title': 'linq',
  'template': true
}, {
  'title': 'qt',
  'template': true
}, {
  'title': '.htaccess',
  'template': true
}, {
  'title': 'shell',
  'template': true
}, {
  'title': 'perl',
  'template': true
}, {
  'title': 'sqlite',
  'template': true
}, {
  'title': 'rest',
  'template': true
}, {
  'title': 'rails',
  'template': true
}, {
  'title': 'codeigniter',
  'template': true
}, {
  'title': 'maven',
  'template': true
}, {
  'title': 'react',
  'template': true
}, {
  'title': 'google maps',
  'template': true
}, {
  'title': 'cordova',
  'template': true
}, {
  'title': 'symfony',
  'template': true
}, {
  'title': 'unit testing',
  'template': true
}, {
  'title': 'sql server',
  'template': true
}, {
  'title': 'pandas',
  'template': true
}, {
  'title': 'sockets',
  'template': true
}, {
  'title': 'powershell',
  'template': true
}, {
  'title': 'wcf',
  'template': true
}, {
  'title': 'csv',
  'template': true
}, {
  'title': 'sorting',
  'template': true
}, {
  'title': 'tsql',
  'template': true
}, {
  'title': 'xaml',
  'template': true
}, {
  'title': 'javascript',
  'template': true
}, {
  'title': 'java',
  'template': true
}, {
  'title': 'c#',
  'template': true
}, {
  'title': 'php',
  'template': true
}, {
  'title': 'android',
  'template': true
}, {
  'title': 'jquery',
  'template': true
}, {
  'title': 'python',
  'template': true
}, {
  'title': 'html',
  'template': true
}, {
  'title': 'c++',
  'template': true
}, {
  'title': 'iOS',
  'template': true
}, {
  'title': 'mysql',
  'template': true
}, {
  'title': 'c',
  'template': true
}, {
  'title': '.net',
  'template': true
}, {
  'title': 'angular',
  'template': true
}, {
  'title': 'vue',
  'template': true
}, {
  'title': 'polymer',
  'template': true
}, {
  'title': 'material design',
  'template': true
}, {
  'title': 'foundation',
  'template': true
}, {
  'title': 'ajax',
  'template': true
}, {
  'title': 'json',
  'template': true
}, {
  'title': 'R',
  'template': true
}, {
  'title': 'node',
  'template': true
}, {
  'title': 'ruby',
  'template': true
}, {
  'title': 'regex',
  'template': true
}, {
  'title': 'xml',
  'template': true
}, {
  'title': 'svg',
  'template': true
}, {
  'title': 'swift',
  'template': true
}, {
  'title': 'django',
  'template': true
}, {
  'title': 'linux',
  'template': true
}, {
  'title': 'apache',
  'template': true
}, {
  'title': 'asp.net',
  'template': true
}, {
  'title': 'wpf',
  'template': true
}, {
  'title': 'postgresql',
  'template': true
}, {
  'title': 'scala',
  'template': true
}, {
  'title': 'entity',
  'template': true
}, {
  'title': 'elm',
  'template': true
}, {
  'title': 'selenium',
  'template': true
}, {
  'title': 'mocha',
  'template': true
}, {
  'title': 'chai',
  'template': true
}, {
  'title': 'security',
  'template': true
}, {
  'title': 'object oriented programming',
  'template': true
}, {
  'title': 'functional programming',
  'template': true
}, {
  'title': 'dynamic programming',
  'template': true
}, {
  'title': 'actionscript',
  'template': true
}, {
  'title': 'user interface',
  'template': true
}, {
  'title': 'interaction design',
  'template': true
}, {
  'title': 'parsing',
  'template': true
}, {
  'title': 'google app engine',
  'template': true
}, {
  'title': 'google cloud functions',
  'template': true
}, {
  'title': 'firebase',
  'template': true
}, {
  'title': 'digital ocean',
  'template': true
}, {
  'title': 'delphi',
  'template': true
}, {
  'title': 'numpy',
  'template': true
}, {
  'title': 'ubuntu',
  'template': true
}, {
  'title': 'cocoa',
  'template': true
}, {
  'title': 'coffeescript',
  'template': true
}, {
  'title': 'typescript',
  'template': true
}, {
  'title': 'haskell',
  'template': true
}, {
  'title': 'sessions',
  'template': true
}, {
  'title': 'oauth2',
  'template': true
}, {
  'title': 'magento',
  'template': true
}, {
  'title': 'shopify',
  'template': true
}, {
  'title': 'unix',
  'template': true
}, {
  'title': 'edge',
  'template': true
}, {
  'title': 'chrome',
  'template': true
}, {
  'title': 'cross-browser testing',
  'template': true
}, {
  'title': 'ms access',
  'template': true
}, {
  'title': 'hadoop',
  'template': true
}, {
  'title': 'machine learning',
  'template': true
}, {
  'title': 'artificial intelligence',
  'template': true
}, {
  'title': 'ai',
  'template': true
}, {
  'title': 'express',
  'template': true
}, {
  'title': 'sequelize',
  'template': true
}, {
  'title': 'sql',
  'template': true
}, {
  'title': 'jsx',
  'template': true
}, {
  'title': 'ecmascript 2015',
  'template': true
}, {
  'title': 'es6',
  'template': true
}, {
  'title': 'es7',
  'template': true
}, {
  'title': 'es8',
  'template': true
}, {
  'title': 'firefox',
  'template': true
}, {
  'title': 'ssl',
  'template': true
}, {
  'title': 'tsl',
  'template': true
}, {
  'title': 'animation',
  'template': true
}, {
  'title': 'greensock',
  'template': true
}, {
  'title': 'apache spark',
  'template': true
}, {
  'title': 'lucene',
  'template': true
}, {
  'title': 'elasticsearch',
  'template': true
}, {
  'title': 'v8',
  'template': true
}, {
  'title': 'winapi',
  'template': true
}, {
  'title': 'opengl',
  'template': true
}, {
  'title': 'webgl',
  'template': true
}, {
  'title': 'canvas',
  'template': true
}, {
  'title': 'threejs',
  'template': true
}, {
  'title': 'd3',
  'template': true
}, {
  'title': 'unity',
  'template': true
}, {
  'title': 'cake php',
  'template': true
}, {
  'title': 'cucumber',
  'template': true
}, {
  'title': 'gunicorn',
  'template': true
}, {
  'title': 'nginx',
  'template': true
}, {
  'title': 'redux',
  'template': true
}, {
  'title': 'nextjs',
  'template': true
}, {
  'title': 'nuxt',
  'template': true
}, {
  'title': 'twitter',
  'template': true
}, {
  'title': 'social media',
  'template': true
}, {
  'title': 'mod rewrite',
  'template': true
}, {
  'title': 'curl',
  'template': true
}, {
  'title': 'pwa',
  'template': true
}, {
  'title': 'progressive web app',
  'template': true
}, {
  'title': 'web workers',
  'template': true
}, {
  'title': 'service workers',
  'template': true
}, {
  'title': 'dom',
  'template': true
}, {
  'title': 'silverlight',
  'template': true
}, {
  'title': 'caching',
  'template': true
}, {
  'title': 'docker',
  'template': true
}, {
  'title': 'grails',
  'template': true
}, {
  'title': 'jvm',
  'template': true
}, {
  'title': 'meteor',
  'template': true
}, {
  'title': 'image processing',
  'template': true
}, {
  'title': 'networking',
  'template': true
}, {
  'title': 'streams',
  'template': true
}, {
  'title': 'git',
  'template': true
}, {
  'title': 'github',
  'template': true
}, {
  'title': 'bitbucket',
  'template': true
}, {
  'title': 'heroku',
  'template': true
}, {
  'title': 'aws',
  'template': true
}, {
  'title': 'xamarin',
  'template': true
}, {
  'title': 'jenkins',
  'template': true
}, {
  'title': 'jest',
  'template': true
}, {
  'title': 'enzyme',
  'template': true
}, {
  'title': 'flexbox',
  'template': true
}, {
  'title': 'ionic',
  'template': true
}, {
  'title': 'javafx',
  'template': true
}, {
  'title': 'ember',
  'template': true
}, {
  'title': 'vim',
  'template': true
}, {
  'title': 'emacs',
  'template': true
}, {
  'title': 'backbonejs',
  'template': true
}, {
  'title': 'jwt',
  'template': true
}, {
  'title': 'zend',
  'template': true
}, {
  'title': 'amazon web services',
  'template': true
}, {
  'title': 'amazon s3',
  'template': true
}, {
  'title': 'groovy',
  'template': true
}, {
  'title': 'react native',
  'template': true
}, {
  'title': 'drupal',
  'template': true
}, {
  'title': 'joomla',
  'template': true
}, {
  'title': 'flask',
  'template': true
}, {
  'title': 'ssh',
  'template': true
}, {
  'title': 'graphql',
  'template': true
}, {
  'title': 'mongoose',
  'template': true
}, {
  'title': 'cli',
  'template': true
}, {
  'title': 'devops',
  'template': true
}, {
  'title': 'frontend',
  'template': true
}, {
  'title': 'backend',
  'template': true
}, {
  'title': 'security',
  'template': true
}, {
  'title': 'continuous deployment',
  'template': true
}, {
  'title': 'travis ci',
  'template': true
}, {
  'title': 'angular 1.5',
  'template': true
}, {
  'title': 'angular 2',
  'template': true
}, {
  'title': 'solr',
  'template': true
}, {
  'title': 'tcp',
  'template': true
}, {
  'title': 'http2',
  'template': true
}, {
  'title': 'tensorflow',
  'template': true
}, {
  'title': 'lisnr',
  'template': true
}, {
  'title': 'lisp',
  'template': true
}, {
  'title': 'npm',
  'template': true
}, {
  'title': 'rspec',
  'template': true
}, {
  'title': 'concurrency',
  'template': true
}, {
  'title': 'orm',
  'template': true
}, {
  'title': 'neo4j',
  'template': true
}, {
  'title': 'clojure',
  'template': true
}, {
  'title': 'webpack',
  'template': true
}, {
  'title': 'webpack 2',
  'template': true
}, {
  'title': 'websockets',
  'template': true
}, {
  'title': 'kendo',
  'template': true
}, {
  'title': 'lua',
  'template': true
}, {
  'title': 'cassandra',
  'template': true
}, {
  'title': 'sass',
  'template': true
}, {
  'title': 'scss',
  'template': true
}, {
  'title': 'less',
  'template': true
}, {
  'title': 'coldfusion',
  'template': true
}, {
  'title': 'f#',
  'template': true
}, {
  'title': 'hive',
  'template': true
}, {
  'title': 'socket.io',
  'template': true
}, {
  'title': 'linux kernal',
  'template': true
}, {
  'title': 'mapreduce',
  'template': true
}, {
  'title': 'gulp',
  'template': true
}, {
  'title': 'grunt',
  'template': true
}, {
  'title': 'internationalization',
  'template': true
}, {
  'title': 'neural network',
  'template': true
}, {
  'title': 'erlang',
  'template': true
}, {
  'title': 'mercurial',
  'template': true
}, {
  'title': 'cors',
  'template': true
}, {
  'title': 'jasper',
  'template': true
}, {
  'title': 'rabbitmq',
  'template': true
}, {
  'title': 'pip',
  'template': true
}, {
  'title': 'g++',
  'template': true
}, {
  'title': 'dns',
  'template': true
}, {
  'title': 'log4j',
  'template': true
}, {
  'title': 'sonarqube',
  'template': true
}, {
  'title': 'ansible',
  'template': true
}, {
  'title': 'redis',
  'template': true
}, {
  'title': 'mariadb',
  'template': true
}, {
  'title': 'pascal',
  'template': true
}, {
  'title': 'handlebars',
  'template': true
}, {
  'title': 'markdown',
  'template': true
}, {
  'title': 'ethereum',
  'template': true
}, {
  'title': 'adobe cc',
  'template': true
}, {
  'title': 'sketch',
  'template': true
}, {
  'title': 'balsamiq',
  'template': true
}, {
  'title': 'ux',
  'template': true
}, {
  'title': 'ui',
  'template': true
}, {
  'title': 'cx',
  'template': true
}, {
  'title': 'gzip',
  'template': true
}, {
  'title': 'accessibility',
  'template': true
}, {
  'title': 'game design',
  'template': true
}, {
  'title': 'game logic',
  'template': true
}, {
  'title': 'bemcss',
  'template': true
}, {
  'title': 'smacss',
  'template': true
}, {
  'title': 'robotics',
  'template': true
}, {
  'title': 'bots',
  'template': true
}, {
  'title': 'bitcoin',
  'template': true
}, {
  'title': 'blockchain',
  'template': true
}, {
  'title': 'continuous integration',
  'template': true
}, {
  'title': 'objective c',
  'template': true
}, {
  'title': 'C',
  'template': true
}, {
  'title': 'windows',
  'template': true
},
{
  'title': 'user research',
  'template': true
}]

const skillDictionary = mapSkills(skillList)

module.exports = skillDictionary
