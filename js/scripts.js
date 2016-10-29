function rysujChoinkę (targetNumber) {
for ( var levels = 0 ; levels < targetNumber ; levels++) {
        star =" ";

        for ( var n = 0 ; n < 2 * levels - 1 ; n++) {
            star += "*";

        }
        console.log(star);
    }
}

rysujChoinkę(8)