import './style.scss'
import './MainLayout'

chrome.contextMenus.create({
  title: "Wordster",
  type: "normal",
  enabled: true,
  visible: true,
  id: "Wordster-menu",
  onclick(info, tab) {
    console.log(info, tab)
  },
})