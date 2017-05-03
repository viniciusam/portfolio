<?php
function init_theme() {
	
	wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.css' );
	wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/assets/css/font-awesome.css' );
	wp_enqueue_style( 'styles', get_template_directory_uri() . '/assets/css/styles.css' );

	wp_enqueue_script( 'polyfills', get_template_directory_uri() . '/polyfills.bundle.js', array(), false, true );
	wp_enqueue_script( 'vendor', get_template_directory_uri() . '/vendor.bundle.js', array(), false, true );
	wp_enqueue_script( 'main', get_template_directory_uri() . '/main.bundle.js', array(), false, true );

}
add_action( 'wp_enqueue_scripts', 'init_theme' );
