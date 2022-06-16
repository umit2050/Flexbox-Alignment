const align = document.querySelector("#align");
const kod = document.querySelector("#kod");
const bir = document.querySelector("#bir");
const flexStart = "justify-content: flex-start";
const flexEnd = "justify-content: flex-end";
const center = "justify-content: center";
const spaceAround = "justify-content: space-around";
const spaceBetween = "justify-content: space-between";
const spaceEvenly = "justify-content: space-evenly";
const column = "flex-direction: column";
const row = "flex-direction: row;";
const columnReverse = "flex-direction: column-reverse";
const rowReverse = "flex-direction: row-reverse";
const alignItemsStart = "align-items: flex-start";
const alignItemsCenter = "align-items: center";
const alignItemsEnd = "align-items: flex-end";
const alignSelfStart = "align-self: flex-start;";
const alignSelfCenter = "align-self: center;";
const alignSelfEnd = "align-self: flex-end;";

// Konumlandırmalar
function sola(){
    align.style.cssText = flexStart;
    kod.innerText = flexStart;
}
function ortala(){
    align.style.cssText = center;
    kod.innerText = center;
}
function saga(){
    align.style.cssText = flexEnd;
    kod.innerText = flexEnd;
}
function spacearound(){
    align.style.cssText = spaceAround;
    kod.innerText = spaceAround;
}
function spacebetween(){
    align.style.cssText = spaceBetween;
    kod.innerText = spaceBetween;
}
function spaceevenly(){
    align.style.cssText = spaceEvenly;
    kod.innerText = spaceEvenly;
}
function alignstart(){
    align.style.cssText = alignItemsStart;
    kod.innerText = alignItemsStart;
}
function aligncenter(){
    align.style.cssText = alignItemsCenter;
    kod.innerText = alignItemsCenter;
}
function alignend(){
    align.style.cssText = alignItemsEnd;
    kod.innerText = alignItemsEnd;
}
function flexcolumn(){
    align.style.cssText = column;
    kod.innerText = column;
}
function flexcolumnreverse(){
    align.style.cssText = columnReverse;
    kod.innerText = columnReverse;
}
function flexrow(){
    align.style.cssText = row;
    kod.innerText = row;
}
function flexrowreverse(){
    align.style.cssText = rowReverse;
    kod.innerText = rowReverse;
}
function asfs(){
    bir.style.cssText = alignSelfStart;
    kod.innerText = alignSelfStart;
}
function asc(){
    bir.style.cssText = alignSelfCenter;
    kod.innerText = alignSelfCenter;
}
function asfe(){
    bir.style.cssText = alignSelfEnd;
    kod.innerText = alignSelfEnd;
}

/* Metin kopyalama */
function copy(that){
var inp = document.createElement("input");
document.body.appendChild(inp)
inp.value = that.textContent
inp.select();
document.execCommand("copy", false);
inp.remove();
/* Metin kopyalama uyarısı */
alert("✔️ Kopyalandı: " + inp.value);
}