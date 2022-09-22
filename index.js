var urlID = window.location.search;
var item = urlID.split("?")[1].split("&")[0];
var designRow = urlID.split("?")[1].split("&")[1];


var design = "";
var grossWt = "";
var netGWt = "";
var diamondWt = "";
var stoneWt = "";
var totalAmt = "";


var url = 'https://api.sheety.co/c197f3b172cc6f161e0439c649bca99f/jiyaJewelsDesignHandle/' + item + '/' + designRow;
fetch(url)
.then((response) => response.json())
.then(json => {
    design = json[item].itemNo;
    grossWt = json[item].gWt;
    netGWt = json[item].nWt;
    diamondWt = json[item].dFinalWt;
    stoneWt = json[item].sFinalWt;
    totalAmt = json[item].price;
});


setTimeout(function (){
    var imageSRC = "Images/" + design + ".jpg";
    document.querySelector("img").classList.add("display")

    document.querySelector(".designid").innerHTML = design;
    document.querySelector("img").setAttribute("src", imageSRC);
    document.querySelector(".grossWt").innerHTML = "Gross Weight: " + grossWt;
    document.querySelector(".netWt").innerHTML = "Net Weight: " + netGWt;
    document.querySelector(".diamondWt").innerHTML = "Diamond Weight (In Carats): " + diamondWt;
    document.querySelector(".amountPayable").innerHTML = "Price: ₹" + totalAmt + "/-";
    if (!stoneWt === 0) {
        document.querySelector(".stoneWt")  .innerHTML = "Stone Weight: " + stoneWt;
    }   else {
        document.querySelector(".stoneWt").remove();
    };
}, 2000);
