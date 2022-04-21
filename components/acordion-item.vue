<template>
    
</template>
<script>
export default {
     props: ['item'],
  data: () => ({
    isOpen: false,
  }),
  template: `<div class="accordion-item" :class="{open: isOpen}">
    <div class="accordion-header" @click="isOpen = !isOpen">
      {{item.title}}
      <i class="fas fa-caret-down"></i>
    </div>
    <div class="accordion-body">
      {{item.text}}
    </div>
  </div>`,

}
</script>