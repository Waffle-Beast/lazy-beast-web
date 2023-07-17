const buttons = document.querySelectorAll('.choice-btn');
const section = document.querySelector('.goals');
const main_block = document.querySelector('.choice__block');
const info = document.querySelector('.appearing__info');
const infos = ['info-1', 'info-2', 'info-3', 'info-4'];
const info_blocks = infos.map(info => document.querySelector(`.${info}`));
const infos_nums = infos.map(info => {
  return info
    .split('-')
    .filter(Number)
    .sort()
    .join('');
});


for (let button of buttons) {
  const value = button.dataset.value;

  button.onclick = () => {
    let if_active = activeCheck(buttons);
    let btn_contains_active = button.classList.contains('active');

    for (let i = 0; i <= 4; i++) {
      if (value == infos_nums[i] && !btn_contains_active) {
        if (if_active.includes(true)) return;

        blockAppear(button, info_blocks[i]);
      } else if (value == infos_nums[i] && btn_contains_active) {
        blockDisappear(button, info_blocks[i]);
      }
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
