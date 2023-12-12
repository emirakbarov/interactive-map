
const backBTN = document.querySelector("#backButton");
const nextBTN = document.querySelector("#nextButton");

const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");

const slide1Objs = {
    h3: slide1.querySelector("b"),
    p: slide1.querySelector("p"),
    img: slide1.querySelector("img")
}
const slide2Objs = {
    h3: slide2.querySelector("b"),
    p: slide2.querySelector("p"),
    img: slide2.querySelector("img")
}

const slideData = [
    {
        id: 1,
        h3: "1. Le Jules Verne",
        p: "Le Jules Verne, a gastronomic jewel nestled within the iconic Eiffel Tower, is a feast for the senses. As you step inside the private elevator that whisks you up to the restaurant, you're on the threshold of an unforgettable culinary adventure. Chef Frédéric Anton, with his three Michelin stars, orchestrates a symphony of flavors using the finest ingredients from across France. The dining room is adorned with large windows that provide a bird's-eye view of the city. Dining here feels akin to being suspended in the sky, the Eiffel Tower's iron lattice framing your experience. Each dish is a masterstroke, a perfect blend of tradition and innovation. Delicate foie gras, perfectly seared seafood, and decadent desserts are served with meticulous precision. And as the day transitions into night, the Eiffel Tower itself becomes a living part of your dining experience, its lights casting a warm, romantic glow over your meal.",
        img: "../images/julesVerne.jpg"
    },
    {
        id: 2,
        h3: "2. Musee Du Louvre",
        p: "The Louvre is an unparalleled treasure chest of art, history, and culture, housed within a former royal palace. The Louvre's history stretches back to the medieval fortress of the 12th century, and it was later transformed into a lavish residence for French royalty. Today, the museum welcomes millions of visitors from all corners of the globe. The collection is immense and diverse, encompassing more than 380,000 objects, displayed across eight departments. The Mona Lisa, with her enigmatic smile, and the Venus de Milo, a testament to classical beauty, are among the most famous residents of the Louvre. But beyond these iconic pieces, the museum's extensive galleries house a wealth of treasures. The Grand Gallery, a seemingly endless corridor adorned with sculptures and masterpieces, is a journey through time and artistry. The Louvre allows you to travel through history, across continents, and into the realms of both classic and contemporary art.",
        img: "../images/louvre.jpg"
    },
    {
        id: 3,
        h3: "3. Montmarte",
        p: "Montmartre, perched on a hill in the 18th arrondissement, is a neighborhood that wears its bohemian heart on its sleeve. The most iconic feature is the stunning Sacré-Cœur Basilica, a brilliant white structure that crowns the hill. As you climb the steps leading to the basilica, the panoramic view of Paris unfolds before you. The cobblestone streets wind their way through Montmartre, leading you to charming cafés and bistros that evoke the ghosts of artists past. The Place du Tertre, a charming square at the center of Montmartre, buzzes with creativity. Talented artists set up their easels and create captivating works in real-time, often inspired by the neighborhood's artistic legacy. Montmartre's charm lies in its ability to transport you to a bygone era of creativity and romance, where every corner seems to whisper stories of Picasso, Dali, and the vibrant Parisian art scene.",
        img: "../images/montmarte.jpg"
    },
    {
        id: 4,
        h3: "4. Le Marais",
        p: "Le Marais, situated in the heart of Paris, is a district that encapsulates the city's rich history and contemporary vibrancy. Wandering through its narrow streets, you'll encounter a captivating blend of architectural styles, from medieval timbered buildings to elegant townhouses. The neighborhood is also home to some of the city's most fashionable boutiques, concept stores, and art galleries. A stroll through the hidden courtyards and gardens, tucked behind grand wooden doors, offers a glimpse into the city's quieter and more enchanting corners. Le Marais has a distinctive Jewish heritage, which is reflected in its vibrant kosher bakeries and the serene ambiance of its historic squares. When it's time for sustenance, make sure to indulge in the renowned falafel from L'As du Fallafel, a beloved local institution. Le Marais is a microcosm of Paris, where history and modernity coexist, creating a neighborhood that's rich in character and style.",
        img: "../images/le-marais.jpg"
    },
    {
        id: 5,
        h3: "5. Seine River Cruise",
        p: "A Seine River cruise provides a unique vantage point for exploring Paris. As you embark on your journey along the river, you'll find yourself sailing beneath some of the city's most iconic bridges. The Pont Neuf, despite its name, is the oldest bridge in Paris, and its graceful arches provide a picturesque passage. The Pont des Arts, famous for its love locks, spans the Seine in elegant simplicity. These romantic bridges add a touch of magic to the experience. The Seine River has often been referred to as the \"River of Light,\" and as day turns into night, the name becomes abundantly clear. The illuminated Eiffel Tower takes center stage, its sparkling lights casting a warm, golden glow over the city's skyline. The play of light on the river and the reflections of the historic monuments create a truly enchanting atmosphere. It's an opportunity to see Paris from a different perspective, one that highlights the city's romantic essence and artistic beauty.",
        img: "../images/seine-cruise.jpg"
    },
    {
        id: 6,
        h3: "6. Shakespeare and Company",
        p: "Shakespeare and Company, located on the Left Bank near Notre-Dame, is a living testament to the enduring love for books and literature. The bookstore, established in 1951 by George Whitman, has been a haven for writers, readers, and travelers for decades. Stepping inside is like entering a book lover's paradise. The shop is a labyrinth of shelves, filled with both new releases and well-loved classics. One of the store's charms is the numerous notes and inscriptions left by visitors on the walls, making it a living testament to the power of the written word. There are cozy reading nooks throughout the shop, offering a tranquil space to lose yourself in a captivating book, often overlooking the Seine River. Shakespeare and Company's motto, \"Be not inhospitable to strangers lest they be angels in disguise,\" embodies the welcoming and inclusive spirit that defines the shop.",
        img: "../images/shakespeare-company.jpg"
    },
    {
        id: 7,
        h3: "7. Château de Versailles",
        p: "The Palace of Versailles, or Château de Versailles, is an unparalleled symbol of France's opulence and grandeur. Originally constructed as a hunting lodge, it was transformed into a grand palace by King Louis XIV. The Hall of Mirrors, a masterpiece of 17th-century architecture, is the most iconic room in the palace. It boasts 357 mirrors that were designed to reflect the light of the hundreds of candles and chandeliers, creating a dazzling display. The hall played a significant role in world history as the site where the Treaty of Versailles was signed in 1919, marking the end of World War I. The gardens of Versailles, designed by André Le Nôtre, are a testament to the art of French formal gardening. They are a vast and meticulously manicured landscape filled with intricate parterres, classical statues, and impressive fountains. During the summer months, the gardens come alive with the musical fountain shows, providing a sensory delight as water dances to the tunes of classical music.",
        img: "../images/versailles.jpg"
    },
    {
        id: 8,
        h3: "8. Le Comptoir du Relais",
        p: "Le Comptoir du Relais, situated in the heart of the Left Bank's Saint-Germain-des-Prés neighborhood, is a quintessential Parisian bistro that captures the essence of traditional French cuisine. Chef Yves Camdeborde, a pioneer of the bistronomy movement, showcases the finest local ingredients with a passionate commitment to quality. The restaurant's cozy ambiance evokes the soul of Parisian bistros, with dark wood, checkered tablecloths, and a welcoming atmosphere. The menu is a delightful journey through classic French dishes. From succulent escargot to the rich and hearty coq au vin, each bite carries the taste of tradition and craftsmanship. Le Comptoir du Relais is not just a restaurant; it's an experience of authenticity, a culinary adventure that immerses you in the timeless gastronomic heritage of France.",
        img: "../images/comptoir-relais.jpg"
    },
    {
        id: 9,
        h3: "9. Eiffel Tower Champagne Picnic",
        p: "A picnic on the Champ de Mars, the expansive green lawn that stretches out in front of the Eiffel Tower, is a romantic rendezvous with the heart of Paris. As you settle in, you're surrounded by a picnic that's nothing short of gourmet. Fresh baguettes, an array of artisanal cheeses, flavorful charcuterie, and exquisite pastries make up your meal. But the pièce de résistance is the bottle of Champagne, its bubbles effervescing with excitement. As you dine, the Eiffel Tower, standing tall and majestic, becomes an integral part of your experience. When the sun begins to set, it casts a warm, golden light over the city, turning the tower into a beacon of romance. The moment is imbued with a sense of enchantment, epitomizing the essence of Parisian elegance and romance.",
        img: "../images/eiffel-picnic.jpg"
    },
    {
        id: 10,
        h3: "10. Opéra Garnier",
        p: "The Palais Garnier, also known as the Opéra Garnier, is a captivating architectural masterpiece and a symbol of Parisian culture. Attending a ballet or opera performance here is a journey into a world of art and refinement. The exterior is a grand fusion of neo-Baroque and neo-Renaissance styles, adorned with intricate sculptures, gilded balconies, and marbles from all corners of the world. Stepping into the opulent interior, you're greeted by the grand staircase, an opulent spectacle made from white Italian marble. The chandeliers, with their glittering crystals, provide a celestial ambience. The acoustics of the auditorium are celebrated for their precision, allowing you to appreciate the delicate nuances of a live orchestra and the extraordinary talents of the performers. Whether you're witnessing a classic ballet like \"Swan Lake\" or a timeless opera such as \"La Traviata,\" the Palais Garnier offers an exceptional night of cultural enrichment. It's a captivating experience where history, architecture, and artistry converge, transporting you to a world of luxury and sophistication.",
        img: "../images/opera-garnier.jpg"
    },
]

