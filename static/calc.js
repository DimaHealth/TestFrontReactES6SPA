// var $result = $(".remontResult"),
//     $zapchastResult = $(".zapchastResult"),
//     $mainResult = $(".mainResult"),
//     $zs = $("[name='zapchastSum']"),
//     $zp = $("[name='zapchastProc']"),
//     $rs = $("[name='remontSum']"),
//     $rp = $("[name='remontProc']"),
//     $remontSum = 0,
//     $remontProc = 0,
//     $zapchastSum = 0,
//     $zapchastProc = 0;

// function calc() {
//     remontSum = +$rs.prop("value");
//     remontProc = +$rp.prop("value");
//     zapchastSum = +$zs.prop("value");
//     zapchastProc = +$zp.prop("value");
//     if (remontProc > 100) {
//         $rp.val(100);
//         remontProc = 100;
//     }
//     if (zapchastProc > 100) {
//         $zp.val(100);
//         zapchastProc = 100;
//     }
//     var result = remontSum - ((remontSum / 100) * remontProc);
//     $result.text(result + " руб.");

//     var zResult = zapchastSum - (zapchastSum / 100 * zapchastProc);
//     $zapchastResult.text(zResult + " руб.");

//     var mResult = result + zResult;
//     $mainResult.text(mResult + " руб.");
// }

// function onlyNumbers(el) {

//     el.on("change keyup input click", function() {
//         if (this.value.match(/[^0-9]/g)) {
//             this.value = this.value.replace(/[^0-9]/g, '');
//         };
//     });

//     return false;
// };



// onlyNumbers($rs);
// onlyNumbers($zs);
// onlyNumbers($rp);
// onlyNumbers($zp);
// calc();

// $rs.on("keyup", function() {
//     calc();
// });
// $rp.on("keyup", function() {
//     calc();
// });

// $zs.on("keyup", function() {
//     calc();
// });
// $zp.on("keyup", function() {
//     calc();
// });