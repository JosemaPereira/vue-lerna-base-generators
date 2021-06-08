<template>
    <helloWorldComponent/>
</template>

<script>
const helloWorldComponent = () => import('@/components/HelloWorld.vue');

export default {
  name: 'Home',
  components: {
    helloWorldComponent
  }
}
</script>
