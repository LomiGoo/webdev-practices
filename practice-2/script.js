const image = document.getElementById("image");
const title = document.getElementById("title");
const genre = document.getElementById("genre");
const description = document.getElementById("description");
const randomButton = document.getElementById("randomButton");

const animes = [ 
    {
        title : "TITLE : Re:Zero Starting Life in Another World Season 4",
        genre : "GENRE : Dark Fantasy, Isekai, and Psychological Thriller",
        description : "DESCRIPTION : Season 4 is the fourth season of the anime adaptation of Nagatsuki Tappei and Otsuka Shinichirou's light novel series animated by studio White Fox. It is preceded by Season 3. The season will adapt the remainder of Arc 5 not included in Season 3 and Arc 6.",
        image : "https://preview.redd.it/re-zero-season-4-new-key-visual-v0-quxstf76kjng1.jpeg?auto=webp&s=16b6e1853076df8885c61caaebd9eb2abc54c43e"
    },
    {
        title : "TITLE : KonoSuba: God's Blessing on This Wonderful World! Season 3",
        genre : "GENRE : Isekai, Fantasy, and Comedy",
        description : "DESCRIPTION : The third season of the anime television series KonoSuba: God's Blessing on This Wonderful World!, marketed as KonoSuba: God's Blessing on This Wonderful World! 3, adapts the sixth and seventh light novel volumes written by Natsume Akatsuki and illustrated by Kurone Mishima.",
        image : "https://a.storyblok.com/f/178900/1064x1596/57cc5a6b19/konosuba-bonus-stage-key-visual.png/m/filters:quality(95)format(webp)"
    },
    {
        title : "TITLE : That Time I Got Reincarnated as a Slime season 4",
        genre : "GENRE : Action, Comedy, and Fantasy",
        description : "DESCRIPTION : That Time I Got Reincarnated as a Slime is an anime television series based on the light novel series of the same title written by Fuse and illustrated by Mitz Vah. The anime is produced by Eight Bit. The series follows a man who is killed and reincarnated in another world as a slime named Rimuru.",
        image : "https://preview.redd.it/new-key-visual-for-season-4-v0-f21v5wqr0qmg1.jpeg?auto=webp&s=86d08db132552bbdb6cf71af38a04fc9e15da503"
    },
    {
        title : "TITLE : Dragon Ball Super",
        genre : "GENRE : Action, Adventure, Fantasy, and Science Fiction",
        description : "DESCRIPTION : Dragon Ball Super (Japanese: ドラゴンボール超スーパー, Hepburn: Doragon Bōru Sūpā) is a Japanese manga series written by Akira Toriyama and illustrated by Toyotarou. Set during the time frame of Toriyama's original Dragon Ball manga, it follows the adventures of Son Goku and his friends during the ten-year timeskip after the defeat of Majin Boo. After meeting the destructive deity Beerus, and attaining the power of a god, Goku ends up traveling to other universes.",
        image : "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974762248/dragon-ball-super-vol-24-9781974762248_lg.jpg"
    }
];

randomButton.addEventListener("click", randomAnime);

function randomAnime() {
    const randomPick = Math.floor(Math.random() * animes.length);

    const anime = animes[randomPick];

    image.src = anime.image;
    title.textContent = anime.title;
    genre.textContent = anime.genre;
    description.textContent = anime.description;
}