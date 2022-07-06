var theme = document.getElementById("highlight-theme");

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  theme.href = "https://testingcf.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/styles/github-dark-dimmed.min.css";
}

if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  theme.href = "https://testingcf.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/styles/github.min.css";
}

let listeners = {
  dark: (mediaQueryList) => {
    if (mediaQueryList.matches) {
      theme.href = "https://testingcf.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/styles/github-dark-dimmed.min.css";
    }
  },
  light: (mediaQueryList) => {
    if (mediaQueryList.matches) {
      theme.href = "https://testingcf.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/styles/github.min.css";
    }
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addListener(listeners.dark)
window.matchMedia('(prefers-color-scheme: light)').addListener(listeners.light)
