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
define( 'AUTH_KEY',         '%OG@`]}d~+CKz_:G0W-]=t8HD|G} rR}|`<YfSA=]tWcr%Tw.wLIQ=Hd:uKs$RBi' );
define( 'SECURE_AUTH_KEY',  'Ot*r!kFRu:mA+ccwW3g$l*nmZKaxUT3f|5lVG8,!_o1>/]MS-iCDPq2THqh?C/xZ' );
define( 'LOGGED_IN_KEY',    'C>l)97m-!8i(Z7*GUo8G86#TFS>lHV4BtR(pY=>#{,X*-UEL/b}k<wJq4Q:JHy-q' );
define( 'NONCE_KEY',        '@ti[a+T7>Ns~eZ^24Mzk+<BS1B@?jR8R9Z^yy1k/_8659 vI7Mq97nCfiP]V]O9j' );
define( 'AUTH_SALT',        'E,2MPM(MT/D;A2(%I0bPAPIr}4C&j~]Bo9g1S3tQEZa1MevLe.;<FT6|ekK59Pn}' );
define( 'SECURE_AUTH_SALT', '&%ixRJ?*54(za0mwa,zdoU`^5Q*4jsBaF3l8/,n?`bNhAa_!(Cyp_B$Gwr&S Bf&' );
define( 'LOGGED_IN_SALT',   'Z.a$TzlGp`}G(@`a(9-8jBWbN>,wp7AE(BnBa9Iry<yz~T! -`CByn-Al96]Fx=b' );
define( 'NONCE_SALT',       'G-TN2z2)4qs5%m@1HfJ)c06FZRyb;(x|DELYr![S|L}6OYO=_R3v/=Br0klR?&&2' );

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
