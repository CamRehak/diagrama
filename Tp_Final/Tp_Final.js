let anchoPantalla = 640;
let altoPantalla = 480;
let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18;
let pantallaActual = 1; // Variable para almacenar la pantalla actual
let anchoTexto;
let tamTexto;
let inicioTexto;

function preload() {
  img1 = loadImage("data/pantalla1.png");
  img2 = loadImage("data/pantalla2.png");
  img3 = loadImage("data/pantalla3.png");
  img4 = loadImage("data/pantalla4.jpeg");
  img5 = loadImage("data/pantalla5.jpeg");
  img6 = loadImage("data/pantalla6.png");
  img7 = loadImage("data/pantalla7.jpeg");
  img8 = loadImage("data/pantalla8.jpeg");
  img9 = loadImage("data/pantalla9.jpeg");
  img10 = loadImage("data/pantalla10.jpeg");
  img11 = loadImage("data/pantalla11.jpeg");
  img12 = loadImage("data/pantalla12.png");
  img13 = loadImage("data/pantalla13.png");
  img14 = loadImage("data/pantalla14.jpeg");
  img15 = loadImage("data/pantalla15.jpeg");
  img16 = loadImage("data/pantalla16.jpeg");
  img17 = loadImage("data/pantalla17.jpeg");
  img18 = loadImage("data/pantalla18.jpeg");
  
  
}

function setup() {
  createCanvas(anchoPantalla, altoPantalla);
  boton = createButton('Siguiente');
  boton.position(anchoPantalla - 100, altoPantalla - 50);
  boton.mousePressed(cambiarPantalla);
}

function reload(){
  
  anchoTexto = anchoPantalla * 0.8;
  tamTexto = altoPantalla * 0.10;
  inicioTexto = anchoPantalla * 0.05;
  
  textSize(tamTexto);
}

function draw() {
  background(0);
  // Dibujar la imagen y el texto correspondientes a la pantalla actual
  switch (pantallaActual) {
    case 1:
      image(img1, 0, 0, anchoPantalla, altoPantalla);
      textSize(24);
      textAlign(CENTER, CENTER);
      
      text("Satsuki y Mei llegan a su nueva casa, emocionadas y un poco nerviosas. Se han mudado para estar más cerca del hospital donde cuidan a su madre enferma. \n En este nuevo hogar, rodeado de naturaleza, las hermanas comenzarán a descubrir secretos y maravillas que cambiarán su vida para siempre. \n La aventura recien empieza!", anchoPantalla / 2, altoPantalla / 2);
      break;
      
      
    case 2:
      image(img2, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text(" Mientras Satsuki explora el interior de la casa, Mei decide aventurarse al jardín. Allí, su curiosidad la lleva hacia el árbol más grande del lugar. Al acercarse, descubre un túnel secreto escondido entre sus raíces. Con el corazón latiendo de emoción, Mei se siente atraída por la misteriosa entrada, lista para descubrir qué secretos aguarda dentro.", anchoPantalla / 2, altoPantalla / 2);
      break;
      
      
    case 3:
      image(img3, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Mei se adentra en el túnel y comienza a recorrer un largo camino lleno de sombras y ecos. Sin embargo, la aventura da un giro inesperado cuando pierde el equilibrio y cae en un pozo. Para su sorpresa, aterriza suavemente sobre una superficie peluda y misteriosa. Confundida pero intrigada, Mei se da cuenta de que ha entrado en un mundo mágico donde nada es lo que parece.", anchoPantalla / 2, altoPantalla / 2);
      break;
      
      
     case 4:
      image(img4, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Texto para pantalla 4", anchoPantalla / 2, altoPantalla / 2);
      break;
      
      
       case 5:
      image(img5, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Texto para pantalla 4", anchoPantalla / 2, altoPantalla / 2);
      break;
      
      
       case 6:
      image(img6, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Texto para pantalla 4", anchoPantalla / 2, altoPantalla / 2);
      break;
      
       case 7:
      image(img7, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Texto para pantalla 4", anchoPantalla / 2, altoPantalla / 2);
      break;
      
      
       case 8:
      image(img8, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Texto para pantalla 4", anchoPantalla / 2, altoPantalla / 2);
      break;
    
    
     case 9:
      image(img9, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Texto para pantalla 4", anchoPantalla / 2, altoPantalla / 2);
      break;
      
      
     case 10:
      image(img10, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Texto para pantalla 4", anchoPantalla / 2, altoPantalla / 2);
      break;
      
      
       case 11:
      image(img11, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Texto para pantalla 4", anchoPantalla / 2, altoPantalla / 2);
      break;
      
       case 12:
      image(img12, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Texto para pantalla 4", anchoPantalla / 2, altoPantalla / 2);
      break;
      
      
       case 13:
      image(img13, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Texto para pantalla 4", anchoPantalla / 2, altoPantalla / 2);
      break;
      
      
       case 14:
      image(img14, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Texto para pantalla 4", anchoPantalla / 2, altoPantalla / 2);
      break;
      
       case 15:
      image(img15, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Texto para pantalla 4", anchoPantalla / 2, altoPantalla / 2);
      break;
      
      
       case 16:
      image(img16, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Texto para pantalla 4", anchoPantalla / 2, altoPantalla / 2);
      break;
      
       case 17:
      image(img17, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Texto para pantalla 4", anchoPantalla / 2, altoPantalla / 2);
      break;
      
       case 18:
      image(img18, 0, 0, anchoPantalla, altoPantalla);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Texto para pantalla 4", anchoPantalla / 2, altoPantalla / 2);
      break;
  }
}

 function cambiarPantalla() {
  pantallaActual++;
  if (pantallaActual > 18) { // Si se pasa de la pantalla 18, regresar a la 1
    pantallaActual = 1;
  }
}
