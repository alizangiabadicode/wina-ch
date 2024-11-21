<template>
  <div class="card space-x-2.5">
    <Button :to="{
      path: '/room'
    }">
      rooms
    </Button>
    <Button :to="{
      path: '/guest'
    }">
      guests
    </Button>
  </div>
</template>

<script setup lang="ts">
import {Button} from '@components/ui'
</script>