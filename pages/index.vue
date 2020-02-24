<template>
  <div>
    <client-only>
      <full-page
        ref="fullpage"
        :options="options"
      >
        <div class="section">
          <div class="">
            <div class="container mx-auto md:px-32 px-8">
              <div class="flex justify-between py-24">
                <div :style="{width: '100%'}">
                  <p class="h3">
                    hi, i'm mike
                  </p>
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

          <!-- <button
            class="next"
            @click="$refs.fullpage.api.moveSectionDown()"
          >
            Next
          </button>
          <p class="font-body">
            Section 1
          </p> -->
        </div>
        <div class="section">
          <button
            class="prev"
            @click="$refs.fullpage.api.moveSectionUp()"
          >
            Prev
          </button>
          Section 2
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
      scalingFactor: 0.9,
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
      ]
    ],

    mdBrickList () {
      return this.fullBrickList.slice(0, 4)
    },

    smBrickList () {
      return this.fullBrickList.slice(0, 3)
    },

    brickList () {
      console.log(`$mq is ${this.$mq}`)

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
