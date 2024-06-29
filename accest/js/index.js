
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const header = $('header h2');
const cdThum = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
const playbtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const nextbtn = $('.btn-next');
const prebtn = $('.btn-prev');
const randombtn = $('.btn-random');
const repeatbtn = $('.btn-repeat');
const playlist = $('.playlist');
const Volume = $('#volume');
const volumechange = $('.volume-change');
const volumeup = $('.icon-up');
const volumedown = $('.icon-down');
const volumeoff = $('.icon-off');


// $('header h2').innerText="yoloooo";


const App = {
    isPlaying: false,
    currentIndex: 0,
    israndom: false,
    song: [
        {
            name: "Take her to the moon",
            singer: "Moira Dela Torre",
            img: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F558eac30ce4394e4355a8604d73d86da.640x640x1.jpg',
            music: 'https://dl.dropbox.com/scl/fi/xaf0skfc3gigm350e3jr9/takehertothemoon.mp3?rlkey=i0grejom1mw5zw7n7esht8su6&st=xpjui6vq&dl=0'
        },
        {
            name: "2002",
            singer: "Anne Marie",
            img: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fa1fd0f25c332080e1a60ffb8309cc099.1000x1000x1.png',
            music: 'https://dl.dropbox.com/scl/fi/sl0r5sukajxl2si9l1k9y/2002.mp3?rlkey=848kr9g28la8wvnt50dfenp53&st=ef5m9r7s&dl=0'
        },
        {
            name: "Cold/Mess",
            singer: "Prateek Kuhad",
            img: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F455bbc51a267019423f4a0cb875d4c03.1000x1000x1.jpg',
            music: 'https://dl.dropbox.com/scl/fi/zzt1w3o4omh4mogak25b4/coldmess.mp3?rlkey=2rrna32duy7l8ei9v916vj13l&st=hhk42jud&dl=0'
        },
        {
            name: "Mộng du",
            singer: "Chillies",
            img: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fa53f5c46f695ffa6fd1f00f1b4faabdd.1000x1000x1.jpg',
            music: 'https://dl.dropbox.com/scl/fi/npmqk8ff783oys3d8zlgp/mongdu.mp3?rlkey=dg09zytubw133pqep0r9dlzfs&st=wpf283a7&dl=0'
        },
        {
            name: "Singing in the rain",
            singer: "Don Lockwood",
            img: 'https://i.pinimg.com/736x/7f/f1/a5/7ff1a5c941d3678953e3b277d1421365.jpg',
            music: 'https://dl.dropbox.com/scl/fi/6e6jsjpcwv7tgj4lqomm2/signintherain.mp3?rlkey=uaxuxlsm8tr5c0ctgrfd90cb7&st=xgn6v14f&dl=0'
        },
        {
            name: "Close to you",
            singer: "Carpenters",
            img: 'https://i.pinimg.com/564x/5c/da/0c/5cda0c01f76017ba777b4706095cf176.jpg',
            music: 'https://dl.dropbox.com/scl/fi/rqfie1ssatgf5y50n7zca/closetoyou.mp3?rlkey=1614mrfx7l4rbek86hndikg65&st=p3lq9oas&dl=0'
        },
        {
            name: "Nếu biết đó là lần cuối",
            singer: "Đức Trường",
            img: 'https://i.pinimg.com/564x/13/85/94/138594cf9e31116d0427f1c07710f465.jpg',
            music: 'https://dl.dropbox.com/scl/fi/tnpjsxvtrowy8f2o142mm/neubietdolalancuoi.mp3?rlkey=rp6vcql0rw2kwgfpx7fofs0bw&st=q8o5i3zv&dl=0'
        },
        {
            name: "Back at One",
            singer: "Shayne Ward",
            img: 'https://i.pinimg.com/564x/3c/c4/9a/3cc49a5be0dc59742b93323f636acbd1.jpg',
            music: 'https://dl.dropbox.com/scl/fi/umkr1mt24oepjwba6ko6w/backatone.mp3?rlkey=3e4p165bc0pjivwh27jw6f7zz&st=uyhj1y64&dl=0'
        },
        {
            name: "Now and Then",
            singer: "The Beatles",
            img: 'https://i.pinimg.com/736x/6a/71/85/6a718501dac9b3a9fb9b13ce3b2786b6.jpg',
            music: 'https://dl.dropbox.com/scl/fi/ptxtzy8d2fi2y5j2v7dw3/nowandthen.mp3?rlkey=drui9hhhwun3biogd2d7gwwg3&st=5mzo6t4p&dl=0'
        },
        {
            name: "Có em đời bỗng vui",
            singer: "Chillies",
            img: "https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F5822e08274e4684b00a177ff3ef2f33e.551x551x1.jpg",
            music: "https://dl.dropbox.com/scl/fi/t81ihckuzmiks5x8k16bm/coemdoibongvui.mp3?rlkey=hrq68zixcbqai35wtmx333nps&st=8gqal2rn&dl=0"
        }
    ],

    render: function () {                                        //render

        const htmls = this.song.map(function (song, index) {
            return `
                <div class="song" dataindex='${index}'>
        <div  class="thumb" style="background-image: url('${song.img}') " >
        </div>
        <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.singer}</p>
        </div>
        </div>
                `
        })

        $('.playlist').innerHTML = htmls.join('');
    },
    loadCurrentSong: function () {
        header.textContent = this.currentSong.name;
        cdThum.style.backgroundImage = `url('${this.currentSong.img}')`;
        audio.src = this.currentSong.music;
        this.ActiveSong();
    },
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.song[this.currentIndex];
            }
        })
    },
    //Next
    NextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.song.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    //Previous
    Previous: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.song.length - 1;
        }
        this.loadCurrentSong();
    },

    handleEvents: function () {                                                         //ScrollTop

        const cdWidth = cd.offsetWidth;

        //ROTATE CD
        const rotatecd = cdThum.animate([                      //AUTOPAY WHEN USE IT
            {
                transform: 'rotate(360deg)',
            }
        ], {
            duration: 20000,
            iterations: Infinity,
        })
        rotatecd.pause();


        //Scale CD
        document.onscroll = function () {
            const scrollcheck = window.scrollY || document.documentElement.scrollTop;
            const newWidthcd = cdWidth - scrollcheck;
            cd.style.width = newWidthcd > 0 ? newWidthcd + 'px' : 0 + 'px';
            cd.style.opacity = newWidthcd / cdWidth;
        }
        //Play- Pause
        playbtn.onclick = function () {

            if (App.isPlaying === false) {
                audio.play();
            }
            else {
                audio.pause();
            }
        }



        //Played 


        audio.onplay = function () {
            App.isPlaying = true;
            player.classList.add('playing');

            rotatecd.play();


        }
        //paused
        audio.onpause = function () {
            App.isPlaying = false;
            player.classList.remove('playing');
            rotatecd.pause();

        }
        //
        audio.ontimeupdate = function () {
            if (audio.currentTime) {
                var rangValue = Math.round((audio.currentTime / audio.duration) * 100);
                progress.value = rangValue;
            }
        }
        // skip song 
        progress.oninput = function () {
            const Songsecondclick = (this.value * audio.duration) / 100;
            audio.currentTime = Songsecondclick;


        }
        //NEXT - PREVIOUS
        nextbtn.onclick = function () {
            if (randombtn.classList.contains('active')) {
                App.playRandomSong();
            }
            else {
                App.NextSong();
            }

            audio.play();
        }
        prebtn.onclick = function () {
            if (randombtn.classList.contains('active')) {
                App.playRandomSong();
            }
            else {
                App.Previous();
            }

            audio.play();
        }
        //nextSong-Repeat
        audio.onended = function () {
            if (repeatbtn.classList.contains('active')) {
                audio.play();
            }
            else
                nextbtn.click();
        }
        repeatbtn.onclick = function () {
            repeatbtn.classList.toggle('active');
        }


        //RandomSong
        randombtn.onclick = function () {
            randombtn.classList.toggle('active');
        }
        //click playlist
        playlist.onclick = function (child) {
            const songNode = child.target.closest('.song:not(.active)');
            if (songNode) {
                App.currentIndex = Number(songNode.getAttribute('dataindex'));
                App.loadCurrentSong();
                audio.play();
            }
        }
        //Audio
        Volume.oninput = function () {
            audio.volume = Volume.value / Volume.max;
            if (Volume.value == 0) {
                volumedown.style.display = "none"
                volumeoff.style.display = "block"
                volumeup.style.display = "none"
            }
            if (Volume.value > 0 && Volume.value <= 59) {
                volumedown.style.display = "block"
                volumeoff.style.display = "none"
                volumeup.style.display = "none"
            }
            if (Volume.value >= 60) {
                volumedown.style.display = "none"
                volumeoff.style.display = "none"
                volumeup.style.display = "block"
            }
        }
    },

    //Random
    playRandomSong: function () {
        do {
            var newIndex = Math.floor(Math.random() * this.song.length)
        }
        while (newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    //ActiveSong
    ActiveSong: function () {
        var activeindex = this.currentIndex;
        var Noactive = document.querySelectorAll('.song');
        Noactive.forEach(function (no) {
            no.classList.remove('active')
        })
        var activeSong = document.querySelector(`.song:nth-child(${activeindex + 1})`)
        activeSong.classList.add('active');
        this.ScrolltoActiveSong();
    },
    //  ShowActivesong
    ScrolltoActiveSong: function () {
        setTimeout(function () {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }, 300)
    },

    start: function () {
        this.defineProperties();    // Define property of Object
        this.render();
        this.handleEvents();
        // this.randomSong();
        this.loadCurrentSong();

    }
}
App.start();