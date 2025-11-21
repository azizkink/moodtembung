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
    { title: "Kasih Putih", artist: "Glenn Fredy", urlSpotify: "https://open.spotify.com/intl-id/track/3Qiv7UhkqYeBExD6gZ1m3k?si=bebb30e58eab482b", urlYT: "https://youtu.be/CVEPAN2eLYg?si=FZH8NZ8-0_wYonyP" },
    { title: "Penjaga Hati", artist: "Nadhif Basalamah", urlSpotify: "https://open.spotify.com/intl-id/track/7F4tV8SiUy6itZTdAzdafO?si=b244978c17e74c58", urlYT: "https://youtu.be/xBmpI3xfh_0?si=obUsH3Q-8JQXSK4G" },
    { title: "Bergema Sampai Selamanya", artist: "Nadhif Basalamah", urlSpotify: "https://open.spotify.com/intl-id/track/1RaJdXCj61oSRUUciGKoWe?si=1bfe68e30013422a", urlYT: "https://youtu.be/gvunApwKIiY?si=TeN_jCi1smtcywrn" },
    { title: "Everything U Are", artist: "Hindia", urlSpotify: "https://open.spotify.com/intl-id/track/5WOSNVChcadlsCRiqXE45K?si=ad72cee1e26d4e0f", urlYT: "https://youtu.be/lB8ASupNtlw?si=a1twH4Co-DWZskAh" },
    { title: "Cincin", artist: "Hindia", urlSpotify: "https://open.spotify.com/intl-id/track/7J0isBrUxhIYZVdrBOOlIh?si=755f5762dc0543d5", urlYT: "https://youtu.be/S0Kez6MERGE?si=SefFV_9WK9W7eRNz" },
    { title: "Kita Usahakan Rumah Itu", artist: "Sal Priadi", urlSpotify: "https://open.spotify.com/intl-id/track/1x9jnpPOAMSrr7DuIG5jMl?si=a12895a1634546ee", urlYT: "https://youtu.be/7SqNVv98e8Q?si=OriOY29jV4fAbqvJ" },
    { title: "Surat Cinta Untuk Starla", artist: "Virgoun", urlSpotify: "https://open.spotify.com/intl-id/track/5o6StwqqVfG3vRLx8UP310?si=1b19d04c7acf46bc", urlYT: "https://youtu.be/FocFked1TbQ?si=SuTEfaE7EynSRief" },
    { title: "Hujan Remasted", artist: "Utopia", urlSpotify: "https://open.spotify.com/intl-id/track/2oLBpsOaq87qKh1jl7GZ77?si=9ee3d9e1e55c4e6d", urlYT: "https://youtu.be/5A5lM71fO60?si=M4tZpIo5SGQrEBlX" },
    { title: "Lihat Kebunku", artist: "Aku Jeje", urlSpotify: "https://open.spotify.com/intl-id/track/5dvIK269hL3eZXQMG4Vc2C?si=c66610798754416f", urlYT: "https://youtu.be/im99Picx79Q?si=UFWvVDQnTkne2AQU" },
    { title: "Nanti Kita Seperti Ini", artist: "Batas Senja", urlSpotify: "https://open.spotify.com/intl-id/track/3y8RcMPYG22fRnrOi4oFJ1?si=ca4bb24bdccc47a9", urlYT: "https://youtu.be/s6H6ffS6zJI?si=rGL9w9MV56AwG5Ey" },
    { title: "Semua Lagu Cinta Terdengar Sama", artist: "Hindia", urlSpotify: "https://open.spotify.com/intl-id/track/63VnhcHMnTPCcd24oVajL6?si=b4cc3619313f4829", urlYT: "https://youtu.be/Jr0393tzwN8?si=oRy630yPjEqjqNKh" },
    { title: "Monolog", artist: "Pamungkas", urlSpotify: "https://open.spotify.com/intl-id/track/1zu5ZpnrSArdoaT6Qq3yo9?si=3f2bfa9082e8455e", urlYT: "https://youtu.be/-mwsPoerFWU?si=xyliOIbFw2WCMo3v" },
    { title: "Rahasia Hati", artist: "Nidji", urlSpotify: "https://open.spotify.com/intl-id/track/48BWWtyjFE2le9sIqJitoL?si=9672efbc2b26464a", urlYT: "https://youtu.be/ABs7uaqojsY?si=fvyErWCB7ZW13hQ5" },
    { title: "About You", artist: "The 1975", urlSpotify: "https://open.spotify.com/intl-id/track/3hEfpBHxgieRLz4t3kLNEg?si=f43f308a4dbe406a", urlYT: "https://youtu.be/tGv7CUutzqU?si=LPaYS37U0eZpsQKC" },
    { title: "Lesung Pipi", artist: "Raim Laode", urlSpotify: "https://open.spotify.com/intl-id/track/2OxvanM5m1Na9OVlXyXmUp?si=3a163836e957454d", urlYT: "https://youtu.be/mJE0ROBWPvY?si=cv_5p4DGdp6LdKkq" }
    ],
    sad: [
    { title: "Selamat Tinggal", artist: "Virgoun", urlSpotify: "https://open.spotify.com/intl-id/track/1mruWrUwAVe2XkksUQiaHK?si=ef5af0caf4964e4a", urlYT: "https://youtu.be/ZPxqSAHonSs?si=Ozvx2pFWQcyQhkoL" },
    { title: "Serana", artist: "For Revenge", urlSpotify: "https://open.spotify.com/intl-id/track/09eWF5r8kasfOEp8RFRQLv?si=31ebb56d2f274997", urlYT: "https://youtu.be/l8gfwz04jEQ?si=0NR6bGtVguf8aG6F" },
    { title: "Jakarta Hari Ini", artist: "For Revenge", urlSpotify: "https://open.spotify.com/intl-id/track/5hkQFKFRrr5gKdbbxsg6Lj?si=25c7904b957f4fce", urlYT: "https://youtu.be/HSNmWI1wqMM?si=fg8cVrPVNJyl7WXH" },
    { title: "Penyangkalan", artist: "For Revenge", urlSpotify: "https://open.spotify.com/intl-id/track/3GdN5n6p34yFMd12WKq8jL?si=38e880a5ed5241a0", urlYT: "https://youtu.be/qzYS-L4vkTQ?si=GmZQ5vVSgrpHULn6" },
    { title: "Sadrah", artist: "For Revenge", urlSpotify: "https://open.spotify.com/intl-id/track/33UIshRVxXEBzITjCzo6al?si=c8565ce6133f4f4e", urlYT: "https://youtu.be/IoGPlfXoBuY?si=fbd_qQYlyM8pOFlT" },
    { title: "Perayaan Mati Rasa", artist: "Umay Shahab", urlSpotify: "https://open.spotify.com/intl-id/track/1RyqmamAZTAB9WSZpX4S3f?si=7218041b938447c4", urlYT: "" },
    { title: "Mangu", artist: "Fourtwnty", urlSpotify: "https://open.spotify.com/intl-id/track/0wULafSHeHYZFu54R9ZFRJ?si=8f19023b3433461a", urlYT: "https://youtu.be/JENpTmMQBQY?si=1A_87wI6XcE3d2rehttps://youtu.be/JENpTmMQBQY?si=1A_87wI6XcE3d2re" },
    { title: "Sampai Jadi Debu", artist: "Banda Neira", urlSpotify: "https://open.spotify.com/intl-id/track/4B3DEANIvod8552CbwftCG?si=3a567b4a873c4dee", urlYT: "https://youtu.be/2rdV2CEkjtk?si=DYeIcs7NxkUUUHZc" },
    { title: "Dia Masalalumu Aku Masa Depanmu", artist: "Vionita", urlSpotify: "https://open.spotify.com/intl-id/track/2sD709AK9zRN6SKUmDhGEa?si=e01a684294c24534", urlYT: "https://youtu.be/05wQrmLejyo?si=Moh_OOlZBgUyzoMr" },
    { title: "Resah Jadi Luka", artist: "Daun Jatuh", urlSpotify: "https://open.spotify.com/intl-id/track/2sULdMKWdBdK2ZtntuFvSb?si=6cf1072d14294d60", urlYT: "https://youtu.be/cY9Iiw3Due8?si=XydN7AAwljUStGqz" },
    { title: "Badut pt 2", artist: "Raavy", urlSpotify: "https://open.spotify.com/intl-id/track/05T4L66cPcTOBuRD13N5Un?si=a0a952e62a6f480c", urlYT: "https://youtu.be/TXV_tdLEogA?si=icWMT358cLasAHnD" },
    { title: "Pura Pura Lupa", artist: "Mahen", urlSpotify: "https://open.spotify.com/intl-id/track/6Aw5k0jkFceYayaJoRupLT?si=7e4a8fefcfb24053", urlYT: "https://youtu.be/zPWA5w0Yxco?si=HNLDItlr4-DWk162" },
    { title: "Mati Matian", artist: "Mahalini", urlSpotify: "https://open.spotify.com/intl-id/track/6XKEElbr3cWmnUw6a5HRBV?si=156cf16c72bc4a0e", urlYT: "https://youtu.be/LAOxuo6pkdo?si=8lozSbGMrPC1Kpwj" },
    { title: "Terbuang Dalam Waktu", artist: "Barasuara", urlSpotify: "https://open.spotify.com/intl-id/track/5fmyW3X3kncOOVlmcWhORH?si=702ae3e97dbd4a14", urlYT: "https://youtu.be/X-EK60rmcQs?si=lG6H1CZFOj0fF1V9" },
    { title: "Akhir Tak Bahagia", artist: "Misellia", urlSpotify: "https://open.spotify.com/intl-id/track/0BYoWATcndOBcsCfKdTKRx?si=ce58f47528b243aa", urlYT: "https://youtu.be/vs-gfy3Pv1c?si=-HzJaq9c_paC-6nG" },
    { title: "The Winner Takes It All", artist: "ABBA", urlSpotify: "https://open.spotify.com/intl-id/track/3oEkrIfXfSh9zGnE7eBzSV?si=6a98f74149e2456f", urlYT: "https://youtu.be/92cwKCU8Z5c?si=1OIVp0ykJtdxOXh2" },
    { title: "Let Down", artist: "RadioHead", urlSpotify: "https://open.spotify.com/intl-id/track/2fuYa3Lx06QQJAm0MjztKr?si=5a3e462c9271470e", urlYT: "https://youtu.be/ZVgHPSyEIqk?si=rQ8lGv4JhGt98_19" },
    { title: "Back To Friend", artist: "Sombr", urlSpotify: "https://open.spotify.com/intl-id/track/0FTmksd2dxiE5e3rWyJXs6?si=63f5098b46084d6e", urlYT: "https://youtu.be/c8zq4kAn_O0?si=BgDdTF7RsvHDArgK" },
    { title: "Dirimu Yang Dulu", artist: "Anggis Devaki", urlSpotify: "https://open.spotify.com/intl-id/track/4NTJKqpoAlTG3RcPB3y4C7?si=106cb72bf1b14001", urlYT: "https://youtu.be/RY1zQHjUG_Q?si=-xufJGVAqeHZhAgq" },
    { title: "Andai Aku Bisa", artist: "Chrisye", urlSpotify: "https://open.spotify.com/intl-id/track/6mmVZerWyj5gO83hSpeZJG?si=1da8ac5124ca46ea", urlYT: "https://youtu.be/ew3lh7_DAeU?si=IxDNHdlGWtaKVYc5" },
    { title: "Titik Nadir", artist: "Kahitna", urlSpotify: "https://open.spotify.com/intl-id/track/52m690jqpxP1tHHkRNdl5p?si=9927d55a271d4f84", urlYT: "https://youtu.be/OQNu-iB2tE8?si=GKbTABo4s7u0lAWd" },
    { title: "Janji Setia", artist: "Tiara Andini", urlSpotify: "https://open.spotify.com/intl-id/track/1AoBdDIOp6RFjAbzcPbWi8?si=e7a4f6c08a0f41bf", urlYT: "https://youtu.be/PVIvHCX35hU?si=HtbgGHnlSlp3WbCR" }
    ],
    energized: [
    { title: "Celengan Rindu (Live Version)", artist: "Fiersa Besari", urlSpotify: "https://open.spotify.com/intl-id/track/4O0OMqWfNx46cQ3QraORIz?si=91619f3f21ed4861", urlYT: "https://youtu.be/1zGalAgnS0U?si=UH4gu3qH83WubV7V" },
    { title: "Sorai", artist: "Nadin Amizah", urlSpotify: "https://open.spotify.com/intl-id/track/3ymuBMTviroWLuf1jMsMVf?si=a049cc8f476c4fff", urlYT: "https://youtu.be/PF_VokiUndk?si=dAG8FYBIkF4B65Q-" },
    { title: "Zona Nyaman", artist: "Fourtwnty", urlSpotify: "https://open.spotify.com/intl-id/track/4lfAvFv8roumWVKXhHF8uN?si=9b3b25c1aa284258", urlYT: "https://youtu.be/OnfYLBNvrPw?si=BWJfrIH1LDZjK_ge" },
    { title: "Keep Being You", artist: "Isyana Sarasvati", urlSpotify: "https://open.spotify.com/intl-id/track/0w97yCPUzBdTAE2YziejAi?si=00b83688cdeb41d7", urlYT: "https://youtu.be/qwN01jlSD8c?si=IeCOc3gFUfCRkG_d" },
    { title: "Menunggumu", artist: "NOAH", urlSpotify: "https://open.spotify.com/intl-id/track/0c9kI2G2rtBJ9Z2VYLD8k2?si=401fa79145d446e8", urlYT: "https://youtu.be/-pHPGuZpqQk?si=osrmn29YXFvszNyB" },
    { title: "Jangan Menyerah", artist: "D'MASIV", urlSpotify: "https://open.spotify.com/intl-id/track/0xBpUyL8GzcmBcX2lbGCgE?si=41a9966541514558", urlYT: "https://youtu.be/a4qg4Rs5Ckc?si=w2DZPhKKuUwKc3iP" },
    { title: "Manusia Kuat", artist: "Tulus", urlSpotify: "https://open.spotify.com/intl-id/track/1vT1rKlEzvT9r0uYwAuwC8?si=2af54c60f1cf4454", urlYT: "https://youtu.be/LHOh-R00gzI?si=EsdA4i-DyXHjm6Iq" },
    { title: "Could It Be", artist: "Raisa", urlSpotify: "https://open.spotify.com/intl-id/track/6Khn20yWc0YGJy1wbkz3Be?si=6552325fba1b4353", urlYT: "https://youtu.be/9rXJ2WZ-auY?si=-5LebXVQCDUgXp1-" },
    { title: "Topik Semalam", artist: "Kunto Aji", urlSpotify: "https://open.spotify.com/intl-id/track/7u2YMSAWHbBV4iWwmz7FzQ?si=2bd35951f99b446b", urlYT: "https://youtu.be/xjqcZL57t5E?si=01SAJQGeQ2g6E-fi" },
    { title: "Amin Paling Serius", artist: "Sal Priadi & Nadin Amizah", urlSpotify: "https://open.spotify.com/intl-id/track/2KHllq5yeqjTyXnQPPUPMG?si=6c3fdb563dbf41bb", urlYT: "https://youtu.be/ZRMDxjRdJV8?si=HsAklPXihVRlRqR4" },
    { title: "Can't Stop The Feeling", artist: "Justin Timberlake", urlSpotify: "https://open.spotify.com/intl-id/track/6JV2JOEocMgcZxYSZelKcc?si=a9ad64020c1e45dc", urlYT: "https://youtu.be/ru0K8uYEZWw?si=QPAsJ8b30d6kZTY4" },
    { title: "Dance The Night", artist: "Dua Lipa", urlSpotify: "https://open.spotify.com/intl-id/track/1vYXt7VSjH9JIM5oRRo7vA?si=784b98509d794935", urlYT: "https://youtu.be/OiC1rgCPmUQ?si=_PdZTiWbWFZGkfDu" },
    { title: "On Top of the World", artist: "Imagine Dragons", urlSpotify: "https://open.spotify.com/intl-id/track/213x4gsFDm04hSqIUkg88w?si=5eb0ccd263414a0f", urlYT: "https://youtu.be/w5tWYmIOWGk?si=PL-Va6FCJIDSqxpw" },
    { title: "Adventure of a Lifetime", artist: "Coldplay", urlSpotify: "https://open.spotify.com/intl-id/track/69uxyAqqPIsUyTO8txoP2M?si=88e1c8b7bcdb4283", urlYT: "https://youtu.be/QtXby3twMmI?si=6kidf9fBAsfi-qJs" },
    { title: "I Lived", artist: "OneRepublic", urlSpotify: "https://open.spotify.com/intl-id/track/3IQF4xCQUPicbA4hWfTxPo?si=8afc07376b5846b7", urlYT: "https://youtu.be/z0rxydSolwU?si=Ta-e48HUyeLtnTMT" },
    { title: "There's Nothing Holdin' Me Back", artist: "Shawn Mendes", urlSpotify: "https://open.spotify.com/intl-id/track/7JJmb5XwzOO8jgpou264Ml?si=7c194be590dc4a37", urlYT: "https://youtu.be/dT2owtxkU8k?si=hcE4rCajiuYlSo3T" },
    { title: "The Nights", artist: "Avicii", urlSpotify: "https://open.spotify.com/intl-id/track/0ct6r3EGTcMLPtrXHDvVjc?si=68af5bbab575455f", urlYT: "https://youtu.be/UtF6Jej8yb4?si=ZuhkkeYAw8JmlCnV" },
    { title: "Roar", artist: "Katy Perry", urlSpotify: "https://open.spotify.com/intl-id/track/6F5c58TMEs1byxUstkzVeM?si=e615aed957954812", urlYT: "https://youtu.be/CevxZvSJLk8?si=ShDqutFFRCfJU8Yd" },
    { title: "Hall of Fame", artist: "The Script", urlSpotify: "https://open.spotify.com/intl-id/track/0FB5ILDICqwK6xj7W1RP9u?si=82a9d579cf93445c", urlYT: "https://youtu.be/mk48xRzuNvA?si=Mb8XXHQWpte9uMoQ" },
    { title: "Shake It Off", artist: "Taylor Swift", urlSpotify: "https://open.spotify.com/intl-id/track/0cqRj7pUJDkTCEsJkx8snD?si=e3696efa53614361", urlYT: "https://youtu.be/nfWlot6h_JM?si=iRl-dAULjbIjGEgB" }
    ],
    calm: [
    { title: "Bertaut", artist: "Nadin Amizah", urlSpotify: "https://open.spotify.com/intl-id/track/630DpnzdfjdVqv2yLfPbAX?si=602411878eb04b2a", urlYT: "https://youtu.be/HyhLsy6b0XI?si=XuOFVJXxxx7NciKW" },
    { title: "Rumpang", artist: "Nadin Amizah", urlSpotify: "https://open.spotify.com/intl-id/track/2TRGNVokPnC2a2oHg5iv1H?si=598079a813c04050", urlYT: "https://youtu.be/XshVws8BE3A?si=0afHk_OjF4Kgxr_O" },
    { title: "Adu Rayu", artist: "Yovie Widianto, Tulus, Glenn Fredly", urlSpotify: "https://open.spotify.com/intl-id/track/0mOLyv1GL4sIuzVR1I92Fb?si=ed648650b25f4d5d", urlYT: "https://youtu.be/rfWRkrhN2bA?si=CctOi_eN_N5NXz3P" },
    { title: "Hati-Hati di Jalan", artist: "Tulus", urlSpotify: "https://open.spotify.com/intl-id/track/2hHeGD57S0BcopfVcmehdl?si=c81d55564ced45ab", urlYT: "https://youtu.be/9II3OGZETo4?si=XEUUtF6xbmZ6Bs_k" },
    { title: "Langit Abu-Abu", artist: "Kunto Aji", urlSpotify: "https://open.spotify.com/intl-id/track/2FaquTc3FYvNm7RuO1gD6O?si=3744b709d0f74c3e", urlYT: "https://youtu.be/CVI6SOuPAAw?si=YQkLY80GNMlahCrH" },
    { title: "Rehat", artist: "Kunto Aji", urlSpotify: "https://open.spotify.com/intl-id/track/7mjO4RbTZIb1SfE8G673Lm?si=da87fd6c0e8c4cdb", urlYT: "https://youtu.be/yNcGtKAacts?si=wDEr5ZrWkYnvDZRN" },
    { title: "Sesuatu di Jogja", artist: "Adhitia Sofyan", urlSpotify: "https://open.spotify.com/intl-id/track/7giGF9tkiLDWD9DVisB3Qh?si=f9877e78cd804050", urlYT: "https://youtu.be/l2mI4vL95kU?si=xA0jkvhEfNlPYDJM" },
    { title: "Blue Jeans", artist: "GANGGA", urlSpotify: "https://open.spotify.com/intl-id/track/4kfjA6WfgKBt7I7YKuDCkU?si=624216bb53484324", urlYT: "https://youtu.be/UzKdy75GqXQ?si=OXRtl4N0n3-g3b3A" },
    { title: "Hanya Rindu", artist: "Andmesh", urlSpotify: "https://open.spotify.com/intl-id/track/0qGWdzIbvxO1QsUiwfAoNz?si=152f240fd3574d3a", urlYT: "https://youtu.be/FcOctsNXyjk?si=Njgll217vlfZWGV5" },
    { title: "Bunga Tidur", artist: "Juicy Luicy", urlSpotify: "https://open.spotify.com/intl-id/track/2o9AHYt8uSxS7tPnukrDaI?si=40b419354ada4968", urlYT: "https://youtu.be/RHZIKcqCnFQ?si=Og1OqMrs7kJ0jy5d" },
    { title: "Kesempurnaan Cinta", artist: "Rizky Febian", urlSpotify: "https://open.spotify.com/intl-id/track/18tLvggTFEZuzLdcnuej2u?si=80e3e98345c14caf", urlYT: "https://youtu.be/XyHhr2XbaGc?si=loPMHxzwo_iFEOni" },
    { title: "Bisa Tanpamu", artist: "Andmesh", urlSpotify: "https://open.spotify.com/intl-id/track/3wQg61tUhva9ZpdZ9BVaV5?si=f458b380360d42f3", urlYT: "https://youtu.be/deaNzyAZhHw?si=AmxcMGb9oiJWJCcz" },
    { title: "Pilihanku", artist: "Maliq & D'Essentials", urlSpotify: "https://open.spotify.com/intl-id/track/3puYuuZ7lmlTjIgXBOT01k?si=05a476be52734c3b", urlYT: "https://youtu.be/GsVyAFgWmUE?si=QLMCY4EaP-H1nB2x" },
    { title: "Nyaman", artist: "Andmesh", urlSpotify: "https://open.spotify.com/intl-id/track/1li6ZfdoeHY0STg2hU2pkE?si=c2af8b4af244449b", urlYT: "https://youtu.be/R608Rce03Ho?si=pV3TKa2geS9X4Omz" },
    { title: "Sunset di Tanah Anarki", artist: "Superman Is Dead", urlSpotify: "https://open.spotify.com/intl-id/track/1bfbixjy7OPG2n3MbLKrKu?si=652be2ebe8434cd5", urlYT: "https://youtu.be/lUY9geM9ZLk?si=A-UDUrtmJ-irYljV" },
    { title: "Winter Bear", artist: "V (BTS)", urlSpotify: "https://open.spotify.com/intl-id/track/74ewFAgDzRkhZ7EX2eLtfZ?si=e8af19fb52094161", urlYT: "https://youtu.be/pk7ESz6vtyA?si=GVNPnsba-8kFtKBs" },
    { title: "ILYSB (Stripped)", artist: "LANY", urlSpotify: "https://open.spotify.com/intl-id/track/3Dkvp3L4w0uJFYfIPa8E9H?si=143c048f8f85486a", urlYT: "https://youtu.be/RPvhItA3lIM?si=9ydACKeMxuLn_ldJ" },
    { title: "Happier", artist: "Ed Sheeran", urlSpotify: "https://open.spotify.com/intl-id/track/2RttW7RAu5nOAfq6YFvApB?si=af3633481d5a44fe", urlYT: "https://youtu.be/8TpcBDJZsJA?si=pfxXYoUViGRkvPF6" },
    { title: "I Won't Give Up", artist: "Jason Mraz", urlSpotify: "https://open.spotify.com/intl-id/track/5ivF4eQBqJiVL5IAE9jRyl?si=a7b58aa9cc624d90", urlYT: "https://youtu.be/O1-4u9W-bns?si=5B-9NHdzqXUF421p" },
    { title: "Best Part", artist: "Daniel Caesar ft. H.E.R.", urlSpotify: "https://open.spotify.com/intl-id/track/1Q7EgiMOuwDcB0PJC6AzON?si=48c40edebe454699", urlYT: "https://youtu.be/vBy7FaapGRo?si=bDkIap9q28AvP3PA" }
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
        card.onclick = () => openModal(song.title, song.artist, song.urlSpotify, song.urlYT);
        list.appendChild(card);
    });
}