let slideOn = "slide1";
let currentSlideID = 1;

function getSlideById(id) {
    return slideData.find(slide => slide.id == id);
}

function updateSlideContent(slide) {
    const newSlide = getSlideById(slide);
    console.log(newSlide.id);
    if (slideOn == "slide1") {
        slide2Objs.h3.textContent = newSlide.h3;
        slide2Objs.p.textContent = newSlide.p;
        slide2Objs.img.src = newSlide.img;
    }
    else {
        slide1Objs.h3.textContent = newSlide.h3;
        slide1Objs.p.textContent = newSlide.p;
        slide1Objs.img.src = newSlide.img;
    }
    currentSlideID = slide;
}

slide1.addEventListener("animationend", (event) => {
    if (event.animationName == "slideOutLeft" || event.animationName == "slideOutRight") {
        slide1.style.display = "none";
    }
});
slide2.addEventListener("animationend", (event) => {
    if (event.animationName == "slideOutLeft" || event.animationName == "slideOutRight") {
        slide2.style.display = "none";
    }
});

backBTN.addEventListener('click', () => {
    console.log("h");
    if (currentSlideID > 1) {
        currentSlideID--;
        updateSlideContent(currentSlideID);
        switch (slideOn) {
            case "slide1":
                slide1.style.animation = "slideOutRight 0.9s ease-out 0s 1";
                slide2.style.display = "flex";
                slide2.style.animation = "slideInLeft 0.9s ease-out 0s 1";
                slideOn = "slide2";
                break;
            case "slide2":
                slide2.style.animation = "slideOutRight 0.9s ease-out 0s 1";
                slide1.style.display = "flex";
                slide1.style.animation = "slideInLeft 0.9s ease-out 0s 1";
                slideOn = "slide1"
                break;
        }
    }
});

nextBTN.addEventListener('click', () => {
    console.log('l');
    if (currentSlideID < slideData.length) {
        currentSlideID++;
        updateSlideContent(currentSlideID);
        switch (slideOn) {
            case "slide1":
                slide1.style.animation = "slideOutLeft 0.9s ease-out 0s 1";
                slide2.style.display = "flex";
                slide2.style.animation = "slideInRight 0.9s ease-out 0s 1";
                slideOn = "slide2";
                break;
            case "slide2":
                slide2.style.animation = "slideOutLeft 0.9s ease-out 0s 1";
                slide1.style.display = "flex";
                slide1.style.animation = "slideInRight 0.9s ease-out 0s 1";
                slideOn = "slide1"
                break;
        }
    }
});