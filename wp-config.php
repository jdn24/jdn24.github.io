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
define( 'AUTH_KEY',         '[n7wx~h0sa!u=dIjlb28sKjAw}6`^q9LX-x?;WC?)`1tpZ~Z)LiX3K[S(W|bY.2j' );
define( 'SECURE_AUTH_KEY',  'Qbj&oW@5j*pFgvmz{s]IFJxm|&w)Ub6W]!.f+19>c!=#QU7YR7wa9y?<`/%|2Vy$' );
define( 'LOGGED_IN_KEY',    'u<IehjE`@QcQeD[@FUtZ!jJR|ChV/]hvJ+v@R,*=yNc&ra5Xonm8_Px<>]0]uG!Z' );
define( 'NONCE_KEY',        'H1IXn$ttsY,/I1:+_jMY)jqmlH5{R#yNBdh.<Kb&_mpOP8mKU:r<2JGJmv@ *h75' );
define( 'AUTH_SALT',        '_Cm>}]9_Yn%u}h/W}u.ZO{1l.47G2T-zl>_|SyASyU%WuDG_S=z1qLL53sLD7Snu' );
define( 'SECURE_AUTH_SALT', '-`0TYwjWF*aA]n/9*r&]1j{?%d7)gxYSKLajH_Et#Z7+V:X!WL]v]LTyw1xvU;AC' );
define( 'LOGGED_IN_SALT',   'I#QE(jrs{cBMt>kL-igIf5Y*0CC8zV)YrpM-zHYSq@7|{G,n[hgNgut%vLj9 lqo' );
define( 'NONCE_SALT',       ' NOWU2!H+kB#8vykag}L+H7XwDlgwjQyrO:U1!u^7%l=E7JU+{97PF,CAm.JSmGE' );

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
