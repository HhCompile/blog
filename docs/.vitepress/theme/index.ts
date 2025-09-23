import BlogTheme from '@sugarat/theme'

// 自定义样式重载
import './style.scss'

// 自定义主题色
// import './user-theme.css'

if (typeof window !== 'undefined') {
  console.log('%c🚢 Code 霞光社已启航', 'font-size:20px;color:#3eaf7c')
  console.log('输入secret()开启隐藏任务')
  window.secret = () => alert('找到你了！')
}

export default BlogTheme
