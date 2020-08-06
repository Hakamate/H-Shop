<template>
    <div>
        LogOut
    </div>
</template>
<script>
export default {
  middleware: 'auth',
  mounted(){
    try {
      this.$auth.logout()
      this.printNotification('success','Success', "You are now disconnected")
    } catch (error) {
      this.printNotification('error','Error', error.message)
    }
  }
}
</script>