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
  const dta = data.data;
  phnDetails(dta);
};
const phnDetails = (dta) => {
  document.getElementById(
    'modalBox'
  ).innerHTML = ` <dialog id="openModal" class="modal modal-bottom sm:modal-middle">
   <div
     class="max-h-screen overflow-scroll w-11/12 lg:w-[752px] mx-auto"
   >
     <div class="p-10 bg-white rounded-lg space-y-1 sm:space-y-4">
       <div
         class="h-72 sm:h-[483px] bg-blue-600 bg-opacity-5 rounded-lg"
       >
         <img
           src="./images/pngwing 3.png"
           alt=""
           class="sm:h-full mx-auto"
         />
       </div>
       <div
         class="text-neutral-700 text-2xl sm:text-3xl font-bold pt-5"
       >
         Iphone 13 Pro Max
       </div>
       <div
         class="w-full lg:w-[671px] text-neutral-500 text-base font-normal leading-relaxed"
       >
         It is a long established fact that a reader will be distracted
         by the readable content of a page when looking at its layout.
       </div>
       <div class="text-base sm:text-xl">
         <span class="text-neutral-700 font-semibold">Storage : </span
         ><span class="text-neutral-500 font-normal"
           >128GB/256GB/1TB Storage, No card slot</span
         >
       </div>
       <div class="text-base sm:text-xl">
         <span class="text-neutral-700 font-semibold"
           >Display Size :</span
         ><span class="text-neutral-500 font-semibold"> </span
         ><span class="text-neutral-500 font-normal"
           >6.7 Inches, 109.8 cm</span
         >
       </div>
       <div class="text-base sm:text-xl">
         <span class="text-neutral-700 font-semibold">Chipset :</span
         ><span class="text-neutral-500 font-semibold"> </span
         ><span class="text-neutral-500 font-normal"
           >Apple A15 Bionic</span
         >
       </div>
       <div class="text-base sm:text-xl">
         <span class="text-neutral-700 font-semibold">Memory :</span
         ><span class="text-neutral-500 font-semibold"> </span
         ><span class="text-neutral-500 font-normal"
           >128GB 6 GB RAM, 256GB RAM, 512GB RAM1 1TB 6GB RAM</span
         >
       </div>
       <div class="text-base sm:text-xl">
         <span class="text-neutral-700 font-semibold">Slug :</span
         ><span class="text-neutral-500 font-semibold"> </span
         ><span class="text-neutral-500 font-normal"
           >Applice_Iphone_13_Pro_Max</span
         >
       </div>
       <div class="text-base sm:text-xl">
         <span class="text-neutral-700 font-semibold"
           >Release data :</span
         ><span class="text-neutral-500 font-semibold"> </span
         ><span class="text-neutral-500 font-normal"
           >Released 2021, September 24</span
         >
       </div>
       <div class="text-base sm:text-xl">
         <span class="text-neutral-700 font-semibold">Brand :</span
         ><span class="text-neutral-500 font-semibold"> </span
         ><span class="text-neutral-500 font-normal">Apple</span>
       </div>
       <div class="text-base sm:text-xl">
         <span class="text-neutral-700 font-semibold">GPS :</span
         ><span class="text-neutral-500 font-semibold"> </span
         ><span class="text-neutral-500 font-normal"
           >AYes, with A-GPS, GLONASS, GALILEO, BDS, QZSS</span
         >
       </div>
       <div class="modal-action pt-9">
         <form method="dialog">
           <!-- if there is a button in form, it will close the modal -->
           <button
             class="btn bg-red-500 hover:bg-red-800 text-center text-white text-lg font-bold"
           >
             Close
           </button>
         </form>
       </div>
     </div>
   </div>
 </dialog>`;

  openModal.showModal();
};
