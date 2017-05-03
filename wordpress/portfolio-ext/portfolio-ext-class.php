<?php

require_once('class.phpmailer.php');
require_once('class.smtp.php');

class PortfolioExt {

	protected $plugin_name;
	protected $version;

	public function __construct() {

		$this->plugin_name = 'portfolio-ext';
		$this->version = '1.0.0';
	}

	public function run() {
        add_action( 'init'         , array( $this, 'register_post_types' ) );
        add_action( 'init'         , array( $this, 'register_taxonomies' ) );
        add_action( 'rest_api_init', array( $this, 'register_rest_fields' ) );
        add_action( 'rest_api_init', array( $this, 'register_rest_routes' ) );

        // Remove the gallery shortcode, so we can handle it properly.
        remove_shortcode('gallery');
	}

    public function register_post_types() {
        $labels = array(
            'name'               => __( 'Projects'                   , $this->plugin_name ),
            'singular_name'      => __( 'Project'                    , $this->plugin_name ),
            'menu_name'          => __( 'Portfolio'                  , $this->plugin_name ),
            'name_admin_bar'     => __( 'Project'                    , $this->plugin_name ),
            'add_new'            => __( 'Add New'                    , $this->plugin_name ),
            'add_new_item'       => __( 'Add New Project'            , $this->plugin_name ),
            'new_item'           => __( 'New Project'                , $this->plugin_name ),
            'edit_item'          => __( 'Edit Project'               , $this->plugin_name ),
            'view_item'          => __( 'View Project'               , $this->plugin_name ),
            'all_items'          => __( 'All Projects'               , $this->plugin_name ),
            'search_items'       => __( 'Search Projects'            , $this->plugin_name ),
            'parent_item_colon'  => __( 'Parent Project:'            , $this->plugin_name ),
            'not_found'          => __( 'No projects found.'         , $this->plugin_name ),
            'not_found_in_trash' => __( 'No projects found in Trash.', $this->plugin_name )
        );

        $args = array(
            'labels'                => $labels,
            'public'                => true,
            'publicly_queryable'    => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'query_var'             => true,
            'rewrite'               => array( 'slug' => 'project' ),
            'has_archive'           => true,
            'hierarchical'          => false,
            'menu_position'         => null,
            'menu_icon'             => 'dashicons-portfolio',
            'supports'              => array( 'title', 'editor' ),
            'show_in_rest'          => true,
  		    'rest_base'             => 'pe/projects',
  		    'rest_controller_class' => 'WP_REST_Posts_Controller',
        );

        register_post_type( 'pe-project', $args );

        $labels = array(
            'name'               => __( 'Skills'                   , $this->plugin_name ),
            'singular_name'      => __( 'Skill'                    , $this->plugin_name ),
            'menu_name'          => __( 'Skills'                   , $this->plugin_name ),
            'name_admin_bar'     => __( 'Skill'                    , $this->plugin_name ),
            'add_new'            => __( 'Add New'                  , $this->plugin_name ),
            'add_new_item'       => __( 'Add New Skill'            , $this->plugin_name ),
            'new_item'           => __( 'New Skill'                , $this->plugin_name ),
            'edit_item'          => __( 'Edit Skill'               , $this->plugin_name ),
            'view_item'          => __( 'View Skill'               , $this->plugin_name ),
            'all_items'          => __( 'All Skills'               , $this->plugin_name ),
            'search_items'       => __( 'Search Skills'            , $this->plugin_name ),
            'parent_item_colon'  => __( 'Parent Skill:'            , $this->plugin_name ),
            'not_found'          => __( 'No skills found.'         , $this->plugin_name ),
            'not_found_in_trash' => __( 'No skills found in Trash.', $this->plugin_name )
        );

        $args = array(
            'labels'                => $labels,
            'public'                => true,
            'publicly_queryable'    => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'query_var'             => true,
            'rewrite'               => array( 'slug' => 'skill' ),
            'has_archive'           => true,
            'hierarchical'          => false,
            'menu_position'         => null,
            'menu_icon'             => 'dashicons-hammer',
            'supports'              => array( 'title', 'editor' ),
            'show_in_rest'          => true,
  		    'rest_base'             => 'pe/skills',
  		    'rest_controller_class' => 'WP_REST_Posts_Controller',
        );

        register_post_type( 'pe-skill', $args );
    }

