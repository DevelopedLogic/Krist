var config = {};

/*
 * DATABASE SETUP
 */
// For more information see: http://sequelize.readthedocs.org/en/latest/api/sequelize/

// The hostname of your database server.
config.database_host    = 'localhost';
// The name of the database
config.database_db      = 'example';
// The user used to authenticate against the database
config.database_user    = 'example';
// The password used to authenticate against the database
config.database_pass    = 'example';
// The dialect used to connect, one of: mysql, postgres, mariadb or mssql. (sqlite not supported, fuck you Taras!)
config.database_dialect = 'mysql';

/*
 * WEBSERVER SETUP
 */

// The socket file for your server. Proxy this to nginx.
config.server_sock  = '/var/krist/krist.sock';

/*
 * KRIST SPECIFIC
 */

// A list of addresses to show as N/A(Burnt) in legacy calls
config.burntAddressList = [
	'',
	'N\\A',
	'C:\\Users\\Bryan\\Downloads\\miner.py',
	'2bb037a6f'
];


module.exports = config;