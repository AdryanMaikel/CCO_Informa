const TITLE = document.title

if ('hidden' in document) {
  document.addEventListener('visibilitychange', function() {
    document.hidden ? document.title = 'Não me abandone! 😭' : document.title = TITLE;
  })
} else {
  console.log('Visibility API não suportado.')
}

