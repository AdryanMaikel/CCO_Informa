const TITLE = document.title;

alter_title = (event) => {
  document.title = event === 'blur' ? 'Não me abandone! 😭' : TITLE
}

window.addEventListener('blur', () => alter_title('blur'))
window.addEventListener('focus', () => alter_title('focus'))
