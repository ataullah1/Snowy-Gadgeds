console.log('Hello');

const api = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
  const dta = await res.json();
  const data = dta.data.tools;
  dataCall(data);
};

const dataCall = (dta) => {
  const mainBox = document.getElementById('mainBox');
  dta.forEach((elm) => {
    console.log(elm);
    const elmBox = document.createElement('div');
    elmBox.classList =
      'max-w-[487px] p-6 bg-white rounded-2xl border border-neutral-900 border-opacity-10 mx-auto';
    elmBox.innerHTML = ` <div class="max-h-[300px]">
    <img class="w-full rounded-2xl" src=${elm.image} />
  </div>
  <div
    class="text-neutral-900 text-[25px] font-semibold font-['Work Sans'] pt-2"
  >
    Features
  </div>
  <div
    class="text-zinc-600 text-base font-normal font-['Work Sans'] leading-relaxed"
  >
    1. Natural language processing<br />2 .Contextual understanding<br />3.
    Text generation
  </div>
  <div
    class="w-full h-[1px] border border-neutral-600 my-2 border-opacity-20"
  ></div>
  <div class="flex flex-row items-center justify-between">
    <div>
      <div
        class="text-neutral-900 text-[25px] font-semibold font-['Work Sans']"
      >
        ${elm.name}
      </div>
      <div class="flex flex-row gap-1">
        <div>
          <img class="w-6 h-6" src="./img/date.svg" alt="" />
        </div>
        <div
          class="text-zinc-600 text-base font-medium font-['Work Sans'] leading-relaxed"
        >
          11/01/2022
        </div>
      </div>
    </div>
    <div
      id="arrowButton"
      class="w-[50px] h-[50px] bg-pink-50 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 duration-200 hover:bg-pink-200"
    >
      <img src="./img/arrow.png" alt="" />
    </div>
  </div>`;
    mainBox.appendChild(elmBox);
  });
};
api();
