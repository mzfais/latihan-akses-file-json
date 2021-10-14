const data = "data.json";
const listMhs = document.querySelector("#mhs-list");
var urlParams = new URLSearchParams(window.location.search);
var jk = urlParams.get("jk");
var modalInstance;

const getListMhs = () => {
    fetch(data)
        .then((response) => response.json())
        .then((responseJson) => showListMhs(responseJson.mahasiswa))
        .catch((error) => console.error(error));
};

const showListMhs = (mhs) => {
    if (jk !== null) {
        jk = jk.toUpperCase();
        mhs = mhs.filter(dt => dt.jk.substring(0, 1) === jk);
    }
    showMhs(mhs)
};

const showMhs = mhs => {
    listMhs.innerHTML = "";
    if (mhs.length < 1) {
        listMhs.innerHTML = showErrorMessage('Data mahasiswa tidak ditemukan!')
        return false;
    }
    mhs.forEach((item) => {
        listMhs.innerHTML += `
            <div class="col s12 m6 l4">
                <div class="card">
                    <div class="card-image">
                    <img src="${item.foto}">
                    <span class="card-title">${item.nim}</span>
                    </div>
                    <div class="card-content">
                        <p>
                            Nama            : ${item.nama}<br>
                            Alamat Asal     : ${item.alamat_asal}<br>
                            Alamat di Malang: ${item.alamat_mlg}<br>
                            Jenis Kelamin   : ${item.jk}
                        </p>
                    </div>
                </div>
            </div>
            `;
    });
}

const showErrorMessage = msg => `<div class="row">
    <div class="col s12 m12">
      <div class="card red darken-1">
        <div class="card-content white-text">
          <span class="card-title">Perhatian</span>
          <p>${msg}</p>
        </div>
      </div>
    </div>
  </div>`;

document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
    getListMhs();
});