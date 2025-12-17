
  const users = [
    {
      name: "amisha rathore",
      pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
      bio: "silent chaos in a loud world 🌑 | not for everyone",
    },
    {
      name: "kiara mehta",
      pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
      bio: "main character energy 🎬 | coffee > everything ☕✨",
    },
    {
      name: "ananya sharma",
      pic: "https://plus.unsplash.com/premium_photo-1765546401370-b916e2bbc48e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "soft heart, strong mind 🌸 | healing era",
    },
    {
      name: "riya kapoor",
      pic: "https://plus.unsplash.com/premium_photo-1765546402651-0df9200d82a0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "late replies, deep thoughts 🌙",
    },
    {
      name: "isha verma",
      pic: "https://plus.unsplash.com/premium_photo-1754428000876-f37a9ca446a6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "built from dreams & discipline 🖤",
    },
    {
      name: "neha malhotra",
      pic: "https://plus.unsplash.com/premium_photo-1709675640386-18b0861f8f3f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "minimal words, maximum impact ✨",
    },
    {
      name: "pallavi joshi",
      pic: "https://plus.unsplash.com/premium_photo-1765654275637-51d5f431b3b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      bio: "peace over popularity 🤍",
    },
    {
      name: "sneha singh",
      pic: "https://plus.unsplash.com/premium_photo-1754772566645-714bb0b219fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      bio: "unbothered & evolving 🐚",
    },
    {
      name: "kavya nair",
      pic: "https://plus.unsplash.com/premium_photo-1764110385406-986854a9fec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      bio: "romanticizing my own life 🌷",
    },
    {
      name: "meera kulkarni",
      pic: "https://plus.unsplash.com/premium_photo-1678937610777-b75a1023f6d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
      bio: "calm mind, wild soul 🌊",
    },
    {
      name: "tanya gupta",
      pic: "https://plus.unsplash.com/premium_photo-1728280884787-58ae8f3d84c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8g",
      bio: "learning. unlearning. growing. 🌱",
    },
  ];


let main = document.querySelector('.main')


  function showUsers(arr) {
    arr.forEach(function (user) {
      let divv = document.createElement('div')
      divv.innerHTML=`<div class="cards">

            <div class="texts">
                <div class="name">
                    ${user.name}
                    </div>
                    <div class="desc">
                    
                    ${user.bio}
                </div>
            </div>
        </div>`
        divv.style.backgroundImage=`url(${user.pic})`
      main.appendChild(divv)
        divv.classList.add('cards')

      





    })
  }
  showUsers(users)