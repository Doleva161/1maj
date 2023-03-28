/*const email = prompt('Zadejte vaši e-mailovou adresu.');
const odstavecElm = document.querySelector('#msg');

if (validator.isEmail(email) === true) {
  document.body.innerHTML = 'Ano, jedná se o platný e-mail.';
  odstavecElm.classList.add('msg--valid');
} else {
  document.body.innerHTML = 'Toto není platný e-mail.';
  odstavecElm.classList.add('msg--invalid');
}
*/

const maj = dayjs('2023 - 05 - 01');
const now = dayjs();
const bodyElm = document.querySelector('body');

if (now < maj) {
  document.body.innerHTML = 'Ještě si počkej!';
  bodyElm.classList.add('msg--invalid');
  bodyElm.style.textAlign = 'center';
  bodyElm.style.marginTop = '200px';
  bodyElm.style.fontSize = '100px';
} else if (now === maj) {
  document.body.innerHTML = 'Je první máj!';
  bodyElm.classList.add('msg--valid');
  bodyElm.style.textAlign = 'center';
  bodyElm.style.marginTop = '200px';
  bodyElm.style.fontSize = '100px';
} else if (now > maj) {
  document.body.innerHTML = 'První máj už byl!';
  bodyElm.classList.add('msg--invalid');
  bodyElm.style.textAlign = 'center';
  bodyElm.style.marginTop = '200px';
  bodyElm.style.fontSize = '100px';
}
