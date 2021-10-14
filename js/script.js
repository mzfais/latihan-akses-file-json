const data = "data.json";
const listMhs = document.querySelector('#mhs-list');
var urlParams = new URLSearchParams(window.location.search);
var jk = urlParams.get("jk");

const getListMhs = () => {
    fetch(data)
        .then(response => {
            console.log(response.status);
            return response.json();
        })
        .then(responseJson => {
            console.log(responseJson.mahasiswa);
            showListMhs(responseJson.mahasiswa, jk);
        }).catch(error => console.error(error));
}

const showListMhs = (mhs, jk = null) => {
    listMhs.innerHTML = "";
    if (jk != null) {
        if (jk.toUpperCase() == "L") {
            jk = "Laki - laki";
        } else {
            jk = "Perempuan";
        }
        mhs.forEach(item => {
            console.log(jk);
            if (item.jk == jk) {
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
            `
            }
        });
    } else {
        mhs.forEach(item => {
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
            `
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    getListMhs();
});