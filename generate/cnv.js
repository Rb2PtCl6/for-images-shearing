const fs = require('fs');

var arr=[
    {name:"bg2-optimized.webp",key:"522465"},
    {name:"origami_fon_pc_2-1200x420-optimized.webp",key:"399912"},
    {name:"angel_origami_0(corn)-1-600-optimized.webp",key:"307542"},
    {name:"tobiichi-origami-ava-2-1-ths-optimized.webp",key:"151420"},
    {name:"atar-ava-white-72q.webp",key:"668131"},
    {name:"origami-angel-padoru-1_waifu2x_noise1_scale4x-(1k1)-1080p-75q.webp",key:"504109"}
]

fs.appendFileSync("info",JSON.stringify(arr))