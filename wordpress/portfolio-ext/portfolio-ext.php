<?php

/**
 * @wordpress-plugin
 * Plugin Name:       Portfolio Extensions
 * Plugin URI:        http://
 * Description:       Extra types and endpoints for the portfolio backend.
 * Version:           1.0.0
 * Author:            Vinicius Avellar
 * Author URI:        http://www.viniciusam.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       portfolio-ext
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

require plugin_dir_path( __FILE__ ) . 'portfolio-ext-class.php';
function run_portfolio_ext() {
	$plugin = new PortfolioExt();
	$plugin->run();
}
run_portfolio_ext();
