function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showMoodPage(mood) {
    showPage(mood + "-page");
}

const moods = {
    happy: [
        { title: "Kasih Putih", artist: "Glenn Fredy", url: " https://open.spotify.com/intl-id/track/6KfugJFINWqA42k59hmjFr?si=4ff0b5777c8c472b" },
        { title: "Penjaga Hati", artist: "Nadhif Basalamah", url: " https://open.spotify.com/intl-id/track/7F4tV8SiUy6itZTdAzdafO?si=b244978c17e74c58" },
        { title: "Bergema Sampai Selamanya", artist: "Nadhif Basalamah", url: " https://open.spotify.com/intl-id/track/1RaJdXCj61oSRUUciGKoWe?si=1bfe68e30013422a" },
        { title: "Everything U Are", artist: "Hindia", url: " https://open.spotify.com/intl-id/track/5WOSNVChcadlsCRiqXE45K?si=ad72cee1e26d4e0f" },
        { title: "Cincin", artist: "Hindia", url: " https://open.spotify.com/intl-id/track/7J0isBrUxhIYZVdrBOOlIh?si=755f5762dc0543d5" },
        { title: "Kita Usahakan Rumah Itu", artist: "Sal Priadi", url: " https://open.spotify.com/intl-id/track/1x9jnpPOAMSrr7DuIG5jMl?si=a12895a1634546ee" },
        { title: "Surat Cinta Untuk Starla", artist: "Virgoun", url: " https://open.spotify.com/intl-id/track/5o6StwqqVfG3vRLx8UP310?si=1b19d04c7acf46bc" },
        { title: "Hujan Remasted", artist: "Utopia", url: " https://open.spotify.com/intl-id/track/2oLBpsOaq87qKh1jl7GZ77?si=9ee3d9e1e55c4e6d" },
        { title: "Lihat Kebunku", artist: "Aku Jeje", url: " https://open.spotify.com/intl-id/track/5dvIK269hL3eZXQMG4Vc2C?si=c66610798754416f" },
        { title: "Nanti Kita Seperti Ini", artist: "Batas Senja", url: "https://open.spotify.com/intl-id/track/3y8RcMPYG22fRnrOi4oFJ1?si=ca4bb24bdccc47a9" },
        { title: "Semua Lagu Cinta Terdengar Sama", artist: "Hindia", url: " https://open.spotify.com/intl-id/track/63VnhcHMnTPCcd24oVajL6?si=b4cc3619313f4829" },
        { title: "Monolog", artist: "Pamungkas", url: " https://open.spotify.com/intl-id/track/1zu5ZpnrSArdoaT6Qq3yo9?si=3f2bfa9082e8455e" },
        { title: "Rahasia Hati", artist: "Nidji", url: " https://open.spotify.com/intl-id/track/48BWWtyjFE2le9sIqJitoL?si=9672efbc2b26464a" },
        { title: "About You", artist: "The 1975", url: " https://open.spotify.com/intl-id/track/3hEfpBHxgieRLz4t3kLNEg?si=f43f308a4dbe406a" },
        { title: "Lesung Pipi", artist: "Raim Laode", url: "https://open.spotify.com/intl-id/track/2OxvanM5m1Na9OVlXyXmUp?si=3a163836e957454d" }
    ],
    sad: [
        { title: "Selamat Tinggal", artist: "Virgoun", url: "https://open.spotify.com/intl-id/track/1mruWrUwAVe2XkksUQiaHK?si=ef5af0caf4964e4a" },
        { title: "Serana", artist: "For Revenge", url: "https://open.spotify.com/intl-id/track/09eWF5r8kasfOEp8RFRQLv?si=31ebb56d2f274997" },
        { title: "Jakarta Hari Ini", artist: "For Revenge", url: "https://open.spotify.com/intl-id/track/5hkQFKFRrr5gKdbbxsg6Lj?si=25c7904b957f4fce" },
        { title: "Penyangkalan", artist: "For Revenge", url: "https://open.spotify.com/intl-id/track/3GdN5n6p34yFMd12WKq8jL?si=38e880a5ed5241a0" },
        { title: "Sadrah", artist: "For Revenge", url: "https://open.spotify.com/intl-id/track/33UIshRVxXEBzITjCzo6al?si=c8565ce6133f4f4e" },
        { title: "Perayaan Mati Rasa", artist: "Umay Shahab", url: "https://open.spotify.com/intl-id/track/1RyqmamAZTAB9WSZpX4S3f?si=7218041b938447c4" },
        { title: "Mangu", artist: "Fourtwnty", url: "https://open.spotify.com/intl-id/track/0wULafSHeHYZFu54R9ZFRJ?si=8f19023b3433461a" },
        { title: "Sampai Jadi Debu", artist: "Banda Neira", url: "https://open.spotify.com/intl-id/track/4B3DEANIvod8552CbwftCG?si=3a567b4a873c4dee" },
        { title: "Dia Masalalumu Aku Masa Depanmu", artist: "Vionita", url: "https://open.spotify.com/intl-id/track/2sD709AK9zRN6SKUmDhGEa?si=e01a684294c24534" },
        { title: "Resah Jadi Luka", artist: "Daun Jatuh", url: "https://open.spotify.com/intl-id/track/2sULdMKWdBdK2ZtntuFvSb?si=6cf1072d14294d60" },
        { title: "Badut", artist: "Raavy", url: "https://open.spotify.com/intl-id/track/05T4L66cPcTOBuRD13N5Un?si=911be5bbf3474ffb" },
        { title: "Pura Pura Lupa", artist: "Mahen", url: "https://open.spotify.com/intl-id/track/6Aw5k0jkFceYayaJoRupLT?si=7e4a8fefcfb24053" },
        { title: "Mati Matian", artist: "Mahalini", url: "https://open.spotify.com/intl-id/track/6XKEElbr3cWmnUw6a5HRBV?si=156cf16c72bc4a0e" },
        { title: "Terbuang Dalam Waktu", artist: "Barasuara", url: " https://open.spotify.com/intl-id/track/5fmyW3X3kncOOVlmcWhORH?si=702ae3e97dbd4a14" },
        { title: "Akhir Tak Bahagia", artist: "Misellia", url: " https://open.spotify.com/intl-id/track/0BYoWATcndOBcsCfKdTKRx?si=ce58f47528b243aa" },
        { title: "The Winner Takes It All", artist: "ABBA", url: " https://open.spotify.com/intl-id/track/3oEkrIfXfSh9zGnE7eBzSV?si=6a98f74149e2456f" },
        { title: "Let Down", artist: "RadioHead", url: " https://open.spotify.com/intl-id/track/2fuYa3Lx06QQJAm0MjztKr?si=5a3e462c9271470e" },
        { title: "Back To Friend", artist: "sombr", url: " https://open.spotify.com/intl-id/track/0FTmksd2dxiE5e3rWyJXs6?si=63f5098b46084d6e" },
        { title: "Dirimu Yang Dulu", artist: "Anggis Devaki", url: " https://open.spotify.com/intl-id/track/4NTJKqpoAlTG3RcPB3y4C7?si=106cb72bf1b14001" },
        { title: "Andai Aku Bisa", artist: "Chrisye", url: " https://open.spotify.com/intl-id/track/6mmVZerWyj5gO83hSpeZJG?si=1da8ac5124ca46ea" },
        { title: "Titik Nadir", artist: "Kahitna", url: "https://open.spotify.com/intl-id/track/52m690jqpxP1tHHkRNdl5p?si=9927d55a271d4f84" },
        { title: "Janji Setia", artist: "Tiara Andini", url: "" }
    ],
    energized: [
        { title: "Celengan Rindu (Live Version)", artist: "Fiersa Besari", url: "https://open.spotify.com/intl-id/track/4O0OMqWfNx46cQ3QraORIz?si=91619f3f21ed4861" },
        { title: "Sorai", artist: "Nadin Amizah", url: "https://open.spotify.com/intl-id/track/3ymuBMTviroWLuf1jMsMVf?si=a049cc8f476c4fff" },
        { title: "Zona Nyaman", artist: "Fourtwnty", url: "https://open.spotify.com/intl-id/track/4lfAvFv8roumWVKXhHF8uN?si=9b3b25c1aa284258" },
        { title: "Keep Being You", artist: "Isyana Sarasvati", url: "https://open.spotify.com/intl-id/track/0w97yCPUzBdTAE2YziejAi?si=00b83688cdeb41d7" },
        { title: "Menunggumu", artist: "NOAH", url: "https://open.spotify.com/intl-id/track/0c9kI2G2rtBJ9Z2VYLD8k2?si=401fa79145d446e8" },
        { title: "Jangan Menyerah", artist: "D'MASIV", url: "https://open.spotify.com/intl-id/track/0xBpUyL8GzcmBcX2lbGCgE?si=41a9966541514558" },
        { title: "Manusia Kuat", artist: "Tulus", url: "https://open.spotify.com/intl-id/track/1vT1rKlEzvT9r0uYwAuwC8?si=2af54c60f1cf4454" },
        { title: "Could It Be", artist: "Raisa", url: "https://open.spotify.com/intl-id/track/6Khn20yWc0YGJy1wbkz3Be?si=6552325fba1b4353" },
        { title: "Topik Semalam", artist: "Kunto Aji", url: "https://open.spotify.com/intl-id/track/7u2YMSAWHbBV4iWwmz7FzQ?si=2bd35951f99b446b" },
        { title: "Amin Paling Serius", artist: "Sal Priadi & Nadin Amizah", url: "https://open.spotify.com/intl-id/track/2KHllq5yeqjTyXnQPPUPMG?si=6c3fdb563dbf41bb" },
        { title: "Can't Stop The Feeling", artist: "Justin Timberlake", url: "https://open.spotify.com/intl-id/track/6JV2JOEocMgcZxYSZelKcc?si=a9ad64020c1e45dc" },
        { title: "Dance The Night", artist: "Dua Lipa", url: "https://open.spotify.com/intl-id/track/1vYXt7VSjH9JIM5oRRo7vA?si=784b98509d794935" },
        { title: "On Top of the World", artist: "Imagine Dragons", url: "https://open.spotify.com/intl-id/track/213x4gsFDm04hSqIUkg88w?si=5eb0ccd263414a0f" },
        { title: "Adventure of a Lifetime", artist: "Coldplay", url: "https://open.spotify.com/intl-id/track/69uxyAqqPIsUyTO8txoP2M?si=88e1c8b7bcdb4283" },
        { title: "I Lived", artist: "OneRepublic", url: "https://open.spotify.com/intl-id/track/3IQF4xCQUPicbA4hWfTxPo?si=8afc07376b5846b7" },
        { title: "There's Nothing Holdin' Me Back", artist: "Shawn Mendes", url: "https://open.spotify.com/intl-id/track/7JJmb5XwzOO8jgpou264Ml?si=7c194be590dc4a37" },
        { title: "The Nights", artist: "Avicii", url: "https://open.spotify.com/intl-id/track/0ct6r3EGTcMLPtrXHDvVjc?si=68af5bbab575455f" },
        { title: "Roar", artist: "Katy Perry", url: "https://open.spotify.com/intl-id/track/6F5c58TMEs1byxUstkzVeM?si=e615aed957954812" },
        { title: "Hall of Fame", artist: "The Script", url: "https://open.spotify.com/intl-id/track/0FB5ILDICqwK6xj7W1RP9u?si=82a9d579cf93445c" },
        { title: "Shake It Off", artist: "Taylor Swift", url: "https://open.spotify.com/intl-id/track/0cqRj7pUJDkTCEsJkx8snD?si=e3696efa53614361" }
    ],
    calm: [
        { title: "Bertaut", artist: "Nadin Amizah", url: "https://open.spotify.com/intl-id/track/630DpnzdfjdVqv2yLfPbAX?si=602411878eb04b2a" },
        { title: "Rumpang", artist: "Nadin Amizah", url: "https://open.spotify.com/intl-id/track/2TRGNVokPnC2a2oHg5iv1H?si=598079a813c04050" },
        { title: "Adu Rayu", artist: "Yovie Widianto, Tulus, Glenn Fredly", url: "https://open.spotify.com/intl-id/track/0mOLyv1GL4sIuzVR1I92Fb?si=ed648650b25f4d5d" },
        { title: "Hati-Hati di Jalan", artist: "Tulus", url: "https://open.spotify.com/intl-id/track/2hHeGD57S0BcopfVcmehdl?si=c81d55564ced45ab" },
        { title: "Langit Abu-Abu", artist: "Kunto Aji", url: "https://open.spotify.com/intl-id/track/2FaquTc3FYvNm7RuO1gD6O?si=3744b709d0f74c3e" },
        { title: "Rehat", artist: "Kunto Aji", url: "https://open.spotify.com/intl-id/track/7mjO4RbTZIb1SfE8G673Lm?si=da87fd6c0e8c4cdb" },
        { title: "Sesuatu di Jogja", artist: "Adhitia Sofyan", url: "https://open.spotify.com/intl-id/track/7giGF9tkiLDWD9DVisB3Qh?si=f9877e78cd804050" },
        { title: "Blue Jeans", artist: "GANGGA", url: "https://open.spotify.com/intl-id/track/4kfjA6WfgKBt7I7YKuDCkU?si=624216bb53484324" },
        { title: "Hanya Rindu", artist: "Andmesh", url: "https://open.spotify.com/intl-id/track/0qGWdzIbvxO1QsUiwfAoNz?si=152f240fd3574d3a" },
        { title: "Bunga Tidur", artist: "Juicy Luicy", url: "https://open.spotify.com/intl-id/track/2o9AHYt8uSxS7tPnukrDaI?si=40b419354ada4968" },
        { title: "Kesempurnaan Cinta", artist: "Rizky Febian", url: "https://open.spotify.com/intl-id/track/18tLvggTFEZuzLdcnuej2u?si=80e3e98345c14caf" },
        { title: "Bisa Tanpamu", artist: "Andmesh", url: "https://open.spotify.com/intl-id/track/3wQg61tUhva9ZpdZ9BVaV5?si=f458b380360d42f3" },
        { title: "Pilihanku", artist: "Maliq & D'Essentials", url: "https://open.spotify.com/intl-id/track/3puYuuZ7lmlTjIgXBOT01k?si=05a476be52734c3b" },
        { title: "Nyaman", artist: "Andmesh", url: "https://open.spotify.com/intl-id/track/1li6ZfdoeHY0STg2hU2pkE?si=c2af8b4af244449b" },
        { title: "Sunset di Tanah Anarki", artist: "Superman Is Dead", url: "https://open.spotify.com/intl-id/track/1bfbixjy7OPG2n3MbLKrKu?si=652be2ebe8434cd5" },
        { title: "Winter Bear", artist: "V (BTS)", url: "https://open.spotify.com/intl-id/track/74ewFAgDzRkhZ7EX2eLtfZ?si=e8af19fb52094161" },
        { title: "ILYSB (Stripped)", artist: "LANY", url: "https://open.spotify.com/intl-id/track/3Dkvp3L4w0uJFYfIPa8E9H?si=143c048f8f85486a" },
        { title: "Happier", artist: "Ed Sheeran", url: "https://open.spotify.com/intl-id/track/2RttW7RAu5nOAfq6YFvApB?si=af3633481d5a44fe" },
        { title: "I Won't Give Up", artist: "Jason Mraz", url: "https://open.spotify.com/intl-id/track/5ivF4eQBqJiVL5IAE9jRyl?si=a7b58aa9cc624d90" },
        { title: "Best Part", artist: "Daniel Caesar ft. H.E.R.", url: "https://open.spotify.com/intl-id/track/1Q7EgiMOuwDcB0PJC6AzON?si=48c40edebe454699" }
    ]
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderSongs(mood) {
    let list = document.querySelector(`#${mood}-page .song-list`);
    list.innerHTML = "";

    shuffle([...moods[mood]]).forEach(song => {
        const card = document.createElement("div");
        card.className = "song-card";
        card.innerHTML = `
            <div class='song-title'>${song.title}</div>
            <div class='song-artist'>${song.artist}</div>
            <div class='play-icon'>▶</div>
        `;
        card.onclick = () => window.open(song.url, "_blank");
        list.appendChild(card);
    });
}

function refreshMood(mood) {
    renderSongs(mood);
}

["happy", "sad", "energized", "calm"].forEach(renderSongs);

// Random delays untuk music notes
const notes = document.querySelectorAll('.music-note');
notes.forEach(note => {
    const randomDelay = Math.random() * 15;
    note.style.animationDelay = randomDelay + 's';
});