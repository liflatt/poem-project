function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let topic = document.querySelector("#topic");
  let apiKey = "b0452f91cd75631eoba398t0f42a2100";
  let context =
    "You are a witty poetry expert. Your mission is to generate a short poem based on the topic provided in the instructions. The poem must be written in exactly two paragraphs, and each paragraph should be wrapped in a <p> element. The total length of the poem should not exceed 10 lines. Separate each line with a <br />. Do not include a title. At the end of the poem, sign it with 'SheCodes AI' wrapped in a <strong> element. The signature should appear only at the end of the poem.";
  let prompt = `Instructions: Write a short poem about "${topic.value}".`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating a poem about ${topic.value}.</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
