const cardsData = [
  {
    id: 1,
    description: "The Ultimate Google Ads Training Course ",
    category: "marketing",
    img: "assets/marketing_1.png",
    price: "$100",
    name: "by Jerome Bell ",
  },
  {
    id: 2,
    description: "Prduct Management Fundamentals",
    category: "management",
    img: "assets/managment_1.png ",
    price: "$480",
    name: "by Marvin McKinney",
  },
  {
    id: 3,
    description: "HR  Management and Analytics",
    category: "HR & Recruting",
    img: "assets/HR_1.png ",
    price: "$200",
    name: "by Leslie Alexander Li",
  },
  {
    id: 4,
    description: "Brand Management & PR Communications ",
    category: "marketing",
    img: "assets/marketing_2.png",
    price: "$530",
    name: "by Kristin Watson",
  },
  {
    id: 5,
    description: "Graphic Design Basic",
    category: "design",
    img: "assets/design_1.png",
    price: "$500",
    name: "by Guy Hawkins",
  },
  {
    id: 6,
    description: "Business Development Management ",
    category: "management",
    img: "assets/managment_2.png",
    price: "$400",
    name: "by Dianne Russell",
  },
  {
    id: 7,
    description: "Highload Software Architecture",
    category: "development",
    img: "assets/Development_1.png",
    price: "$600",
    name: "by Brooklyn Simmons",
  },
  {
    id: 8,
    description: "Human Resources – Selection and Recruitment",
    category: "HR & Recruting",
    img: "assets/HR_2.png",
    price: "$150",
    name: "by Kathryn Murphy ",
  },
  {
    id: 9,
    description: "User Experience. Human-centered Design",
    category: "design",
    img: "assets/Design_2.png",
    price: "$240",
    name: "by Cody Fisher ",
  },
];

const cardsContainer = document.querySelector(".catalog__cards");
const searchInput = document.querySelector(".catalog__search input");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentCategory = "all";
let searchQuery = "";

function renderCards(cards) {
  cardsContainer.innerHTML = cards
    .map(
      (card) => `
    <div class="catalog__card ${card.category.toLowerCase()}">
      <img src="${card.img}" alt="${
        card.description
      }" class="catalog__card__image">
      <p class="catalog__card__category">${card.category}</p>
      <h3 class="catalog__card__title">${card.description}</h3>
      <div class="catalog__card__info">
        <span class="catalog__card__price">${card.price}</span>
        <span class="catalog__card__name">${card.name}</span>
      </div>
    </div>
  `
    )
    .join("");
}

function filterCards() {
  let filtered = cardsData;

  if (currentCategory !== "all") {
    filtered = filtered.filter((card) => card.category === currentCategory);
  }

  if (searchQuery) {
    filtered = filtered.filter((card) =>
      card.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  renderCards(filtered);
}

// События
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  filterCards();
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    filterCards();
  });
});

// Инициализация
renderCards(cardsData);
