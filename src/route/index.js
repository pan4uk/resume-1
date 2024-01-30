// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

//=================================================================
var header = {
  name: {
    firstname: "Dmytro",
    lastname: "Ivanov",
  },
  position: "Junior Fullstack JS Developer",

  salary: "600$ в місяць",

  address: "Ukrain, Kyev, Khreshatyk 1, 01001",
}

var footer = {
  social: {
    email: {
      text: "ivanov@mail.com",
      href: "mailto:ivanov@mail.com",
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123'
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/summary', function (req, res) {
  res.render('summary', {

    page: {
      title: "Resume | Summary",
    },
    header,

    main: {
      summary: {
        title: "Summary",
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },

      experience: {
        title: "Other experience",
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})


router.get('/skills', function (req, res) {
  res.render('skills', {

    page: {
      title: "Resume | Skills",
    },

    header,

    main: {
      skills: [
        {
          name: "HTML",
          point: 10,
          isTop: true,
        },
        {
          name: "Handlebars",
          point: 10,
          isTop: true,
        },
        {
          name: "VS Code",
          point: 9,
        },
        {
          name: "Git",
          point: 8,
        },
        {
          name: "erminal",
          point: 8,
        },
        {
          name: "NPM",
          point: 9,
        },
        {
          name: "React.js",
          point: 0,
        },
        {
          name: "PHP",
          point: null,
        },
      ],

      hobbies: [
        {
          name: "books",
          isMain: true,
        },
        {
          name: "football",
          isMain: true,
        },
        {
          name: "plains",
          isMain: false,
        },
      ],
    },

    footer,
  })
})


router.get('/education', function (req, res) {
  res.render('education', {

    page: {
      title: "Resume | Education",
    },

    header,

    main: {
      educations: [
        {
          name: "School №1",
          isEnd: true,
        },
        {
          name: "College of Tech",
          isEnd: true,
        },
        {
          name: "University of System",
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: "Main",
          id: 2356,
        },
        {
          name: "Second",
          id: 3567,
        },
        {
          name: "First",
          id: 2456,
        },
      ]
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  res.render('work', {

    layout: 'big',

    page: {
      title: "Resume | Education",
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: null,
          },
          duration: {
            from: '01.10.2023',
            to: null,
          },

          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: '#',
              about: 'My first project story',
              stack: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Big award',
                },
                {
                  name: 'Small award',
                },
              ],
              stackAmount: 3,

              awardAmount: 5,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
