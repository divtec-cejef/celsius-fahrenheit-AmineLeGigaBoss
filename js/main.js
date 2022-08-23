/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
    'use strict'; // Demande un interprétation stricte du code

    let a = 'Bonjour';

    let celsius;
    do {
      celsius = prompt('Température en celsius :');
    } while (isNaN(celsius));

    alert(`${celsius}°C = ${(celsius * 9 / 5 + 32).toFixed(2)}°F`);

    console.log(a);
}()); // Main IIFE

