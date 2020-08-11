$(document).ready(function(){
    $nav = $('.nav');
    $togglecollapase = $('.toggle-collapase')
    $togglecollapase.click(function(){
        $nav.toggleClass('collapase')
    })
});