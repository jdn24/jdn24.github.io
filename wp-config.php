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
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

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
define( 'AUTH_KEY',         '0E<(;cWP ?#A]2MfM<FkKf&>b78~ADru#l*(kq8zyK(MiI:M?uU$^pP&`_]))Cza' );
define( 'SECURE_AUTH_KEY',  ']qh5qO^r7&AhWQS9R1B=b%!&p#r2lTys}`B!qw+bN^0t3BuPg1 b4lw ICMPXa|p' );
define( 'LOGGED_IN_KEY',    'c* c;<>_7(H*=~Tag{0tP;p/_-kTo&}Z;=!-/~0j.6/#IGT9rhj9h(;>=Lnezy&#' );
define( 'NONCE_KEY',        'v3Z@{;/Z`)!DT)/5 O |R3.5bRc9o~H&gp^}N{IB2.A8&!wOjeF$8xssHC;6L)d/' );
define( 'AUTH_SALT',        '_,YRKCnY-0|s):`=&~~^*Kx9a6dfsA?GWiB[c3,VO}pbwa`63`1{r,RNlyY<3cfs' );
define( 'SECURE_AUTH_SALT', 'M<2T6_txr2#{{qf5gChyh[ohY/.f=.,Q0CHq1  (sMS7y`<8E8LiZ-qz /sbwA)?' );
define( 'LOGGED_IN_SALT',   'Jgm)O=/6(M!/14}]Ormf|JSZ`d%[!0s%B5/hz S9DU@L->JY~),ZhG[X89A_&<%W' );
define( 'NONCE_SALT',       '><zWus:3|zv=i|</0S}C{U^I99a&zhA6vOi,MJUWT-/s::pwtD$u5BAWoK.S,?dZ' );

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