function refreshMood(mood) {
    renderSongs(mood);
}

// Variable untuk menyimpan URL sementara
let currentSpotifyUrl = "";
let currentYoutubeUrl = "";

// Fungsi untuk membuka modal
function openModal(title, artist, spotifyUrl, youtubeUrl) {
    document.getElementById('modal-song-title').textContent = title;
    document.getElementById('modal-song-artist').textContent = artist;
    currentSpotifyUrl = spotifyUrl;
    currentYoutubeUrl = youtubeUrl;
    document.getElementById('song-modal').style.display = 'block';
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById('song-modal').style.display = 'none';
}

// Fungsi untuk membuka platform
function openPlatform(platform) {
    if (platform === 'spotify' && currentSpotifyUrl) {
        window.open(currentSpotifyUrl, '_blank');
    } else if (platform === 'youtube' && currentYoutubeUrl) {
        window.open(currentYoutubeUrl, '_blank');
    }
    closeModal();
}

// Tutup modal jika klik di luar
window.onclick = function(event) {
    const modal = document.getElementById('song-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// Random delays untuk music notes
const notes = document.querySelectorAll('.music-note');
notes.forEach(note => {
    const randomDelay = Math.random() * 15;
    note.style.animationDelay = randomDelay + 's';
});

["happy", "sad", "energized", "calm"].forEach(renderSongs);