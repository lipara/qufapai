import SearchBar from '@/components/SearchBar'
import LayoutList from "@/components/layout/LayoutList"
import Pagination from "@/components/pagination"
import { PAGE_PARAMS } from "@/utils/constants"

export default {
  components: {
    LayoutList,
    Pagination,
    SearchBar
  },
  data () {
    return {
      pagination: Object.assign({}, PAGE_PARAMS),
      table: {
        loading: false,
        data: [],
        columns: []
      },
      form: {}
    }
  },
  watch: {
    doNotUse (now) {
      this.table.height = now
    }
  },
  created() {
    // 当表单有默认值，我们需要把它赋值给 this.form
    if (this.searchData) {
      this.searchData.content.forEach(item => {
        item.default && (this.form[item.key] = item.default)
      })
    }
    // 自动处理表格的列字段
    this.columns && (this.table.columns = this.columns)
  },
  methods: {
    // 查询
    searchEvent (query, immediate) {
      this.form = query
      typeof this.processForm === 'function' && this.processForm()
      if (immediate) {
        this.pagination.pageNum = 1
        this.loadData(true)
      }
    },
    // 从新计算分页，避免出现空数据
    conditionPage () {
      const total = this.pagination.total
      if (total > 10 && (total - 1) % 10 === 0) {
        this.pagination.pageNum--
      }
    },
    // 给下拉框的 options 赋值
    assignOptions (searchData, key, list) {
      searchData.content.forEach(item => {
        if (item.key === key) {
          item.options = list
        }
      })
    },
    // 监听操作事件
    actionEvent (key) {
      typeof this[key] === 'function' && this[key]()
    },
    // 根据key创建新对象
    createFrom (origin, keys) {
      const res = {}
      keys.forEach(key => {
        res[key] = origin[key]
      })
      return res
    }
  }
}
