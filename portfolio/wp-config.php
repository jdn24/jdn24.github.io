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
define( 'AUTH_KEY',         '<~.+8-Ex:&Z&X;;!oL6o?^N,ZRMIXCQV#j|Kx|i`.:n8$H52W{LH6`+4b:!9 Y+6' );
define( 'SECURE_AUTH_KEY',  ')4q1~2AKKMFL-{~HqMoZKJA~jza^m{}px[shsTHYc-pmdccZKjO0kbw(Cr]&])w5' );
define( 'LOGGED_IN_KEY',    'FxNcB48JzK@;C[Ukq.$Ys(Oh7L:ZOKF*!^k@$fGSNKns$Q8NY9CD(UfPM|P$*5vw' );
define( 'NONCE_KEY',        '(m_9suLyZQJ@jH?Q4c9#u_+/k;9^9dw]5&d<fC1i@d?OfR|%d&w:}H`QJo5;[kZE' );
define( 'AUTH_SALT',        '9kf_mvPt>+rfm:Qir]0rm8_Ob%M>ocap4e7rQ<o*r1D2Dzt9-<bn5f+kS#//:Fxe' );
define( 'SECURE_AUTH_SALT', '55:Rvq3!:SR1 p@(#h~|m<&BJ$paT_B^]kJxH~}N6p6FWucVWpVz4+KA1fiE[sA8' );
define( 'LOGGED_IN_SALT',   'o=9GxS/MqFyfL~Wu[evW6CY G:!H]a-&/]c ]<dJ(C+@pXhIm?tmT<fp]ylj|5Wd' );
define( 'NONCE_SALT',       '5dU)o]#=D}^K~tz`_!6Wfoc}7{445bb>/<fTi:n9taxKHC=Nt#9wEXbTDg*<I&cz' );

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
