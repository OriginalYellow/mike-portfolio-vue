<template>
  <div>
    <client-only>
      <full-page
        ref="fullpage"
        :options="options"
      >
        <div class="section">
          <button
            class="next"
            @click="$refs.fullpage.api.moveSectionDown()"
          >
            Next
          </button>
          Section 1
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
export default {
  data () {
    return {
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
  }
}
</script>
