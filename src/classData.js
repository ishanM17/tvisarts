const classData = [
    // {
    //     id: 1,
    //     src: "/images/valentine.png",
    //     src2: "/images/valentine-detail.jpg",
    //     src2: "/images/valentine-process.jpg",
    //     heading: "Valentine's Day - Art",
    //     detail: [
    //         "Transform your Valentine's Day celebration into an unforgettable experience by enrolling in our exclusive \"Spill The Love\" class—a captivating two-hour workshop designed exclusively for ladies. Immerse yourself in the mesmerizing world of fluid art as you create a stunning acrylic pour on a 12-inch square canvas, infused with enchanting Valentine colors. Surprise your partner with a uniquely crafted masterpiece that beautifully symbolizes your love."
    //     ],
    //     features: {
    //         age: "Ladies only(16+)",
    //         dates: "Acrylic pour",
    //         days: "10th February",
    //         timings: "11:00 am-1:00 pm",
    //         fees: "$50/Class",
    //         materials: "Material Provided"
    //     }
    // },
    {
        id: 1,
        src: "/images/ganesh.png",
        src2: "/images/ganesh-detail.jpg",
        src3: "/images/ganesh-process.png",
        heading: "Ganesha Idol Workshop",
        detail: [
            "Rebirth of nature with Plant Ganesha. Let's celebrate this Ganesh Chaturthi in an eco-friendly way by making an idol of Ganesha with clay. Eco-friendly idols encourage sustainable practice and raise awareness about environmental conservation. It sets a positive example for future generations. TO complete the immersion ritual with a Plant Ganesh Idol, all we need is a bucket of water and the best part is, it can be done in one’s own backyard instead of being carried to a waterbody. This exciting new format instantly touches a chord with people. By choosing Eco-friendly Ganesha Idols, you contribute to a healthier planet and celebrate the festival in a responsible way."
        ],
        features: {
            size: "Size-8 inch",
            age: "Kids(above 5yrs) and Adults",
            date: "24th Aug",
            timings: "10:00 am-12:00 pm",
            fees: "$30",
            material: "Material Provided"
        }
    },
    {
        id: 2,
        src: "/images/canvas.png",
        src2: "/images/canvas-detail.jpg",
        src3: "/images/canvas-examples.jpg",
        heading: "Canvas Painting Class",
        detail: [
            "Tap into your artistic potential and let your creativity flow onto the blank canvas. In this class, our experienced instructor will generously impart expert techniques and insights to guide you through the world of acrylic painting. Embrace the opportunity to explore a variety of brush approaches, discovering the nuances that make each stroke unique.",
            "Embark on your artistic journey by selecting a painting that ignites your inspiration from the captivating images presented below, or unleash your creativity by crafting an original masterpiece straight from the depths of your imagination. Should you opt for a larger canvas, feel free to explore the possibility of extending your exploration over multiple sessions—a topic open for discussion with your dedicated instructor. Seize this opportunity to cultivate your artistic prowess under the tutelage of a seasoned instructor."
        ],
        features: {
            days: "Tuesdays",
            timings: "4:30 pm-6:00 pm",
            fees: "$30/Class",
            material: "Material Provided"
        }
    },
    {
        id: 3,
        src: "/images/watercolor-adult.png",
        src2: "/images/watercolor-adult-detail.jpg",
        src3: "/images/watercolor-adult-examples.jpg",
        heading: "Fundamentals of Watercolor",
        detail: [
            "Delve into the fundamental essence of watercolors, where artistry meets fluidity and every stroke tells a story. Explore the foundational principles that make this medium unique and captivating.  In this weekly class, you will learn techniques like transparency and layering, water control, color mixing, wet on wet, wet on dry, washes, glazing, masking etc. Students will paint Simple landscapes, still life and floral compositions. Above all, this course will help students develop an appreciation for fine watercolor art and expand their painting capabilities."
        ],
        features: {
            difficulty: "Beginners and Intermediate",
            gender: "Women only batch",
            days: "Thursdays",
            timings: "11:00 am-12:30 pm",
            fees: "$30/Class",
            material: "Material Provided"
        }
    },
    {
        id: 4,
        src: "/images/mandala.png",
        src2: "/images/mandala-detail.jpg",
        src3: "/images/mandala-examples.jpg",
        heading: "Mandala Class",
        detail: [
            "In the ancient Sanskrit language of Hinduism and Buddhism, mandala means circle. Traditionally, a mandala is a geometric design or pattern that represents the cosmos or deities in various heavenly worlds. In this class you will learn to create grid used for making mandalas and will paint one mandala of your choice",
            "You can select a mandala that ignites your inspiration from the captivating images presented below, or unleash your creativity by crafting an original masterpiece straight from the depths of your imagination. Should you opt for a larger canvas, feel free to explore the possibility of extending your exploration over multiple sessions—a topic open for discussion with your dedicated instructor. Seize this opportunity to cultivate your artistic prowess under the tutelage of a seasoned instructor."
        ],
        features: {
            days: "Tuesdays",
            timings: "4:30 pm-6:00 pm",
            fees: "$30/Class",
            material: "Material Provided"
        }
    },
    {
        id: 5,
        src: "/images/tanjore.png",
        src2: "/images/tanjore-detail.jpg",
        src3: "/images/tanjore-examples.jpg",
        heading: "Tanjore Painting Class",
        detail: [
            "Tanjore paintings are 17th century, classic art forms from the southern part of India. Tanjore paintings are known for their extravagant depictions of deities using vibrant colors and gaudy embellishments like semi-precious stones, pearls, crystals especially 24 karat gold foil. These paintings decorate the puja rooms in residences, arcades in major hotels and lobbies in Corporate Offices. They also make nice gifts for Diwali, Weddings and other special occasions.",
            "Here the student will learn to make his/her choice of Tanjore painting from scratch. The making of Tanjore is a tedious and elaborate process which will be taught to students so that he/she should be able to make similar paintings by themselves. A 16*20 inch tanjore painting will need at least 8 classes to complete.Number of classes for the course depends on the size and complexity of the painting selected."
        ],
        features: {
            numClass: "8 Classes / Tanjore",
            days: "Tuesdays",
            timings: "11:00 am-1:00 pm",
            fees: "$50/Class",
            materials: "Material Provided"
        }
    },
    {
        id: 6,
        src: "/images/kerala.png",
        src2: "/images/kerala-detail.jpg",
        src3: "/images/kerala-examples.jpg",
        heading: "Kerala Mural Class",
        detail: [
            "Kerala mural paintings are the frescoes depicting mythology and legends, which are drawn on the walls of temples and churches in Kerala. The murals of Kerala unfathomably stand out for their prominence in beauty, clarity and symmetry with unmatchable linear accuracy. These paintings decorate the puja rooms in residences, arcades in major hotels and lobbies in Corporate Offices. They also make nice gifts for Diwali, Weddings and other special occasions.",
            "Here the student will learn to make his/her choice of Kerala mural from scratch. The making of Kerala murals is a tedious and elaborate process which will be taught to students so that he/she should be able to make similar paintings by themselves. A 16*20 inch Kerala mural painting will need at least 8 classes to complete.Number of classes for the course depends on the size and complexity of the painting selected."
        ],
        features: {
            numClass: "8 Classes / Mural",
            days: "Tuesdays",
            timings: "11:00 am-1:00 pm",
            fees: "$30/Class",
            materials: "Material Provided"
        }
    },
    {
        id: 7,
        src: "/images/madhubani.png",
        src2: "/images/madhubani-detail.jpg",
        heading: "Madhubani Painting Class",
        detail: [
            "Madhubani Painting originated 2500 years ago near Mithila region of Bihar at the time of the Ramayana, when king Janak asked various artists to paint the city at the time of marriage of his daughter Sita and lord Ram. Mithila paintings mostly depict people and their association with nature and scenes and deities from the ancient epics. These paintings often have geometric patterns and bright colors. These geometric patterns are often used to symbolize valor, devotion, love, fertility, peace and prosperity. These paintings decorate the puja rooms in residences, arcades in major hotels and lobbies in Corporate Offices. They also make nice gifts for Diwali, Weddings and other special occasions.",
            "Here the student will learn to make his/her choice of madhubani painting from scratch. The making of madhubani painting is a tedious and elaborate process, which will be taught to students so that he/she should be able to make similar paintings by themselves. At the end of the course the student will be taught to paint one of the madhubani learnt on canvas."
        ],
        features: {
            // dates: "5th Feb-28th Mar",
            days: "Tuesdays",
            timings: "11:00 am-1:00 pm",
            fees: "$30/Class",
            materials: "Material Provided"
        }
    }
];

export default classData;