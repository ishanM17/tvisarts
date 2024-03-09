const adultClassData = [
    {
        id: 1,
        src: "/images/valentine.png",
        src2: "/images/valentine-detail.jpg",
        src3: "/images/valentine-process.jpg",
        heading: "Valentine's Day - Art",
        detail: [
            "Transform your Valentine's Day celebration into an unforgettable experience by enrolling in our exclusive \"Spill The Love\" class—a captivating two-hour workshop designed exclusively for ladies. Immerse yourself in the mesmerizing world of fluid art as you create a stunning acrylic pour on a 12-inch square canvas, infused with enchanting Valentine colors. Surprise your partner with a uniquely crafted masterpiece that beautifully symbolizes your love."
        ],
        features: {
            age: "Ladies only(16+)",
            dates: "Acrylic pour Art",
            days: "10th February",
            timings: "11:00 am-1:00 pm",
            fees: "$50 per class",
            materials: "Material Provided"
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
            days: "Tuesday's",
            timings: "11:00 am-1:00 pm",
            fees: "$50/class",
            materials: "Material Provided"
        }
    },
    {
        id: 3,
        src: "/images/watercolor-adult.png",
        src2: "/images/watercolor-adult-detail.jpg",
        src3: "/images/watercolor-adult-examples.jpg",
        heading: "Fundamentals of Watercolor",
        detail: [
            "Explore the foundational principles of watercolor that make this medium unique and captivating. In this 6-week course, you will learn techniques like transparency and layering, water control, color mixing, wet on wet, wet on dry, washes, glazing, masking etc. Students will paint Simple landscapes, still life and floral compositions. Above all, this course will help students develop an appreciation for fine watercolor art and expand their painting capabilities.",
            "This workshop is suitable for 16 years and above. Sessions on Fridays, 9th, 16th, 23rd February and 1st, 8th, 15th March 2024. One missed session can be attended on 22nd March 2024. Students are required to bring a good quality watercolor paper for better results. 300gsm is preferred although student 140 gsm quality is fine for practice. A watercolor paper block is sealed on 3 sides so will prevent buckling while painting."
        ],
        features: {
            age: "Beginners and Intermediate",
            dates: "9th Feb-22th Mar",
            days: "Friday's",
            timings: "11:00 am-1:00 pm",
            fees: "$180",
            materials: "Material Provided except watercolor paper"
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
            dates: "2 classes per mandala",
            days: "Tuesday's",
            timings: "11:00 am-1:00 pm",
            fees: "$30/class",
            materials: "Material Provided"
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
            dates: "8 classes per tanjore",
            days: "Tuesday's",
            timings: "11:00 am-1:00 pm",
            fees: "$50/class",
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
            dates: "8 classes per mural",
            days: "Tue and Thur",
            timings: "11:00 am-1:00 pm",
            Fees: "$30/class",
            materials: "Material Provided"
        }
    },
    // {
    //     id: 7,
    //     src: "/images/madhubani.png",
    //     src2: "/images/madhubani-detail.jpg",
    //     heading: "Madhubani Painting Class",
    //     detail: [
    //         "Madhubani Painting originated 2500 years ago near Mithila region of Bihar at the time of the Ramayana, when king Janak asked various artists to paint the city at the time of marriage of his daughter Sita and lord Ram. Mithila paintings mostly depict people and their association with nature and scenes and deities from the ancient epics. These paintings often have geometric patterns and bright colors. These geometric patterns are often used to symbolize valor, devotion, love, fertility, peace and prosperity. These paintings decorate the puja rooms in residences, arcades in major hotels and lobbies in Corporate Offices. They also make nice gifts for Diwali, Weddings and other special occasions.",
    //         "Here the student will learn to make his/her choice of madhubani painting from scratch. The making of madhubani painting is a tedious and elaborate process, which will be taught to students so that he/she should be able to make similar paintings by themselves. At the end of the course the student will be taught to paint one of the madhubani learnt on canvas."
    //     ],
    //     features: {
    //         dates: "5th Feb-28th Mar",
    //         days: "Tue and Thur",
    //         timings: "11:00 am-1:00 pm",
    //         Fees: "$30/class",
    //         materials: "Material Provided"
    //     }
    // }


];


export default adultClassData;

