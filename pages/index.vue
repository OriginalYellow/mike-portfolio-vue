<template>
  <div>
    <client-only>
      <full-page
        ref="fullpage"
        :options="options"
      >
        <div class="section">
          <div class="container px-16 md:px-64">
            <div class="md:mb-0 mb-24">
              <h1 :class="{'h1': ($mq === 'md') || ($mq === 'lg') || ($mq === 'xl'), 'h3': ($mq === 'sm') || ($mq === 'default') }">
                hi, <br v-if="$mq === 'sm'">i'm mike
              </h1>
              <p :class="{'h5': ($mq === 'md') || ($mq === 'lg') || ($mq === 'xl'), 'body': ($mq === 'sm') || ($mq === 'default') }">
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

        <div class="section">
          <div class="container px-16 md:px-64">
            <h1 :class="{'h1': ($mq === 'md') || ($mq === 'lg') || ($mq === 'xl'), 'h3': ($mq === 'sm') || ($mq === 'default') }">
              what i'm all about
            </h1>
            <p :class="{'body': ($mq === 'md') || ($mq === 'lg') || ($mq === 'xl'), 'body-2': ($mq === 'sm') || ($mq === 'default') }">
              I am a design-conscious developer who specializes in advanced UI and front-end programming. I’ve often had to dive into the more advanced aspects of UI programming with different frameworks, platforms, and languages in order to execute a designer’s vision, and I love the challenge. Having worked at a number of startups, my experience also includes roles where I’ve had to wear many different hats – project manager, data architect, product designer, UX designer, and visual designer among others.
            </p>
          </div>
        </div>

        <div class="section">
          <div class="slide">
            <div class="container px-16 md:px-64">
              <h1 :class="{'h1': ($mq === 'md') || ($mq === 'lg') || ($mq === 'xl'), 'h3': ($mq === 'sm') || ($mq === 'default') }">
                things <br v-if="$mq === 'sm'">i've built
              </h1>
              <p :class="{'body': ($mq === 'md') || ($mq === 'lg') || ($mq === 'xl'), 'body-2': ($mq === 'sm') || ($mq === 'default') }">
                Since I started doing freelance and entrepreneurial work, I have become a “one-man” development and design team, with several live products under my belt so far - the marketing site for an NPO called "Beyond Compassion", and the web app for a premium dating service called "The Society".
              </p>
            </div>
          </div>
          <div class="slide">
            <div class="container px-16 md:px-64">
              <h2 :class="{'h3': ($mq === 'md') || ($mq === 'lg') || ($mq === 'xl'), 'h5': ($mq === 'sm') || ($mq === 'default') }">
                <a
                  href="https://thesociety.app/"
                  target="_blank"
                >thesociety.app</a>
              </h2>
              <p :class="{'body': ($mq === 'md') || ($mq === 'lg') || ($mq === 'xl'), 'body-2': ($mq === 'sm') || ($mq === 'default') }">
                I am part of a small and, other than myself, completely non-technical team working on "The Society" - a hands-on matchmaking dating service that offers an alternative to our algorithm-based competitors. I built the companion webapp mostly with vue, vuetify, apollo-server, prisma, mysql, and zeit now. The design is almost entirely my own except for a few things, like the logo and other branding, which were outsourced to a design firm.
              </p>
            </div>
          </div>
          <div class="slide">
            <div class="container px-16 md:px-64">
              <h2 :class="{'h3': ($mq === 'md') || ($mq === 'lg') || ($mq === 'xl'), 'h5': ($mq === 'sm') || ($mq === 'default') }">
                <a
                  href="https://bccharity.org/"
                  target="_blank"
                >bccharity.org</a>
              </h2>
              <p :class="{'body': ($mq === 'md') || ($mq === 'lg') || ($mq === 'xl'), 'body-2': ($mq === 'sm') || ($mq === 'default') }">
                I built the marketing site for a charity called "Beyond Compassion" entirely on my own, minus some art and photography assets. The site is built on vue, vuetify, nuxt, zeit now, and I used storyblok for the CMS to give my client the most user-friendly content publishing experience possible.
              </p>
            </div>
          </div>
          <div class="slide">
            <div class="container px-16 md:px-64">
              <h2 :class="{'h3': ($mq === 'md') || ($mq === 'lg') || ($mq === 'xl'), 'h5': ($mq === 'sm') || ($mq === 'default') }">
                <a
                  href="https://member.buzz/"
                  target="_blank"
                >member.buzz</a>
              </h2>
              <p :class="{'body': ($mq === 'md') || ($mq === 'lg') || ($mq === 'xl'), 'body-2': ($mq === 'sm') || ($mq === 'default') }">
                I was one of two full-stack engineers at Member.buzz, where we worked on a live web app of the same name. Member.buzz is site builder similar to squarespace but is also an organization management platform targeted at NPO's and clubs. It is built on ASP.NET MVC, entity framework, Azure, DevExpress, bootstrap, and jQuery. My major contributions were to the WYSIWYG static page builder as well the analytics dashboard.
              </p>
            </div>
          </div>
          <!-- <div class="container px-16 md:px-64">
            <h1 :class="{'h1': ($mq === 'md') || ($mq === 'lg') || ($mq === 'xl'), 'h3': ($mq === 'sm') || ($mq === 'default') }">
              stuff i've built
            </h1>
            <p :class="{'body': ($mq === 'md') || ($mq === 'lg') || ($mq === 'xl'), 'body-2': ($mq === 'sm') || ($mq === 'default') }">
              [coming soon]
            </p>
          </div> -->
        </div>
      </full-page>
    </client-only>
  </div>
</template>

<script>
import LegoGrid from '~/components/LegoGrid'
import config from '~/tailwind.config'

export default {
  components: {
    LegoGrid
  },

  data () {
    return {
      options: {
        licenseKey: process.env.FULLPAGE_KEY,
        scrollHorizontallyKey: process.env.SCROLL_HORIZONTALLY_KEY,
        scrollHorizontally: true,
        navigation: true,
        slidesNavigation: true,
        controlArrows: false,
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
    scalingFactor () {
      switch (this.$mq) {
        case 'sm':
          return 2
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
      return this.fullBrickList.slice(0, 2)
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
