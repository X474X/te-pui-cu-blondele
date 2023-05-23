const body = document.querySelector("body");
const intrebare = document.querySelector("p");
const input = document.querySelector("input");
const validare = document.querySelector("span");

intrebare.innerHTML = `Bine ai venit la "Te pui cu blondele" Apasa SPACE ca sa incepi`;

const questions = [
  {
    question: "In ce stat american se afla orasul Chicago? ",
    answer: "Illinois",
  },
  {
    question: "In ce tara se afla nordul Bucovinei?",
    answer: "Ucraina",
  },
  {
    question:
      "Cum se numeste regiunea pe care se afla partea asiatica a Turciei?",
    answer: "Anatolia",
  },
  {
    question: "Din pielea carui animal se face, de obicei, cimpoiul romanesc?",
    answer: "Capra",
  },
  {
    question: "Pe ce post juca Gheorghe Hagi in meciurile echipei nationale?",
    answer: "Mijlocas",
  },
  {
    question: "Cate zile are un an bisect ?",
    answer: "366",
  },
  {
    question: "La ce mare are iesire Elvetia ?",
    answer: "Niciuna",
  },
  {
    question:
      "Sub ce nume este cunoscut statul european numit oficial Tarile de jos ?",
    answer: "Olanda",
  },
  {
    question: "La 1 decembrie 1918 a fost proclamata Unirea Transilvaniei cu:",
    answer: "Romania",
  },
  {
    question: "Care este capitala Angliei",
    answer: "Rusia",
  },
];

let i = 0;

window.addEventListener("keypress", (event) => {
  if (event.key === " ") {
    intrebare.innerHTML = questions[i].question;
    input.style.visibility = "visible";
    body.style.backgroundImage = `url("./Images/blonde.webp")`;
  }
  if (event.key === "Enter") {
    if (input.value === questions[i].answer) {
      validare.style.visibility = "visible";
      validare.innerHTML = "CORECT";
      validare.style.color = "green";
      setTimeout(() => {
        validare.style.visibility = "hidden";
        i++;
        intrebare.innerHTML = questions[i].question;
        input.value = "";
      }, 1000);
    } else {
      validare.innerHTML = "GRESIT";
      validare.style.color = "red";
      validare.style.visibility = "visible";
      setTimeout(() => {
        validare.style.visibility = "hidden";
      }, 1000);
    }
  }
});
