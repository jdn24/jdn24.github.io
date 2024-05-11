<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'jdn24.github.io' );

/** Database username */
define( 'DB_USER', 'admin' );

/** Database password */
define( 'DB_PASSWORD', 'admin' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '-;mC.V)w>J$  RGN>p?[~b)@ab+`g*abTSFw9jI^NV;8EB;ub&aL-`Uz!M(1K`jj' );
define( 'SECURE_AUTH_KEY',  'EM@yH_7)|U,LQk>LdG|{,=:fEtmOTG[^jU!P}5Jzz$ol^zY^f;fXi1`i@H8Q;oxc' );
define( 'LOGGED_IN_KEY',    'Jzai<TXD0tjLXfal$HDEPw-Us+0N]@Wftlj#7=L_lfzS**g9n=Q;McCN2b6t.NqI' );
define( 'NONCE_KEY',        'H|)P:]+$Ovpua!JMrvBMpHr=cj)Z$U#x#dcV/|:1ih-<z Xp0WalZ>=81jQ1C)nw' );
define( 'AUTH_SALT',        'hS0wZsqObINN%l2@Vyz_nYKsq<9JM{zK?=6$F7t~oj~}n0<D) G8Pw_94G6Qyn*2' );
define( 'SECURE_AUTH_SALT', 'ZnTkmBFW Fpe@@h:LV_uS?k#4wiW.ebQe[/5wl4nrT8NvFku8DC+[`h60T+j~^$W' );
define( 'LOGGED_IN_SALT',   'o%|Ctt5`-S{iR{r5D%0r}4rs=C*3}|k!4iWp;{[<^WP+kr#1DEwl?_hvwl]Eqv-}' );
define( 'NONCE_SALT',       ']zjJU+?0.3dQU+sf+Jmc|YM=A|Kn!5cp.[,i{`d3K4)suqi}dq~cUBN375y)>QDP' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
