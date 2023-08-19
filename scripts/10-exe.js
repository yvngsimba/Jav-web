  //10.c
  const test = document.querySelector('.js-button');

  if (test.classList.contains('js-button')) {
    console.log('ayo');
  }
  //10.c

  //10.d
  const toggled = document.querySelector('.button');
  const toggled2 = document.querySelector('.button2');
  const toggled3 = document.querySelector('.button3');

  function getToggled() {
    if (!toggled.classList.contains('is-toggled')) {
      toggled.classList.add('is-toggled');
    } else {
      toggled.classList.remove('is-toggled');
    }
  }

  function getToggled2() {
    if (!toggled2.classList.contains('is-toggled')) {
      toggled2.classList.add('is-toggled');
    } else {
      toggled2.classList.remove('is-toggled');
    }
  }
  //10.e & f
  function getToggled3() {
    if (!toggled3.classList.contains('is-toggled')) {
      toggled3.classList.add('is-toggled');
    } else {
      toggled3.classList.remove('is-toggled');
    }
  }
//10g.
  function restrictButtons() {
    if (toggled.classList.contains('is-toggled')) {
      toggled2.classList.remove('is-toggled');
      toggled3.classList.remove('is-toggled');
    } else if (toggled2.classList.contains('is-toggled')) {
      toggled.classList.remove('is-toggled');
      toggled3.classList.remove('is-toggled');
    } else if (toggled3.classList.contains('is-toggled')) {
      toggled2.classList.remove('is-toggled');
      toggled.classList.remove('is-toggled');
    }
  }