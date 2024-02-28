window.addEventListener('load', () => {
  const bodySec = document.getElementById('bodySec');
  bodySec.classList.remove('hidden');
  loadingSec.classList.add('hidden');
});

const apiConnect = async (search, isTrue) => {
  const url = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${search}`
  );
  const data = await url.json();
  const phones = data.data;
  phoneFunc(phones, isTrue);
  //   console.log(phones);
};
const phoneFunc = (phone, isTrue) => {
  // Search result show all button
  const showAll = document.getElementById('showAll');
  const len = phone.length;
  if (len > 9 && !isTrue) {
    showAll.classList.remove('hidden');
  } else {
    showAll.classList.add('hidden');
  }
  // Search result show only 9 phones
  console.log('is Show all', isTrue);
  if (!isTrue) {
    phone = phone.slice(0, 9);
  }
  const productSec = document.getElementById('productSec');
  //   clear phone container another search
  productSec.innerHTML = '';
  // Phones looping
  phone.forEach((phn) => {
    console.log(phn);
    const createDiv = document.createElement('div');
    createDiv.classList =
      'w-full max-w-[364px] bg-white rounded-lg border border-stone-300 text-center p-6 mx-auto';
    createDiv.innerHTML = `
  <div class="h-[350px] bg-blue-600 bg-opacity-5 rounded-lg p-5 mb-6">
    <img class="h-full mx-auto" src=${phn.image} alt="" />
  </div>
  <div class="space-y-2">
    <h2 class="text-center text-neutral-700 text-[25px] font-bold">
      ${phn.phone_name}
    </h2>
    <p
      class="w-[291px] text-center text-neutral-500 text-lg font-normal leading-[30px]"
    >
      There are many variations of passages of available, but the
      majority have suffered
    </p>
    <h2 class="text-center text-neutral-700 text-[25px] font-bold">
      $999
    </h2>
    <button 
      onclick="showDetailsFunc('${phn.slug}')"
      id="showDetails"
      class="btn btn-primary px-6 bg-blue-600 text-white text-xl font-bold"
    >
      Show Details
    </button>
  </div>
</div>`;
    productSec.appendChild(createDiv);
  });
  loadingDots(true);
};
const btnSearch = (isTrue) => {
  loadingDots(false);
  const inputSearch = document.getElementById('inputSearch');
  const inpValue = inputSearch.value;
  apiConnect(inpValue, isTrue);
};

const loadingDots = (isTrue) => {
  const loading = document.getElementById('loadingDots');
  if (isTrue) {
    loading.classList.add('hidden');
  } else {
    loading.classList.remove('hidden');
  }
};

document.getElementById('showAll').addEventListener('click', () => {
  btnSearch(true);
});

// Show details function
// const showDetails = document.getElementById('showDetails');
const showDetailsFunc = async (id) => {
  console.log('bal', id);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  console.log(data);
};
