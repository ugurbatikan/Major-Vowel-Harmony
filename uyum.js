
function major_vowel_harmony(str) {
  let kalin = str.match("[aıou]");
  let ince = str.match("[eiöü]");
  let countK = kalin ? kalin.length : 0;
  let countI = ince ? ince.length : 0;

  if (countK != 0 && countI != 0) {
    document.getElementById('p').innerHTML = "'" + str  + "'"+ " kelimesi " +  "Büyük Ünlü Uyumuna Uymaz!";
    return false;
  }else if(countK == 0 && countI ==0){
    document.getElementById('p').innerHTML = "'" + str  + "'"+ " kelimesi " +  "'nde Sesli Harf Yoktur!";
    return false;
  }
   else {
    document.getElementById('p').innerHTML = " '" + str  + "'"+ " kelimesi " +  "Büyük Ünlü Uyumuna Uyar!";
    return false;
  }
};
