import "../../styles/agua.css";
import $ from "jquery";
import "jquery.ripples";


export default function movimiento(){


$('.agua').ripples({
    resolution: 300,
    dropRadius: 80,
    perturbance: 0.3,
})
}



    
    

    /*var $el = $(".agua");
$el.ripples({
  resolution: 412,
  dropRadius: 10,
  perturbance: 0.04,
  interactive: false
});
$el.ripples("show");
function randomDrop() {
  var x = Math.random() * $el.outerWidth();
  var y = Math.random() * $el.outerHeight();
  var dropRadius = 10;
  var strength = 0.01 + Math.random() * 0.02;
  $el.ripples('drop', x, y, dropRadius, strength);
}
for (let index = 0; index < 3; index++) {
  randomDrop();
}
setInterval(function() {
  randomDrop();
}, 3000);*/