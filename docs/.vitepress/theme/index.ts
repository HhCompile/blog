import BlogTheme from '@sugarat/theme'

// 自定义样式重载
import './style.scss'

// 自定义主题色
// import './user-theme.css'

if (typeof window !== 'undefined') {
  window.secret = () => alert('找到你了！')
}

export default BlogTheme
