
const users = [
  {
    name: "amisha rathore",
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
    pic: "./assets/ad.avif",
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

let main = document.querySelector('.carding  ')


function showUsers(arr) {
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
    main.appendChild(divv)
    divv.classList.add('cards')







  })
}
showUsers(users)