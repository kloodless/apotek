let map;

document.getElementById("btnLokasi").onclick=ambilLokasi;

function ambilLokasi(){

navigator.geolocation.getCurrentPosition(sukses,gagal);

}

function sukses(pos){

const lat=pos.coords.latitude;
const lon=pos.coords.longitude;

document.getElementById("status").innerHTML="Lokasi ditemukan.";

if(map) map.remove();

map=L.map('map').setView([lat,lon],16);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
maxZoom:19
}
).addTo(map);

L.marker([lat,lon])
.addTo(map)
.bindPopup("Lokasi Saya")
.openPopup();

cariTempat(lat,lon);

}

function gagal(){

document.getElementById("status").innerHTML="GPS gagal.";

}

function cariTempat(lat,lon){

const hasil=document.getElementById("hasil");

hasil.innerHTML="";

const data=[
{
nama:"Apotek Sehat",
jenis:"Apotek",
jarak:"250 m"
},
{
nama:"Klinik Medika",
jenis:"Klinik",
jarak:"600 m"
},
{
nama:"Apotek Farma",
jenis:"Apotek",
jarak:"900 m"
}
];

data.forEach(item=>{

hasil.innerHTML+=`
<div class="card">

<div class="nama">${item.nama}</div>

<div class="jenis">${item.jenis}</div>

<div class="jarak">${item.jarak}</div>

</div>
`;

});

}