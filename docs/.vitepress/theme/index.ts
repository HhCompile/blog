import DefaultTheme from 'vitepress/theme'
import './style.scss'

if (typeof window !== 'undefined') {
  window.secret = () => alert('找到你了！')
}

export default DefaultTheme
