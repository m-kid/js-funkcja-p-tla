function rysujChoinkę () {
for ( var levels = 0 ; levels < 30 ; levels++) {
        star =" ";

        for ( var n = 0 ; n < 2 * levels - 1 ; n++) {
            star += "*";

        }
        console.log(star);
    }
}

rysujChoinkę()