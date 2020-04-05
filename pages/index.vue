<template>
  <div>
    <client-only>
      <!-- floating links -->
      <div
        id="links"
        class="fixed top-24 right-24"
      >
        <a
          href="https://github.com/OriginalYellow"
          target="_blank"
          class="cursor-pointer"
        >
          <mdi-github class="w-16 h-16 md:w-24 md:h-24 mr-4 md:mr-0 md:mb-8 inline md:block" />
        </a>
        <a
          href="https://docs.google.com/document/d/1TrOl_7SPbt52WH47M0SHidCBC5nzhg_cBnHirUqCTDY/edit?usp=sharing"
          target="_blank"
          class="cursor-pointer"
        >
          <mdi-file-account class="w-16 h-16 md:w-24 md:h-24 inline md:block" />
        </a>
      </div>

      <!-- page body -->
      <full-page
        ref="fullpage"
        :options="options"
      >
        <!-- intro section -->
        <div class="section">
          <div :class="containerClass">
            <div class="md:mb-0 mb-24">
              <h1 :class="largeHeadlineClass">
                hi, <br v-if="$mq === 'sm'">i'm mike
              </h1>
              <p
                :class="{
                  'h5': ($mq === 'md') || ($mq === 'lg') || ($mq === 'xl'),
                  'body': ($mq === 'sm') || ($mq === 'default') }
                "
              >
                And I like to build things.
              </p>
            </div>

            <lego-grid
              class="lg:ml-64 lg:pl-64"
              :lego-bricks="brickList"
              :scaling-factor="scalingFactor"
            />
          </div>
        </div>

        <!-- summary section -->
        <div class="section">
          <div :class="containerClass">
            <h1 :class="largeHeadlineClass">
              what i'm all about
            </h1>
            <p :class="bodyClass">
              {{ summaryBody }}
            </p>
          </div>
        </div>

        <!-- projects section -->
        <div class="section">
          <div class="slide">
            <div :class="containerClass">
              <h1 :class="largeHeadlineClass">
                things <br v-if="$mq === 'sm'">i've built
              </h1>
              <p :class="bodyClass">
                {{ projectsSectionFirstSlideBody }}
              </p>
            </div>
          </div>

          <div
            v-for="project in projects"
            :key="project.name"
            class="slide"
          >
            <div :class="containerClass">
              <h2 :class="smallHeadlineClass">
                <a
                  :href="project.link"
                  target="_blank"
                  class="underline"
                >{{ project.name }}</a>
              </h2>
              <p :class="bodyClass">
                {{ project.body }}
              </p>
            </div>
          </div>
        </div>
      </full-page>
    </client-only>
  </div>
</template>

<script>
import MdiFileAccount from '~/assets/file-account.svg'
import MdiGithub from '~/assets/github.svg'
import LegoGrid from '~/components/LegoGrid'
import config from '~/tailwind.config'

