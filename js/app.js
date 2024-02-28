const apiConnect = async () => {
  const url = await fetch(
    'https://openapi.programming-hero.com/api/phones?search=iphone'
  );
  const data = await url.json();
  const phones = data.data;
  phoneFunc(phones);
  //   console.log(phones);
};
const phoneFunc = (phone) => {
  const productSec = document.getElementById('productSec');
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
      id="showDetails"
      class="btn btn-primary px-6 bg-blue-600 text-white text-xl font-bold"
    >
      Show Details
    </button>
  </div>
</div>`;
    productSec.appendChild(createDiv);
  });
};
apiConnect();
