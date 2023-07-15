const buttons = document.querySelectorAll('.choice-btn');
const section = document.querySelector('.goals');
const main_block = document.querySelector('.choice__block');
const info = document.querySelector('.appearing__info');

const info_1 = document.querySelector('.info-1');
const info_2 = document.querySelector('.info-2');
const info_3 = document.querySelector('.info-3');
const info_4 = document.querySelector('.info-4');

for (let button of buttons) {
  const value = button.dataset.value;

  button.onclick = () => {
    let if_active = activeCheck(buttons);

    if (value == '1' && !button.classList.contains('active')) {
      if (if_active.includes(true)) return;

      blockAppear(button, info_1);
    } else if (value == '1' && button.classList.contains('active')) {
      blockDisappear(button, info_1);
    } else if (value == '2' && !button.classList.contains('active')) {
      if (if_active.includes(true)) return;

      blockAppear(button, info_2);
    } else if (value == '2' && button.classList.contains('active')) {
      blockDisappear(button, info_2);
    } else if (value == '3' && !button.classList.contains('active')) {
      if (if_active.includes(true)) return;

      blockAppear(button, info_3);
    } else if (value == '3' && button.classList.contains('active')) {
      blockDisappear(button, info_3);
    } else if (value == '4' && !button.classList.contains('active')) {
      if (if_active.includes(true)) return;

      blockAppear(button, info_4);
    } else if (value == '4' && button.classList.contains('active')) {
      blockDisappear(button, info_4);
    }
  }
}

function blockAppear(button, block_info) {
  main_block.style.height = '800px';
  info.style.display = 'flex';
  block_info.style.display = 'flex'
  button.style.scale = '110%'

  setTimeout(() => {
    info.style.opacity = 1;
  }, 300);

  button.classList.add('active');
};

function blockDisappear(button, block_info) {
  main_block.style.height = '185px';
  info.style.opacity = 0;
  button.style.scale = '100%'

  setTimeout(() => {
    info.style.display = 'none';
  }, 500)
  
  setTimeout(() => {
    block_info.style.display = 'none'
    button.classList.remove('active');
  }, 1000)
}

function activeCheck(buttons) {
  let active_check = [];

  for (let button of buttons) {
    if (button.classList.contains('active')) {
      active_check.push(true);
    } else {
      active_check.push(false);
    }
  }

  return active_check;
}
