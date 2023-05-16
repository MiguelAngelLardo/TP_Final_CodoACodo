var lis = document.querySelectorAll('li');
lis.forEach(li => {
  var adicional = li.querySelector('.adicional');
  li.addEventListener('mousehover', () => {
    adicional.style.display = (adicional.style.display === 'none') ? 'block' : 'none';
  });
});