    public function register_taxonomies() {
        $labels = array(
            'name'          => _x( 'Project Categories', $this->plugin_name ),
            'singular_name' => _x( 'Project Category'  , $this->plugin_name ),
            'menu_name'     => __( 'Project Categories', $this->plugin_name ),
        );

        $args = array(
            'labels'                => $labels,
            'hierarchical'          => true,
            'show_ui'               => true,
            'show_admin_column'     => true,
            'query_var'             => true,
            'rewrite'               => array( 'slug' => 'category' ),
            'show_in_rest'          => true,
            'rest_base'             => 'pe/categories/project',
            'rest_controller_class' => 'WP_REST_Terms_Controller',
        );

        register_taxonomy( 'pe-project-category', array( 'pe-project' ), $args );

        $labels = array(
            'name'          => _x( 'Project Tags', $this->plugin_name ),
            'singular_name' => _x( 'Project Tag' , $this->plugin_name ),
            'menu_name'     => __( 'Project Tags', $this->plugin_name ),
        );

        $args = array(
            'labels'                => $labels,
            'hierarchical'          => false,
            'show_ui'               => true,
            'show_admin_column'     => true,
            'query_var'             => true,
            'rewrite'               => array( 'slug' => 'tags' ),
            'show_in_rest'          => true,
            'rest_base'             => 'pe/tags/project',
            'rest_controller_class' => 'WP_REST_Terms_Controller',
        );

        register_taxonomy( 'pe-project-tag', array( 'pe-project' ), $args );

        $labels = array(
            'name'          => _x( 'Skill Categories', $this->plugin_name ),
            'singular_name' => _x( 'Skill Category'  , $this->plugin_name ),
            'menu_name'     => __( 'Skill Categories', $this->plugin_name ),
        );

        $args = array(
            'labels'                => $labels,
            'hierarchical'          => true,
            'show_ui'               => true,
            'show_admin_column'     => true,
            'query_var'             => true,
            'rewrite'               => array( 'slug' => 'category' ),
            'show_in_rest'          => true,
            'rest_base'             => 'pe/categories/skill',
            'rest_controller_class' => 'WP_REST_Terms_Controller',
        );

        register_taxonomy( 'pe-skill-category', array( 'pe-skill' ), $args );
    }

    public function register_rest_fields() {
        register_rest_field( 'pe-project', 'image', array(
            'get_callback'    => array( $this, 'slug_get_attachment_url' ),
            'update_callback' => null,
            'schema'          => null,
        ) );
        register_rest_field( 'pe-project', 'short_description', array(
            'get_callback'    => array( $this, 'slug_get_field_value' ),
            'update_callback' => null,
            'schema'          => null,
        ) );
        register_rest_field( 'pe-project', 'url', array(
            'get_callback'    => array( $this, 'slug_get_field_value' ),
            'update_callback' => null,
            'schema'          => null,
        ) );
        register_rest_field( 'pe-project', 'gallery', array(
            'get_callback'    => array( $this, 'slug_get_field_value' ),
            'update_callback' => null,
            'schema'          => null,
        ) );
        register_rest_field( 'pe-skill', 'value', array(
            'get_callback'    => array( $this, 'slug_get_field_value' ),
            'update_callback' => null,
            'schema'          => null,
        ) );
    }

    public function slug_get_field_value( $object, $field_name, $request ) {
        return get_post_meta( $object[ 'id' ], $field_name, true );
    }

    public function slug_get_attachment_url( $object, $field_name, $request ) {
        return wp_get_attachment_url( $this->slug_get_field_value( $object, $field_name, $request ) );
    }

    public function register_rest_routes() {
        register_rest_route( 'wp/v2', 'pe/mail', array(
            'methods' => 'POST',
            'callback' => array( $this, 'send_mail' ),
        ));
    }

    public function send_mail( WP_REST_Request $request ) {
        // Configure the mailserver.
        $mail = new PHPMailer();
        $mail->CharSet = 'UTF-8';
        $mail->isSMTP();
        $mail->Host     = get_option('mailserver_url');
        $mail->SMTPAuth = true;
        $mail->Username = get_option('mailserver_login');
        $mail->Password = get_option('mailserver_pass');
        $mail->Port     = get_option('mailserver_port');

        // Message parameters, sent by the user.
        $params = $request->get_params();

        $admin_email = get_option('admin_email');
        $site_url    = get_option('siteurl');

        $mail->setFrom($admin_email, $admin_email);
        $mail->addAddress($admin_email);
        $mail->addReplyTo($params['email'], $params['name']);
        $mail->Subject = 'Contact Form - ' . $site_url;
        $mail->Body = $params['message'];

        if (!$mail->send()) {
            return json_encode(array('status' => 'ERROR', 'message' => $mail->ErrorInfo));
        } else {
            return json_encode(array('status' => 'OK'));
        }
    }

}
