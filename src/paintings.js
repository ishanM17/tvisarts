const paintings = [
    {
        id: 1,
        type: "Embossed Art",
        items: [
            {
                id: 1,
                title: "A Symphony of Colors",
                src: "./images/embossed/lorikeets.jpg",
                medium: "Clay work on wood panel",
                size: "46 X 61 cms",
                available: true
            },
            {
                id: 2,
                title: "Rustic Hops - Kangaroos of the Hills",
                src: "./images/embossed/kangaroo.jpg",
                medium: "Clay work on wood panel",
                size: "41 X 61 cms",
                available: true
            },
            {
                id: 3,
                title: "Enchanted Gaze",
                src: "./images/embossed/eye.jpg",
                medium: "Clay work on wood panel",
                size: "64 X 79 cms",
                available: true
            },
            {
                id: 4,
                title: "Tree of life",
                src: "./images/embossed/tree.png",
                medium: "Clay work on wood panel",
                size: "68 X 53 cms",
                available: true
            },
            {
                id: 5,
                title: "Lone Sentinel",
                src: "./images/embossed/leaf1.jpg",
                medium: "Clay work on canvas",
                size: "61 X 61 cms",
                available: true
            },
            {
                id: 6,
                title: "Own the Moon",
                src: "./images/embossed/moon.jpg",
                medium: "Clay work on wood panel",
                size: "57dia X 6 cm",
                available: true
            },
            {
                id: 7,
                title: "Essence Unveiled",
                src: "./images/embossed/leaf2.jpg",
                medium: "Clay work on canvas",
                size: "46 X 36 cms",
                available: true
            },
            {
                id: 8,
                title: "Silent Reverie",
                src: "./images/embossed/sunrise.jpg",
                medium: "Clay work on wood panel",
                size: "51 X 41 cms",
                available: false
            },
            {
                id: 9,
                title: "Ornate Gaze",
                src: "./images/embossed/mirror.jpg",
                medium: "Clay work on wood panel with mirror",
                size: "76 X 51 cms",
                available: false
            },
            {
                id: 10,
                title: "Divine Rhapsody of Ganesha",
                src: "./images/embossed/ganesha.jpg",
                medium: "Clay work on wood panel",
                size: "66 X 36 cms",
                available: false
            },
            {
                id: 11,
                title: "Nature's Reflection",
                src: "./images/embossed/peacock.jpg",
                medium: "Clay work on wood panel with mirror",
                size: "92 X 25 cms",
                available: false
            },
            // {
            //     id: 12,
            //     title: "Sunflower ceramic log",
            //     src: "./images/embossed/log.png",
            //     medium: "Clay work on PVC pipr",
            //     size: "92 X 25 cms",
            //     available: false
            // }
        ]
    },
    {
        id: 2,
        type: "Indian Art",
        items: [
            {
                id: 1,
                title: "Queens elegance in repose",
                src: "./images/indian/queen.jpg",
                medium: "Oil paint and clay on canvas",
                size: "102 X 76 cms",
                available: true
            },
            {
                id: 2,
                title: "The Enchanted Grove",
                src: "./images/indian/venugopal.jpg",
                medium: "Mysore gold foil mural",
                size: "43 X 33 cms",
                available: true
            },
            {
                id: 3,
                title: "Balakrishna - The Divine Child",
                src: "./images/indian/balkrishna.jpg",
                medium: "Tanjore gold foil mural",
                size: "48 X 40 cms",
                available: true
            },
            {
                id: 4,
                title: "Divine Love",
                src: "./images/indian/love.jpg",
                medium: "Kerala mural on canvas",
                size: "54 X 38 cms",
                available: true
            },
            {
                id: 5,
                title: "The Eternal Embrace",
                src: "./images/indian/shivparvati.jpg",
                medium: "Kerala mural on canvas",
                size: "50 X 33 cms",
                available: true
            },
            {
                id: 6,
                title: "Majesty and Grace",
                src: "./images/indian/mughals.jpg",
                medium: "Mughal miniature painting",
                size: "54 X 42 cms",
                available: true
            },
            {
                id: 7,
                title: "The Sacred Octagon",
                src: "./images/indian/pattachitra.jpg",
                medium: "Pattachitra painting",
                size: "33 X 28 cms",
                available: true
            },
            {
                id: 8,
                title: "Ganesha’s Lustrous Legacy",
                src: "./images/indian/sideface.jpg",
                medium: "Tanjore Gold foil mural",
                size: "38 X 30 cms",
                available: false
            },
            {
                id: 9,
                title: "The Embodiment of Preservation",
                src: "./images/indian/vishnu.jpg",
                medium: "Kerala mural on canvas",
                size: "101 X 76 cms",
                available: false
            },
            {
                id: 10,
                title: "The Protector’s Vision",
                src: "./images/indian/drishti.jpg",
                medium: "Kerala Mural on canvas",
                size: "50 X 40 cms",
                available: false
            },
            {
                id: 11,
                title: "The Trio of Prosperity, Wisdom, and Artistry",
                src: "./images/indian/trio.jpg",
                medium: "Tanjore Gold foil mural",
                size: "30 X 25 cms each",
                available: false
            },
            {
                id: 12,
                title: "Whispers of Eden",
                src: "./images/indian/eden.jpg",
                medium: "Soft Pastels on canvas",
                size: "45 X 45 cms",
                available: false
            }
        ]
    },
    {
        id: 3,
        type: "Watercolor",
        items: [
            {
                id: 1,
                title: "Reflections of Tranquility",
                src: "./images/watercolor/temple.jpg",
                medium: "Watercolors on paper",
                size: "41 X 56 cms",
                available: true
            },
            {
                id: 2,
                title: "Wings of Serenity",
                src: "./images/watercolor/butterfly.jpg",
                medium: "Watercolors on paper",
                size: "42 X 55 cms",
                available: true
            },
            {
                id: 3,
                title: "Daffy Dances in Dew",
                src: "./images/watercolor/daffodile.jpg",
                medium: "Watercolors on paper",
                size: "38 X 48 cms",
                available: true
            },
            { 
                id: 4,
                title: "The Blush of Life",
                src: "./images/watercolor/hibiscus.jpg",
                medium: "Watercolors on paper",
                size: "42 X 55 cms",
                available: true
            },
            {
                id: 5,
                title: "The forgotten epoch",
                src: "./images/watercolor/sculpture.jpg",
                medium: "Watercolors on paper",
                size: "39 X 56 cms",
                available: true
            },
            {
                id: 6,
                title: "Whispers of Spring",
                src: "./images/watercolor/roses.jpg",
                medium: "Watercolors on paper",
                size: "43 X 33 cms",
                available: true
            },
            {
                id: 7,
                title: "The Dance of Light and Color",
                src: "./images/watercolor/white.jpg",
                medium: "Watercolors on paper",
                size: "43 X 33 cms",
                available: true
            },
            {
                id: 8,
                title: "A Rosy Reverie",
                src: "./images/watercolor/pink.jpg",
                medium: "Watercolors on paper",
                size: "43 X 33 cms",
                available: false
            }
        ]
    },
    {
        id: 4,
        type: "Potraits",
        items: [
            {
                id: 1,
                title: "Resilience in Wrinkles",
                src: "./images/potraits/tribal.jpg",
                medium: "Pencil on paper",
                size: "36 X 27 cms",
                available: true
            },
            {
                id: 2,
                title: "Sage of Serenity - Sadguru",
                src: "./images/potraits/sadguru.jpg",
                medium: "Watercolors on Paper",
                size: "47 X 40 cms",
                available: true
            },
            {
                id: 3,
                title: "The Power of Poise",
                src: "./images/potraits/serena.jpg",
                medium: "Soft Pastels on paper",
                size: "39 X 30 cms",
                available: true
            },
            {
                id: 4,
                title: "Mystery in Monochromer",
                src: "./images/potraits/mystery.jpg",
                medium: "Charcoal on paper",
                size: "39 X 30 cms",
                available: true
            },
            {
                id: 5,
                title: "Silver Strands",
                src: "./images/potraits/silver.jpg",
                medium: "Watercolors on paper",
                size: "39 X 30 cms",
                available: true
            },
            {
                id: 6,
                title: "Invisible Threads",
                src: "./images/potraits/threads.jpg",
                medium: "Pencil on paper",
                size: "39 X 30 cms",
                available: true
            },
            {
                id: 7,
                title: "Dreams of Childhood",
                src: "./images/potraits/jay.jpg",
                medium: "Pencil on paper",
                size: "39 X 30 cms",
                available: true
            },
            {
                id: 8,
                title: "Time-Honored Gentleman",
                src: "./images/potraits/gentleman.jpg",
                medium: "Soft Pastels on paper",
                size: "39 X 30 cms",
                available: true
            },
            {
                id: 9,
                title: "Wisdom in Silence",
                src: "./images/potraits/silence.jpg",
                medium: "Pencil on paper",
                size: "28 X 30 cms",
                available: true
            },
            {
                id: 10,
                title: "Cool Captain",
                src: "./images/potraits/dhoni.jpg",
                medium: "Pencil on paper",
                size: "20 X 18 cms",
                available: true
            },
            {
                id: 11,
                title: "Stride of a Legend ",
                src: "./images/potraits/milkha.jpg",
                medium: "Soft Pastels on paper",
                size: "30 X 20 cms",
                available: true
            },
            {
                id: 12,
                title: "Turbans and Tales",
                src: "./images/potraits/turban.jpg",
                medium: "Pencil on paper",
                size: "39 X 30 cms",
                available: true
            },
            {
                id: 13,
                title: "Beyond the Stars",
                src: "./images/potraits/sushant.jpg",
                medium: "Soft Pastel on paper",
                size: "30 X 20 cms",
                available: true
            },
            {
                id: 14,
                title: "Girl in Floral Elegance",
                src: "./images/potraits/flora.jpg",
                medium: "Soft Pastels on paper",
                size: "30 X 20 cms",
                available: true
            }            
        ]
    },
    {
        id: 5,
        type: "Sketches",
        items: [
            {
                id: 1,
                title: "Quiet Contemplation",
                src: "./images/sketches/quite.png",
                medium: "Pencil on paper",
                size: "24 X 20 cms",
                available: true
            },
            {
                id: 2,
                title: "Echoes of stillness",
                src: "./images/sketches/strom.jpg",
                medium: "Colour Pencil on paper",
                size: "40 X 28 cms",
                available: true
            },
            {
                id: 3,
                title: "Invisible blossom of enlightenment",
                src: "./images/sketches/buddha.jpg",
                medium: "Pencil on paper",
                size: "36 X 25 cms",
                available: true
            },
            {
                id: 4,
                title: "City of angels",
                src: "./images/sketches/city.jpg",
                medium: "Pencil on paper",
                size: "23 X 35 cms",
                available: true
            },
            {
                id: 5,
                title: "Bountiful harvest",
                src: "./images/sketches/fruits.jpg",
                medium: "Colour Pencil on paper",
                size: "24 X 36 cms",
                available: true
            },
            {
                id: 6,
                title: "Monochrome Majesty",
                src: "./images/sketches/tajmahal.jpg",
                medium: "Pencil on paper",
                size: "23 X 35 cms",
                available: true
            },
            {
                id: 7,
                title: "Charles Bargue Plate 36",
                src: "./images/sketches/charles.jpg",
                medium: "Pencil on paper",
                size: "30 X 20 cms",
                available: true
            },
            {
                id: 8,
                title: "The thatched harmony",
                src: "./images/sketches/village.jpg",
                medium: "Colour Pencil on paper",
                size: "24 X 36 cms",
                available: true
            }
        ]
    }
]


export default paintings;



