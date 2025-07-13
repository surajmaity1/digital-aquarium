const allFishTypes = [
  "https://png.pngtree.com/png-clipart/20250222/original/pngtree-small-fish-small-fish-cartoon-cute-cartoon-picture-image_3920714.png", 
  "https://pngcore.com/files/preview/800x800/11695315407dxwdqrgmdoeiejmjgsfn0xjaoaqphxw0zh5tdwe9aziz6wtuv053wlnnojvuew8exsrau7ni6wiptyp9ukjym3nvoaruvkksqscr.png", 
  "https://png.pngtree.com/png-clipart/20250417/original/pngtree-blue-little-fish-cartoon-image-png-image_20858183.png", 
  "https://png.pngtree.com/recommend-works/png-clipart/20250624/ourmid/pngtree-little-blue-fish-baby-png-image_16574545.png"
];

const baseUrl = "https://3000-satyam1203-digitalaquar-9si5mjeg1fb.ws-us120.gitpod.io/api";

let fishCount = 1;
let currentView = "2D";
let selectedFishType = allFishTypes[0];

const aquariumContainer = document.querySelector(".container");
const fishContainer = document.getElementById("fishes");


function makeContainer3D() {
  if (currentView === "2D") {
    aquariumContainer.classList.add("container3d");
    currentView = "3D";
  } else {
    aquariumContainer.classList.remove("container3d");
    currentView = "2D";
  }
}

function addFish() {
  fishCount += 1;
  showFishes(fishCount);
}

function removeFish() {
  fishCount = Math.max(0, fishCount - 1);
  showFishes(fishCount);
}

function toggleFishType() {
  selectedFishType = allFishTypes[Math.floor(Math.random() * allFishTypes.length)];
  showFishes(fishCount, selectedFishType);
}

function showFishes(fishInfo = []) {
  for (let i = 0; i < fishInfo.length; i++) {
    const { id, imageUrl } = fishInfo[i] || {};

    const fishRef = document.querySelector(`[data-id="${id}"]`);

    // If more fish are needed, add them
    if (!fishRef) {
      const img = document.createElement("img");
      img.src = imageUrl;
      img.dataset.id = id;
      img.style.top = `${Math.random() * 80}%`;
      img.style.animationDuration = `${(Math.random() * 8) + 8}s`;
      fishContainer.appendChild(img);
    } 
  }
}


const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

async function openModal(mode) {
  modal.classList.remove('hidden');

  if (mode === 'add') {
    modalBody.innerHTML = `
      <h3>Add a new animal</h3>
      <form onsubmit="submitFish(event)">
        <input type="text" name="name" placeholder="Fish Name" required />
        <input type="text" name="imageUrl" placeholder="Image URL" required />
        <select name="type" required>
          <option value="">Select Type</option>
          <option value="fish">🐟 Fish</option>
          <option value="octopus">🐙 Octopus</option>
        </select>
        <textarea name="description" placeholder="Description" rows="3" required></textarea>
        <button type="submit">Add Fish</button>
      </form>
    `;
  } else if (mode === 'remove') {
    modalBody.innerHTML = `<h3>All animals</h3><div class="fish-list" id="fish-list">Loading...</div>`;
    const data = await fetchFishList();

    const list = document.getElementById('fish-list');
    list.innerHTML = data.map(({ id, name, imageUrl }) => `
      <div class="fish-item">
        <span class="fish-name"><img src="${imageUrl}"> ${name}</span>
        <span class="delete-btn" onclick="deleteFish('${id}')">🗑️</span>
      </div>
    `).join('');
  }
}

function closeModal() {
  modal.classList.add('hidden');
}

// Submit form (add fish)
async function submitFish(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    name: form.name.value,
    imageUrl: form.imageUrl.value,
    type: form.type.value,
    description: form.description.value
  };

  try {
    await fetch(baseUrl + '/fish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    form.reset();
    closeModal();
    reloadTank();
    alert("Fish added!");
  } catch (err) {
    alert("Failed to add fish.");
    console.error(err);
  }
}

// Load fish list in modal
async function fetchFishList() {
  try {
    const res = await fetch(baseUrl + '/fish');
    const jsonResponse = await res.json();
    return jsonResponse?.data || [];
  } catch (err) {
    console.error("Failed to load fish", err);
  }
}

// Delete fish
async function deleteFish(id) {
  if (!confirm("Delete this fish?")) return;

  try {
    await fetch(baseUrl + `/fish/${id}`, {
      method: 'DELETE'
    });
    closeModal();
    const fishRef = document.querySelector(`[data-id="${id}"]`);
    fishRef.remove();
  } catch (err) {
    alert("Failed to delete.");
    console.error(err);
  }
}

async function reloadTank() {
  const fishInfo = await fetchFishList();
  showFishes(fishInfo);
};

window.onload = reloadTank;