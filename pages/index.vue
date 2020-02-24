<template>
  <div>
    <client-only>
      <full-page
        ref="fullpage"
        :options="options"
      >
        <div class="section">
          <div class="container mx-auto md:px-32 px-8">
            <div class="flex justify-between py-24">
              <div :style="{width: '100%'}">
                <h1 class="h4">
                  hi, i'm mike
                </h1>
                <p class="body">
                  And I like to build things.
                </p>
              </div>
              <div
                :style="{width: '100%'}"
                class="flex flex-col justify-center"
              >
                <lego-grid
                  class="mx-auto"
                  :lego-bricks="brickList"
                  :scaling-factor="scalingFactor"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="mx-auto py-32 container mx-auto md:px-32 px-8">
            <div class="flex justify-around">
              <div>
                <div class="flex flex-col justify-center h-full">
                  <h1 class="text-grey-darkest h4">
                    what i'm all about
                  </h1>
                  <p class="text-grey-darkest body">
                    I am a design-conscious developer who specializes in advanced UI and front-end programming. I’ve often had to dive into the more advanced aspects of UI programming with different frameworks, platforms, and languages in order to execute a designer’s vision, and I love the challenge. Having worked at a number of startups, my experience also includes roles where I’ve had to wear many different hats – project manager, data architect, product designer, UX designer, and visual designer among others. I have also dabbled in 3D graphics engine programming as a hobby. Oh, and did I mention that I love cooking?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </full-page>
    </client-only>
  </div>
</template>

<script>
import LegoGrid from '~/components/LegoGrid'

export default {
  components: {
    LegoGrid
  },

  data () {
    return {
      scalingFactor: 0.7,
      options: {
        licenseKey: process.env.FULLPAGE_KEY,
        navigation: true,
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: [
          '#41b883',
          '#ff5f45',
          '#0798ec',
          '#fec401',
          '#1bcee6',
          '#ee1a59',
          '#2c3e4f',
          '#ba5be9',
          '#b4b8ab'
        ]
      }
    }
  },

  computed: {
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
      ]
    ],

    mdBrickList () {
      return this.fullBrickList.slice(0, 4)
    },

    smBrickList () {
      return this.fullBrickList.slice(0, 3)
    },

    brickList () {
      switch (this.$mq) {
        case 'xl':
        case 'lg':
          return this.fullBrickList
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
