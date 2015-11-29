/**
 * sivart-ci v0.1.0
 *
 * A simple interactive CI Dashboard built on MEAN stack.
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 28 November, 2015
 *
 * Sivart Main Script.
 */

$(document).ready(function() {
    var btnShowMenu = $('#btnShowMenu');

    btnShowMenu.on('click', function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});
