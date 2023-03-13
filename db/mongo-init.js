print("mongo init start --------------------");

// put dummy data in separate files for better housekeeping

db.createCollection("locations");
db.createCollection("chats");
db.createCollection("users");
db.locations.insert({
  name: "Dummies Bar and Grill",
  email: "dummy@dummymail.com",
  password: "hash-me-123",
});
db.chats.insert([
  {
    name: "Admin",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
    mesages: [
      {
        message: "Consectetur eos commodi voluptas",
        timestamp: "15786813839491",
      },
      {
        message: "Adipisicing quas sapiente nihil magni doloribus rerum",
        timestamp: "1578681393490",
      },
    ],
  },
  {
    name: "Amy Mey",
    image: "https://randomuser.me/api/portraits/women/84.jpg",
    mesages: [
      {
        message: "Lorem neque pariatur.",
        timestamp: "1578681390023",
      },
      {
        message:
          "Dolor dignissimos saepe rerum earum dolores, culpa! Beatae minus enim assumenda nihil vero vitae? Odit aperiam similique officiis quibusdam iusto Iste porro optio architecto laborum odit. Dolorem perferendis beatae rerum sed mollitia Sit",
        timestamp: "1578681393900",
      },
    ],
  },
  {
    name: "Gavin Right",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    mesages: [
      {
        message:
          "Elit vel quas similique eum quasi, illum distinctio in. Consectetur laborum iste minima fugit veritatis. Sed porro fuga non magni dicta Eius adipisci",
        timestamp: "1578681393921",
      },
      {
        message:
          "Ipsum doloribus id veniam eligendi earum neque. Nam eaque rem dolore pariatur",
        timestamp: "1578681998476",
      },
    ],
  },
  {
    name: "Mark Peters",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    mesages: [
      {
        message:
          "Dolor illo amet eos ea magni. Unde eligendi iste nemo rerum porro! Similique minima quas beatae repellat hic ipsum Nulla consequatur totam neque totam consectetur nihil, temporibus Soluta qui accusamus molestias nemo est. Aspernatur aut earum ad",
        timestamp: "1578681300938",
      },
      {
        message:
          "Sit pariatur magni exercitationem sit provident Placeat eveniet aliquam vero.",
        timestamp: "1578681939020",
      },
    ],
  },

  {
    name: "Sammy Henry",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    mesages: [
      {
        message: "Elit culpa reiciendis.",
        timestamp: "1578681393922",
      },
      {
        message:
          "Sit ex voluptates adipisicing tempora nihil voluptatibus labore! Et ducimus quod excepturi aut perferendis. Quod atque?",
        timestamp: "1578681838382",
      },
    ],
  },
  {
    name: "Janine Robinson",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    mesages: [
      {
        message:
          "Consectetur non animi doloremque consequuntur eos. Sint rerum iusto reiciendis vel dolore Doloremque beatae nam possimus iste debitis officiis? Culpa at ratione excepturi quaerat id Exercitationem facilis voluptatum corrupti numquam minus, adipisci quis? Natus suscipit aliquam harum sint omnis.",
        timestamp: "1578681393208",
      },
      {
        message:
          "Adipisicing quidem itaque commodi nisi ex! Nesciunt veniam minus quas animi aut? Alias vero quae cupiditate assumenda distinctio. Obcaecati blanditiis non eum eius in Placeat molestias architecto quod enim quasi Beatae soluta?",
        timestamp: "1578681930023",
      },
    ],
  },
  {
    name: "Jordan Daleson",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    mesages: [
      {
        message: "Consectetur cumque.",
        timestamp: "1578681998376",
      },
      {
        message:
          "I saw an old nokia phone earlier by the back door so I gave it to reception!",
        timestamp: "1578681930029",
      },
    ],
  },
  {
    name: "Sophie Clarkson",
    image: "https://randomuser.me/api/portraits/women/88.jpg",
    mesages: [
      {
        message:
          "Dolor necessitatibus laudantium numquam vero adipisci Sunt corrupti error harum neque dignissimos? Qui nisi aspernatur aliquid odio id. Assumenda laboriosam",
        timestamp: "1578681439994",
      },
      {
        message:
          "Adipisicing vero qui a rem laborum. Maxime eum consequuntur inventore tenetur ipsum Vitae placeat dignissimos minus pariatur voluptatem repellendus saepe Cupiditate minima in facere perspiciatis illum eum culpa, iusto! Soluta dicta sint libero sed repellat. Nemo maxime accusamus consequuntur",
        timestamp: "1578681439288",
      },
    ],
  },
  {
    name: "Vanessa Sanders",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
    mesages: [
      {
        message:
          "Elit alias ducimus magni quaerat alias! Sapiente repellendus amet cum beatae cumque Cumque quisquam architecto neque laborum hic veniam, recusandae. Nisi repellendus.",
        timestamp: "1578681393393",
      },
      {
        message:
          "Sit cupiditate quaerat hic nulla reiciendis? Reprehenderit ipsam pariatur soluta voluptatum reprehenderit sunt. Iusto nulla!",
        timestamp: "1578681394930",
      },
    ],
  },
  {
    name: "Clinton Holt",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    mesages: [
      {
        message: "Adipisicing nulla nemo optio quidem sed",
        timestamp: "1578681276354",
      },
      {
        message:
          "Consectetur deleniti dignissimos mollitia quidem minus Cum consequatur corporis dolore laborum ab Reiciendis dolorum id dolore maiores iure. Nobis voluptatem placeat eum delectus reiciendis ea. Odio velit velit quisquam animi perspiciatis exercitationem. Aliquam earum ipsa voluptates inventore quisquam soluta",
        timestamp: "1578681938883",
      },
    ],
  },
  {
    name: "Karen Jenkins",
    image: "https://randomuser.me/api/portraits/women/73.jpg",
    mesages: [
      {
        message:
          "Elit molestias asperiores suscipit dignissimos soluta Quis voluptate eos aperiam dicta accusamus laudantium sapiente deserunt Ratione cupiditate adipisci dolorem fugit inventore Tempore ratione nisi expedita eveniet eaque qui Perspiciatis autem numquam quod officiis veritatis! Sed laudantium aliquid sit deserunt iusto? Cupiditate eveniet voluptates pariatur tempora itaque, exercitationem Unde quisquam vel accusamus vel molestias Praesentium hic facere facere assumenda eligendi Qui",
        timestamp: "1578681748329",
      },
      {
        message:
          "Elit soluta quam nihil minus ex Exercitationem error voluptatibus vel",
        timestamp: "1578681938654",
      },
    ],
  },
  {
    name: "Brent Hillary",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    mesages: [
      {
        message:
          "Elit quos magni delectus commodi optio? Neque perferendis illo dolorem amet vero.",
        timestamp: "1578681374593",
      },
      {
        message: "Elit doloribus.",
        timestamp: "1578681932938",
      },
    ],
  },
  {
    name: "Brad Fey",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    mesages: [
      {
        message:
          "Ipsum distinctio consectetur eligendi iure nihil. Quibusdam quas quibusdam incidunt.",
        timestamp: "1578681372893",
      },
      {
        message: "Lorem obcaecati inventore blanditiis",
        timestamp: "1578681283948",
      },
    ],
  },
]);

print("mongo init end --------------------");
