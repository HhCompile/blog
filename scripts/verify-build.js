/**
 * 构建产物验证脚本
 * 确保关键文件在构建后存在
 */
const fs = require('fs')
const path = require('path')

const DIST = path.resolve(__dirname, '../docs/.vitepress/dist')

const requiredFiles = [
  'index.html',
  'feed.rss',
  'sitemap.xml',
  'favicon.ico',
  'pagefind/pagefind.js'
]

let hasError = false

console.log('🔍 验证构建产物...\n')

for (const file of requiredFiles) {
  const fullPath = path.join(DIST, file)
  const exists = fs.existsSync(fullPath)
  const icon = exists ? '✅' : '❌'
  const status = exists ? '存在' : '缺失'
  console.log(`${icon} ${file} — ${status}`)
  if (!exists) hasError = true
}

if (hasError) {
  console.log('\n❌ 验证失败，部分关键文件缺失')
  process.exit(1)
} else {
  console.log('\n✅ 所有关键文件验证通过')
  process.exit(0)
}
