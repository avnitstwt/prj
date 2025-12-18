
const users = [
  {
    name: "Amisha rathore",
    pic: "./assets/aa.jpg",
    bio: "silent chaos in a loud world 🌑 | not for everyone",
  },
  {
    name: "kiara mehta",
    pic: "./assets/ab.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "ananya sharma",
    pic: "./assets/ac.avif",
    bio: "soft heart, strong mind 🌸 | healing era",
  },
  {
    name: "riya kapoor",
    pic: "./assets/ad.jpg",
    bio: "late replies, deep thoughts 🌙",
  },
  {
    name: "isha verma",
    pic: "./assets/ae.avif",
    bio: "built from dreams & discipline 🖤",
  },
  {
    name: "neha malhotra",
    pic: "./assets/af.avif",
    bio: "minimal words, maximum impact ✨",
  },
  {
    name: "pallavi joshi",
    pic: "./assets/ag.avif",
    bio: "peace over popularity 🤍",
  },
  {
    name: "sneha singh",
    pic: "./assets/ah.avif",
    bio: "unbothered & evolving 🐚",
  },
  {
    name: "kavya nair",
    pic: "./assets/ai.avif",
    bio: "romanticizing my own life 🌷",
  },
  {
    name: "meera kulkarni",
    pic: "./assets/aj.avif",
    bio: "calm mind, wild soul 🌊",
  },
  {
    name: "tanya gupta",
    pic: "./assets/ak.avif",
    bio: "learning. unlearning. growing. 🌱",
  },
];

let carding = document.querySelector('.carding')
let toggle = document.querySelector('.togg')
let mainBody = document.querySelector('.main-body')
toggle.addEventListener('click',function(){
  mainBody.classList.toggle('darker')
})

function showUsers(arr) {

  carding.innerHTML = ''
  arr.forEach(function (user) {
    let divv = document.createElement('div')
    divv.innerHTML = `
            <div class="texts">
                <div class="name">
                    ${user.name}
                    </div>
                    <div class="desc">
                    
                    ${user.bio}
                </div>
            </div>
        `
    divv.style.backgroundImage = `url(${user.pic})`
    carding.appendChild(divv)
    divv.classList.add('cards')

  })
}
showUsers(users)

let inputt = document.querySelector('.in')

inputt.addEventListener('input', function () {
  console.dir(inputt.value);
  let mainValue = inputt.value.toLowerCase()
  let newUsers = users.filter((user) => {
    let mainNalue = user.name.toLowerCase()
    return mainNalue.startsWith(mainValue)

  })
  showUsers(newUsers)

})


