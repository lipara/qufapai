import { redirect } from "@/utils/helper"
import { mapGetters } from "vuex"

const Redirect = {

  data() {
    return {
      aposFlag: this.$route.query.apos ? true : false,
      aposRedirectUrl: this.$route.query.apos || ""
    }
  },

  computed: {

  },

  methods: {
    redirectApos() {
      redirect(decodeURIComponent(this.aposRedirectUrl))
    }
  }

}

export default Redirect