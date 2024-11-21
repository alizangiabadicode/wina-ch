<template>
  <component :to="to" :is="getComponent" class="button" v-bind="$attrs">
    <slot/>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
  to?: {
    path: string
  };
}
const props = defineProps<IProps>()

const getComponent = computed(() => {
  if (props.to) {
    return 'router-link'
  } return 'button'
})
</script>