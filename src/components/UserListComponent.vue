<template>
  <section>
    <ul class="userlist">
      <li v-for="user in users" :key="user.id">
        <div class="user-info">
          <img
            width="48"
            height="48"
            :src="user.img"
            :alt="user.firstname + ' ' + user.lastname"
          />
            {{ user.firstname + ' ' + user.lastname + ' , age: ' + user.age }}
            <slot name="user" :user="user"></slot>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

