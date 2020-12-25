<template>
  <div class="badge-circle" :style="bgStyle">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="11" width="16" height="2">
        <path d="M19 11H5C4.4 11 4 11.4 4 12C4 12.6 4.4 13 5 13H19C19.6 13 20 12.6 20 12C20 11.4 19.6 11 19 11Z"
              :fill="color"/>
      </mask>
      <g mask="url(#mask1)">
        <rect width="24" height="24" :fill="color"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'black',
    },
    bgColor: {
      type: String,
      default: 'transparent',
    }
  },
  computed: {
    bgStyle: function () {
      return `backgroundColor:${this.bgColor}`;
    }
  }
}
</script>

<style scoped lang="scss">
.badge-circle {
  width: 24px;
  height: 24px;
 border-radius: 50%;
}
</style>