import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['model'])
  },
  methods: {
    ...mapActions(['showModel', 'hideModel', 'switchButton'])
  }
}