export default {
  components: {
    LegoGrid,
    MdiFileAccount,
    MdiGithub
  },

  data () {
    return {
      summaryBody: 'I am a design-conscious full-stack developer who specializes in webapp development. Having worked at a number of startups, my experience also includes roles where I’ve had to wear many different hats – project manager, data architect, product designer, UX designer, and visual designer among others.',
      projectsSectionFirstSlideBody: 'Since I started doing freelance and entrepreneurial work, I have become a “one-man” development and design team, with several live products under my belt so far - the marketing site for an NPO called "Beyond Compassion", and the web app for a premium dating service called "The Society".',
      projects: [
        {
          name: 'thesociety.app',
          link: 'https://thesociety.app/',
          body:
            'I am part of a small and, other than myself, completely non-technical team working on "The Society" - a hands-on matchmaking dating service that offers an alternative to our algorithm-based competitors. I built the companion webapp mostly with vue, vuetify, apollo-server, prisma, mysql, and zeit now. The design is almost entirely my own except for a few things, like the logo and other branding, which were outsourced to a design firm.'
        },
        {
          name: 'bccharity.org',
          link: 'https://bccharity.org/',
          body:
            'I built the marketing site for a charity called "Beyond Compassion" entirely on my own, minus some art and photography assets. The site is built on vue, vuetify, nuxt, zeit now, and I used storyblok for the CMS to give my client the most user-friendly content publishing experience possible.'
        },
        {
          name: 'member.buzz',
          link: 'https://thesociety.app/',
          body:
            "I was one of two full-stack engineers at Member.buzz, where we worked on a live web app of the same name. Member.buzz is site builder similar to squarespace but is also an organization management platform targeted at NPO's and clubs. It is built on ASP.NET MVC, entity framework, Azure, DevExpress, bootstrap, and jQuery. My major contributions were to the WYSIWYG static page builder as well the analytics dashboard."
        }
      ],
      containerClass: 'container pl-8 pr-24 md:px-64',
      options: {
        licenseKey: process.env.FULLPAGE_KEY,
        scrollHorizontallyKey: process.env.SCROLL_HORIZONTALLY_KEY,
        scrollHorizontally: true,
        navigation: true,
        slidesNavigation: true,
        controlArrows: false,
        fixedElements: ['#links'],
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: [
          config.theme.colors.lightGreen,
          config.theme.colors.indigo,
          config.theme.colors.lightRed
        ]
      }
    }
  },

  computed: {
    largeHeadlineClass () {
      return {
        h1: this.$mq === 'md' || this.$mq === 'lg' || this.$mq === 'xl',
        h3: this.$mq === 'sm' || this.$mq === 'default'
      }
    },

    smallHeadlineClass () {
      return {
        h3: this.$mq === 'md' || this.$mq === 'lg' || this.$mq === 'xl',
        h5: this.$mq === 'sm' || this.$mq === 'default'
      }
    },

    bodyClass () {
      return {
        body: this.$mq === 'md' || this.$mq === 'lg' || this.$mq === 'xl',
        'body-2': this.$mq === 'sm' || this.$mq === 'default'
      }
    },

    scalingFactor () {
      switch (this.$mq) {
        case 'sm':
          return 1.8
        default:
          return 2.8
      }
    },

    fullBrickList: () => [
      [
        {
          color: 'light-blue'
        },
        {
          color: 'light-blue'
        },
        {
          color: 'light-blue'
        }
      ],
      [
        {
          color: 'light-blue'
        }
      ],
      [
        {
          color: 'light-blue'
        },
        {
          color: 'light-blue'
        }
      ],
      [
        {
          color: 'light-blue'
        },
        {
          color: 'light-blue'
        },
        {
          color: 'light-blue'
        },
        {
          color: 'light-blue'
        }
      ],
      [
        {
          color: 'light-blue'
        },
        {
          color: 'light-blue'
        },
        {
          color: 'light-blue'
        }
      ],
      [
        {
          color: 'light-blue'
        },
        {
          color: 'light-blue'
        },
        {
          color: 'light-blue'
        },
        {
          color: 'light-blue'
        },
        {
          color: 'light-blue'
        }
      ]
      // [
      //   {
      //     color: 'light-blue'
      //   },
      //   {
      //     color: 'grey'
      //   },
      //   {
      //     color: 'grey'
      //   },
      //   {
      //     color: 'light-blue'
      //   },
      //   {
      //     color: 'light-blue'
      //   },
      //   {
      //     color: 'grey'
      //   }
      // ],
      // [
      //   {
      //     color: 'light-blue'
      //   },
      //   {
      //     color: 'grey'
      //   },
      //   {
      //     color: 'light-blue'
      //   }
      // ]
    ],

    xlBrickList () {
      return this.fullBrickList.slice(0, 6)
    },

    lgBrickList () {
      return this.fullBrickList.slice(0, 4)
    },

    mdBrickList () {
      return this.fullBrickList.slice(0, 3)
    },

    smBrickList () {
      return this.fullBrickList.slice(0, 3)
    },

    brickList () {
      switch (this.$mq) {
        case 'xl':
          return this.xlBrickList
        case 'lg':
          return this.lgBrickList
        case 'md':
          return this.mdBrickList
        case 'sm':
          return this.smBrickList
        case 'default':
          return this.smBrickList
        default:
          throw new Error('something went wrong with the breakpoints...')
      }
    }
  }
}
</script>
