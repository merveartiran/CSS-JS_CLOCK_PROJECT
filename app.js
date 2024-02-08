// function updateClockHands() {


const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function updateClockHands() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    let hours = now.getHours();
    //console.log(`${hours}: ${minutes}: ${seconds}`);
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // saniye belirli bir saniye sayısıdır.
    // (Saniye / 60) ifadesi, saniye değerinin temsil ettiği dakika sayısını hesaplar.
    //  Dakikada 60 saniye olduğundan saniye sayısı 60'a bölünerek yapılır.
    // ((saniye / 60) * 360) ifadesi, dakika sayısına karşılık gelen açıyı derece 
    // cinsinden hesaplar. Tam bir dairede 360 derece vardır, dolayısıyla bu ifade karşılık gelen açıyı elde etmek için dakika sayısını 360 ile çarpar.
    // ((saniye / 60) * 360) + 90 ifadesi, önceki adımda hesaplanan açıya 90 derece ekler. Bu durum açının  saat 3 veya 90 derece konumuyla hizalamak için yapılır.
    const minsDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`
    //     dakika, açının hesaplanmasında kullanılan dakikadır. Bir derece bir dairenin 1/60'ına eşit olduğundan, derecenin kesirine dönüştürmek için 60'a bölünür. Bu kesir daha sonra derece sayısını bulmak için 360 ile çarpılır.
    // saniye, açıyı hesaplamak için kullanılan saniye sayısıdır. Önce 60'a bölünerek dakikanın kesrine dönüştürülür. Bir derece dakikanın 1/6'sına eşit olduğundan bu kesir daha sonra 6 ile çarpılarak derecenin kesrine dönüştürülür. Bu kesir daha sonra dakikalara göre hesaplanan açıya eklenir.
    // Son olarak, bu hesaplamadaki sıfır derece noktasının dairenin sağında değil de tepesinde olduğu gerçeğini hesaba katmak için açıya 90 eklenir (ki bu daha yaygın bir kuraldır).
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    // (saat / 12) * 360: Bu ifade, her saatin 360 derecenin 12 saate bölünmesine yani 30 dereceye karşılık geldiğini varsayarak, saat 12 konumu ile mevcut saat konumu arasındaki açıyı hesaplar.
    // + ((dakika / 60) * 30): Bu ifade, geçerli dakikaya karşılık gelen açıyı toplar. Her dakika, iki saat arasındaki açının 1/60'ına karşılık gelir; yani 360 derece, 60 dakikaya yani 6 dereceye bölünür. Bu nedenle saat kadranında her dakika 0,1 dereceye karşılık gelir.
    // + 90: Bu ifade nihai sonuca 90 derece ekler. Bunun nedeni, analog bir saatin akrebinin tipik olarak saat 12 konumundan 90 derecelik açıyla konumlandırılması ve saat yüzünün merkezine doğru bakmasıdır.



}
updateClockHands();
setInterval(updateClockHands, 1000);
