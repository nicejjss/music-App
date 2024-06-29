
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
            name: "Take her to the moon for me",
            singer: "Moira Dela Torre",
            img: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F558eac30ce4394e4355a8604d73d86da.640x640x1.jpg',
            music: 'https://rr1---sn-i3b7knld.googlevideo.com/videoplayback?expire=1719670634&ei=CsN_ZuOwC4C9vcAPjNu3mAY&ip=2402%3A800%3A61a7%3Ad4af%3Af8b6%3A17ad%3Aba72%3A83d5&id=o-ABuAYn6O_tHk9Zq5rT2AF6UWWLQ428fcibjSS66fDSZq&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=audio%2Fmp4&rqh=1&gir=yes&clen=5560274&dur=343.492&lmt=1706194307523297&keepalive=yes&c=IOS&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgTgtDuRfRl1-l2hgI38-e1cyMFaj4V5oeFzzV1kEg0LYCIQC75aKOxSWsIW2x8Zc7KdINEfOy1gDx4fYQabAYlfFA9A%3D%3D&cm2rm=sn-8pxuuxa-i5od67e,sn-8pxuuxa-i5oez76&fexp=24350518&req_id=d1a2bf869cbca3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&mh=E6&mm=30&mn=sn-i3b7knld&ms=nxu&mt=1719648759&mv=m&mvi=1&pl=48&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRgIhAMlwKsLL2SHPT2kfhUuUVOW0M18pCucIt1k65uk7lWHFAiEA_5jwXNx1OWMcOy1FdS2mjzSyOrSSIfA5Gxm6H9e5FKE%3D'
        },
        {
            name: "2002",
            singer: "Anne Marie",
            img: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fa1fd0f25c332080e1a60ffb8309cc099.1000x1000x1.png',
            music: 'https://rr5---sn-8pxuuxa-i5oel.googlevideo.com/videoplayback?expire=1719671335&ei=x8V_ZunyJMeuvcAPocmVgAg&ip=2402%3A800%3A61a7%3Ad4af%3Af8b6%3A17ad%3Aba72%3A83d5&id=o-AECw3dQOZbyJnLpB7-uPoGZbJxndpLxA3B7RR4ykAGaI&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Ys&mm=31%2C29&mn=sn-8pxuuxa-i5oel%2Csn-8pxuuxa-i5ozz&ms=au%2Crdu&mv=m&mvi=5&pl=48&initcwndbps=1222500&vprv=1&svpuc=1&mime=audio%2Fmp4&rqh=1&gir=yes&clen=3033308&dur=187.385&lmt=1697070882810314&mt=1719649258&fvip=4&keepalive=yes&c=IOS&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgKntKOz3gql7cQuJJdfMrK_e3T_3LLvSG3mm7sJtYTPoCIHmgIZVu6NqpY5gOqtPFX1_pPxs5OOyBTuRCVEzsLVd3&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHlkHjAwRQIhAOVr88wu2Sy7-JGZWk52S6-qccFW1zNypoHZRNjE8akKAiB4qK8hm0ANEIhP9ePNrHIQd3gNT_Bx7r7it7w4XpP58A%3D%3D'
        },
        {
            name: "Cold/Mess",
            singer: "Prateek Kuhad",
            img: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F455bbc51a267019423f4a0cb875d4c03.1000x1000x1.jpg',
            music: 'https://rr5---sn-i3b7knse.googlevideo.com/videoplayback?expire=1719671388&ei=_MV_ZovmON6VvcAPyP2cmAY&ip=2402%3A800%3A61a7%3Ad4af%3Af8b6%3A17ad%3Aba72%3A83d5&id=o-ACJ1mK6MLou8tMOSFkIV8l3Ko3bvrMWr4WcFOrEmLee2&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=audio%2Fmp4&rqh=1&gir=yes&clen=4566587&dur=282.122&lmt=1577784662766857&keepalive=yes&c=IOS&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgf8HztqKkjsdLP3C8phgfxe0XKzNCoHdVrlnywWHIOIYCIQCGVw1tr8MVkjwE4vXjrYmdfV-8rXm-6SWzU1pDeLuOQA%3D%3D&cm2rm=sn-8pxuuxa-i5o6676,sn-8pxuuxa-i5ozz7z&fexp=24350518&req_id=4d3e4b9e71e3a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&mh=BO&mm=30&mn=sn-i3b7knse&ms=nxu&mt=1719649476&mv=m&mvi=5&pl=48&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRgIhAJNLPwarYlTYhyGuB9MiHwNNRjm9f1FUaJkIrToGLXvKAiEAlD37sIYGKCNYPQyc6gnLJ8M-p6e2zOKyUqErFepj3Uo%3D'
        },
        {
            name: "Mộng du",
            singer: "Chillies",
            img: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fa53f5c46f695ffa6fd1f00f1b4faabdd.1000x1000x1.jpg',
            music: 'https://rr6---sn-8pxuuxa-i5o6d.googlevideo.com/videoplayback?expire=1719671510&ei=dsZ_Zun0F4q8vcAP3aWp2AY&ip=2402%3A800%3A61a7%3Ad4af%3Af8b6%3A17ad%3Aba72%3A83d5&id=o-AAr_6nilXdiRri5RWEOMJZwG6GXQkVs3oGIznVojJuiy&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=audio%2Fmp4&rqh=1&gir=yes&clen=3869418&dur=239.049&lmt=1705994513829729&keepalive=yes&c=IOS&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgZ7X0xlv3c4hCTdSIPpBOKsFb7a15Ox1_PTJxoWWovygCIDDp0V4_9Rby3-GFBOnWXBlQCj04ryp2G8EO_BPTzkxH&redirect_counter=1&cm2rm=sn-8pxuuxa-i5o667z&fexp=24350518&req_id=e29485671353a3ee&cms_redirect=yes&cmsv=e&mh=ww&mm=29&mn=sn-8pxuuxa-i5o6d&ms=rdu&mt=1719649765&mv=m&mvi=6&pcm2cms=yes&pl=48&lsparams=mh,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AHlkHjAwRQIhALPRWdaQl929BKqqN_b3Oc8SU0Hm6AE3Q0PB4u9KckKUAiAx2JJgcaWxtnwT5-_NX4CTc3AZlmF-Bdq78-QeMuzJxA%3D%3D'
        },
        {
            name: "Singing in the rain",
            singer: "Don Lockwood",
            img: 'https://i.pinimg.com/736x/7f/f1/a5/7ff1a5c941d3678953e3b277d1421365.jpg',
            music: 'https://rr2---sn-8pxuuxa-i5ozs.googlevideo.com/videoplayback?expire=1719671560&ei=qMZ_ZtScDqqWvcAPwqSFkAE&ip=2402%3A800%3A61a7%3Ad4af%3Af8b6%3A17ad%3Aba72%3A83d5&id=o-APZ_-XhV9Pzxz8js0ylVXx6JKwJ275I9LJqFQI6l8nQ-&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=audio%2Fmp4&rqh=1&gir=yes&clen=2895376&dur=178.863&lmt=1612983453947744&keepalive=yes&c=IOS&txp=5311222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgFZ7CMo9fES7oZPSUtUw7CQwsraidsx7tSnLf0UX_yQgCIDKt4s-7Ibu8Z3Pkormaei3YhgqDnDgA5VXpJXuJ3S8C&redirect_counter=1&cm2rm=sn-8pxuuxa-i5oek7s&fexp=24350518&req_id=1920c581b089a3ee&cms_redirect=yes&cmsv=e&mh=Tc&mm=29&mn=sn-8pxuuxa-i5ozs&ms=rdu&mt=1719649765&mv=m&mvi=2&pl=48&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRQIgRLLs0zVO-cjcUUKNf1au6YlufJqOHC38yKHT7H0b3SICIQChEgyrtuVgvSu7HJw6kQxU3m-RI4PRPcjCtOYUbqPFiA%3D%3D'
        },
        {
            name: "Close to you",
            singer: "Carpenters",
            img: 'https://i.pinimg.com/564x/5c/da/0c/5cda0c01f76017ba777b4706095cf176.jpg',
            music: 'https://rr5---sn-8pxuuxa-i5oed.googlevideo.com/videoplayback?expire=1719671590&ei=xsZ_ZpSXB-y4vcAPq9Kb0Ag&ip=2402%3A800%3A61a7%3Ad4af%3Af8b6%3A17ad%3Aba72%3A83d5&id=o-ANfwd_WstC8sViipSLibswc_PVC7eAH6H0sNBXnoTAPa&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=4N&mm=31%2C29&mn=sn-8pxuuxa-i5oed%2Csn-8pxuuxa-i5o6d&ms=au%2Crdu&mv=m&mvi=5&pl=48&initcwndbps=1442500&vprv=1&svpuc=1&mime=audio%2Fmp4&rqh=1&gir=yes&clen=3665771&dur=226.464&lmt=1709135499152156&mt=1719649505&fvip=5&keepalive=yes&c=IOS&txp=5432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgG5zT8k0A-evlEk4vXCf8-WZSJ2WfPwpiHB065fDdx50CIQCSfyu8ka_93-H-vBxV_ioSniAWVm0E1WGn7NnJNvKwtA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHlkHjAwRAIgWUGJEen9mq3kA0o4mFIGrFin0lk0Y2wwIk7DCVn7pwICICFHHvjnFjRSijzMcCh-yKC0cGoc70y4tWtoyj3o5TzT'
        },
        {
            name: "Nếu biết đó là lần cuối",
            singer: "Đức Trường",
            img: 'https://i.pinimg.com/564x/13/85/94/138594cf9e31116d0427f1c07710f465.jpg',
            music: 'https://rr3---sn-8pxuuxa-i5o66.googlevideo.com/videoplayback?expire=1719671111&ei=58R_ZoCuBZug1d8Pl82a4AM&ip=2402%3A800%3A61a7%3Ad4af%3Af8b6%3A17ad%3Aba72%3A83d5&id=o-AMOUZyEBqVDv1T-keZE3d20u6ZqO1D0NsctZ5n0edV5C&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=dA&mm=31%2C29&mn=sn-8pxuuxa-i5o66%2Csn-8pxuuxa-i5o6d&ms=au%2Crdu&mv=m&mvi=3&pl=48&initcwndbps=1172500&vprv=1&svpuc=1&mime=audio%2Fmp4&rqh=1&gir=yes&clen=3900703&dur=240.976&lmt=1695745495417471&mt=1719649042&fvip=4&keepalive=yes&c=IOS&txp=5432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAMTDUjVEj186-RXFMJfbhfaw_sQrMVMxjrrjB6VurRixAiA6aVdaF0lW78lxgT0WwVNmUoU5eMdR6e_OawMFE8TDug%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHlkHjAwRAIgXYSgZD9OST50yzSBAUoaXPFlrH_x1tF9nEYKgUht5LcCIHtPTlFV8dfJ86lZvUmLRRpRH2QPIIzAyFm1-O9P3SKE'
        },
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
        <div class="option">
            <i class="fas fa-ellipsis-h"></i>
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
            if (child.target.closest('.option')) {

                alert("Chưa làm cái này :))))")

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
    // randomSong: function(){
    //          const randomi= Math.floor(Math.random()*(this.song.length+1));
    //          var headername=this.song[randomi].name;
    //          $('header h2').innerText=headername;

    // },
    // getCurrentSong: function(){
    //      return this.song[this.currentIndex];
    // },
    start: function () {
        this.defineProperties();    // Define property of Object
        this.render();
        this.handleEvents();
        // this.randomSong();
        this.loadCurrentSong();

    }
}
App.start();