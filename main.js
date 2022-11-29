//кнопка наверх
window.addEventListener('scroll', function() {
    
    let currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currScrollPos2 > 100) {
      document.getElementById('toTop').style.opacity = currScrollPos2/500 ;
    }
    else  {
        document.getElementById('toTop').style.opacity = -currScrollPos2/500 ;
      }
  }
);


//ДЛЯ НЕ АВТОРИЗОВАННЫХ ПОЛЬЗОВАТЕЛЕЙ
function no_auth()
{
alert('Вам не доступен этот раздел, пожалуйста, авторизуйтесь!');
}