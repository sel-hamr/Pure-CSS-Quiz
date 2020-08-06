class Questions {
  constructor(id, question, choose1, choose2, choose3) {
    this.id = id;
    this.question = question;
    this.choose1 = choose1;
    this.choose2 = choose2;
    this.choose3 = choose3;
  }
  check(test) {
    if (this.id == test) return 1;
    else return 0;
  }
}

let array = [{
    id: 1,
    question: 'react is fremwork is',
    choose: ['php', 'js', 'html'],
  },
  {
    id: 1,
    question: 'html is ',
    choose: ['langage of programation', 'Hyper Text Markup Language', 'sport'],
  },
  {
    id: 1,
    question: 'bootsrap last version is ',
    choose: ['V8', 'V4', 'V2'],
  },
  {
    id: 1,
    question: 'react developer',
    choose: ['Google', 'Facebook', 'Microsoft'],
  },
  {
    id: 1,
    question: 'Tag of javascript',
    choose: ['js', 'script', 'javascript'],
  },
  {
    id: 1,
    question: 'declare array javascript ? ',
    choose: ['let array = ()', 'let array = []', 'let array = {}'],
  },
  {
    id: 1,
    question: 'What is ECMAScript 6?',
    choose: ['langage of programation', 'update of js', 'update of css'],
  },
  {
    id: 1,
    question: 'Vue Is ?',
    choose: ['langage of programation', 'framwork of js', 'framwork of css'],
  },
  {
    id: 1,
    question: 'what is false in declaration in js?',
    choose: ['let  i', 'int i', 'const i'],
  },
  {
    id: 1,
    question: 'what is true in declaration in js?',
    choose: ['char i', 'var i', 'int i'],
  },
];
random_item(array)
let name_questions = [];
let score = [];
let i = 0;
let char;
while (i < array.length) {
  name_questions[i] = new Questions(
    array[i].id,
    array[i].question,
    array[i].choose[0],
    array[i].choose[1],
    array[i].choose[2],
    array[i].choose[3]
  );
  i++;
}
name_questions.forEach(() => {
  CreateQuestions();
});
ctreat_step(name_questions.length);
let array_questions = Array.from(document.querySelectorAll('.questions'));
let arr;
let z = 1;
let z1 = 0;
i = 0;
let r1 = [1, 2, 3];
array_questions.forEach((elemt) => {
  elemt.setAttribute('data-index', i);
  arr = Array.from(elemt.children);
  arr[0].innerHTML = name_questions[i].question;
  arr[1].children[1].innerHTML = name_questions[i].choose1;
  arr[2].children[1].innerHTML = name_questions[i].choose2;
  arr[3].children[1].innerHTML = name_questions[i].choose3;
  random_item(r1);
  while (z < 4) {
    arr[z].style.order = r1[z1];
    console.log(arr[z].children[0]);
    if (r1[z1] == 1) char = document.createTextNode('A');
    else if (r1[z1] == 2) char = document.createTextNode('B');
    else char = document.createTextNode('C');
    arr[z].children[0].appendChild(char);
    z++;
    z1++;
  }
  z = 1;
  z1 = 0;
  i++;
});

let test = Array.from(document.querySelectorAll('.questions .choose'));

let index;
let j = 1;
show(0);
step(0);
test.forEach((elemt) => {
  elemt.onclick = () => {
    index = elemt.parentElement.getAttribute('data-index');
    show(j);
    step(j);
    score.push(name_questions[j - 1].check(elemt.getAttribute('data-answer')) * 10);
    if (j < name_questions.length) j++;
    else {
      totalScore(somme(...score));
      show(-1);
    }
  };
});

function show(index) {
  if (index < array_questions.length)
    document.querySelector('.head .count_Q').innerHTML = `QUESTION ${index + 1} OF ${name_questions.length}`;
  else {
    document.querySelector('.head .count_Q').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
  }
  array_questions.forEach((elemt) => {
    if (elemt.getAttribute('data-index') == index) elemt.setAttribute('class', 'questions a')
    else {
      if (index > elemt.getAttribute('data-index')) elemt.setAttribute('class', 'questions da2')
      else elemt.setAttribute('class', 'questions da1')
    }

  });
  if (index == -1) {
    document.querySelector('.endgame').setAttribute('class', 'endgame score');
    document.querySelector('.endgame p:nth-of-type(2) spam').classList.add('activeAnimation');
  }
}

function CreateQuestions() {
  let div_questions = document.createElement('div');
  div_questions.setAttribute('class', 'questions');
  let p_question = document.createElement('p');
  p_question.setAttribute('class', 'question');
  let i = 0;
  div_questions.appendChild(p_question);
  let div_choose;
  let div;
  let p;

  while (i < 3) {
    div_choose = document.createElement('div');
    div_choose.setAttribute('class', 'choose');
    div_choose.setAttribute('data-answer', i);
    div = document.createElement('div');
    div_choose.appendChild(div);
    p = document.createElement('p');
    div_choose.appendChild(p);
    div_questions.appendChild(div_choose);
    i++;
  }
  let list = document.querySelector('.containers');
  list.insertBefore(div_questions, list.lastElementChild);
}

function ctreat_step(index) {
  let i = 0;
  let div_step;
  let div_firstline;
  let div_circal;
  let char;
  while (i < index) {
    div_step = document.createElement('div');
    div_step.setAttribute('class', 'step');
    div_firstline = document.createElement('div');
    div_firstline.setAttribute('class', 'firstline');
    div_circal = document.createElement('div');
    div_circal.setAttribute('class', 'circal');
    if (i != 0) {
      div_step.appendChild(div_firstline);
    }
    char = document.createTextNode(i);
    div_circal.appendChild(char);
    div_step.appendChild(div_circal);
    document.querySelector('.footer').appendChild(div_step);
    i++;
  }
}

function step(i) {
  let array_step = Array.from(document.querySelectorAll('.step'));
  if (i == 0) {
    array_step[i].children[0].style.border = '1.5px solid #f3c623';
  } else if (i == name_questions.length - 1) {
    array_step[i].children[1].style.border = '1.5px solid #f3c623';
    array_step[i].children[0].style.backgroundColor = '#f3c623';
  } else if (i < name_questions.length - 1) {
    array_step[i].children[0].style.backgroundColor = '#f3c623';
    array_step[i].children[1].style.border = '1.5px solid #f3c623';
  }
}

function somme(...tab) {
  let count = 0;
  tab.forEach(function (item) {
    count = count + parseInt(item);
  });
  return count;
}

function totalScore(score) {
  document.querySelector('.endgame p:nth-of-type(2) spam').innerHTML = ' ' + score + '%';
}

function random_item(array) {
  let randam;
  let temp;
  let count = array.length;
  while (--count > 0) {
    randam = Math.floor(Math.random() * count);
    temp = array[count];
    array[count] = array[randam];
    array[randam] = temp;
  }
  return array;
}

document.querySelector('.endgame div:nth-of-type(1)').onclick = function () {
  location.reload();
}