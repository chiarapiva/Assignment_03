var colorList = ['#295BA7',
                '#94AC3C',
                '#FCC314',
                '#F76B19',
                '#E6133D',
                '#FF0F63',
                '#07B29E'];
                
                
function setup() {
  createCanvas(500, 500);
  background(255,255,191)

  var x1 = -15;
  var y1 = 0;
  var y2 = 31;
  
  var x3 = 16;
  var y3 = -30;
  var y4 = 0;

  var pari = 1;
  

  for (var y = 0; y < 600; y += 50) {

    for (var x1 = -15; x1 < 600; x3 += 30, x1 += 30) {
      
   quad(x1, y1, x1, y2, x3, y3, x3, y4);
   
   fill(color(random(colorList)));

      if (pari == 1) {   
       y1 = 0 + y;
        y2 = -30 + y;
        y3 = 0 + y;
        y4 = 31 + y;
        pari = -1;
      } else {
        y1 = 31 + y;
        y2 = 0 + y;
        y3 = -30 + y;
        y4 = 0+ y;

        pari = 1;
      }

    }
    
    x1 = 0;
    x3 = 16;
    y1 = 31 + y;
    y2 = 0+ y;
    y3 = -30 + y;
    y4 = 0 + y;

    pari = 1;
  }
}


function draw() {

}