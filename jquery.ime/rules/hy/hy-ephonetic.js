/**
 * This is a phonetic layout for the Armenian language (hy, arm, hye).
 * The layout comes from DOS times, and was later popularised by KDWin and
 * WinKeys keyboard "drivers".
 * While not as efficient and well-thought as the official typewriter layout, it is very popular as
 * it uses similary sounding Latin letters, which is very handy, as keyboards in Armenia
 * don't come engraved with Armenian letters.
 *
 * This layout complies with Unicode 6.1, including all valid Armenian punctuation signs,
 * mijaket (outside of main Armenian Unicode range) and Dram (AMD) sign.
 * Please, double-check with Unicode before making any changes here.
 *
 * Layout supports extended keys, with AltGr (Alt or Alt+Ctrl on some systems) + key,
 * producing digits and punctuation marks from standard US keyboard layout.
 */

( function ( $ ) {
	'use strict';

	var hyEphonetic = {
		id: 'hy-ephonetic',
		name: 'Հայերեն Հնչյունային',
		description: 'Armenian phonetic (Eastern) keyboard layout',
		date: '2013-07-06',
		URL: 'http://hy.am',
		author: 'Aleksey Chalabyan Ալեքսեյ Չալաբյան a.k.a Xelgen',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 0,
		maxKeyLength: 0,
		patterns: [
			[ '1', 'է' ],
			[ '\\!', 'Է' ],
			[ '2', 'թ' ],
			[ '\\@', 'Թ' ],
			[ '3', 'փ' ],
			[ '\\#', 'Փ' ],
			[ '4', 'ձ' ],
			[ '\\$', 'Ձ' ],
			[ '5', 'ջ' ],
			[ '\\%', 'Ջ' ],
			[ '6', '֏' ],
			[ '\\^', '(' ],
			[ '7', 'և' ],
			[ '\\&', ')' ],
			[ '8', 'ր' ],
			[ '\\*', 'Ր' ],
			[ '9', 'չ' ],
			[ '\\(', 'Չ' ],
			[ '0', 'ճ' ],
			[ '\\)', 'Ճ' ],
			[ '\\-', '–' ],
			[ '\\_', '—' ],
			[ '\\=', 'ժ' ],
			[ '\\+', 'Ժ' ],
			[ '\\`', '՝' ],
			[ '\\~', '՜' ],
			[ 'q', 'ք' ],
			[ 'Q', 'Ք' ],
			[ 'w', 'ո' ],
			[ 'W', 'Ո' ],
			[ 'e', 'ե' ],
			[ 'E', 'Ե' ],
			[ 'r', 'ռ' ],
			[ 'R', 'Ռ' ],
			[ 't', 'տ' ],
			[ 'T', 'Տ' ],
			[ 'y', 'ը' ],
			[ 'Y', 'Ը' ],
			[ 'u', 'ւ' ],
			[ 'U', 'Ւ' ],
			[ 'i', 'ի' ],
			[ 'I', 'Ի' ],
			[ 'o', 'օ' ],
			[ 'O', 'Օ' ],
			[ 'p', 'պ' ],
			[ 'P', 'Պ' ],
			[ '\\[', 'խ' ],
			[ '\\{', 'Խ' ],
			[ '\\]', 'ծ' ],
			[ '\\}', 'Ծ' ],
			[ '\\\\', 'շ' ],
			[ '\\|', 'Շ' ],
			[ 'a', 'ա' ],
			[ 'A', 'Ա' ],
			[ 's', 'ս' ],
			[ 'S', 'Ս' ],
			[ 'd', 'դ' ],
			[ 'D', 'Դ' ],
			[ 'f', 'ֆ' ],
			[ 'F', 'Ֆ' ],
			[ 'g', 'գ' ],
			[ 'G', 'Գ' ],
			[ 'h', 'հ' ],
			[ 'H', 'Հ' ],
			[ 'j', 'յ' ],
			[ 'J', 'Յ' ],
			[ 'k', 'կ' ],
			[ 'K', 'Կ' ],
			[ 'l', 'լ' ],
			[ 'L', 'Լ' ],
			[ ';', ';' ],
			[ ':', '։' ],
			[ '\'', '՛' ],
			[ '\"', '"' ],
			[ 'z', 'զ' ],
			[ 'Z', 'Զ' ],
			[ 'x', 'ղ' ],
			[ 'X', 'Ղ' ],
			[ 'c', 'ց' ],
			[ 'C', 'Ց' ],
			[ 'v', 'վ' ],
			[ 'V', 'Վ' ],
			[ 'b', 'բ' ],
			[ 'B', 'Բ' ],
			[ 'n', 'ն' ],
			[ 'N', 'Ն' ],
			[ 'm', 'մ' ],
			[ 'M', 'Մ' ],
			[ ',', ',' ],
			[ '\\<', '«' ],
			[ '\\.', '․' ],
			[ '\\>', '»' ],
			[ '/', '…' ],
			[ '\\?', '՞' ]
		],
		patterns_x: [
			[ '1', '1' ],
			[ '\\!', '!' ],
			[ '2', '2' ],
			[ '\\@', '@' ],
			[ '3', '3' ],
			[ '\\#', '#' ],
			[ '4', '4' ],
			[ '\\$', '$' ],
			[ '5', '5' ],
			[ '\\%', '%' ],
			[ '6', '6' ],
			[ '\\^', '^' ],
			[ '7', '7' ],
			[ '\\&', '&' ],
			[ '8', '8' ],
			[ '\\*', '*' ],
			[ '9', '9' ],
			[ '\\(', '(' ],
			[ '0', '0' ],
			[ '\\)', ')' ],
			[ '\\-', '-' ],
			[ '\\_', '_' ],
			[ '\\=', '=' ],
			[ '\\+', '+' ],
			[ '\\`', '`' ],
			[ '\\~', '~' ],
			[ '\\[', '[' ],
			[ '\\{', '{' ],
			[ '\\]', ']' ],
			[ '\\}', '}' ],
			[ '\\\\', '\\' ],
			[ '\\|', '|' ],
			[ ';', ';' ],
			[ '\\:', ':' ],
			[ '\'', '\'' ],
			[ '\"', '\"' ],
			[ '\\<', '<' ],
			[ '\\.', '.' ],
			[ '\\>', '>' ],
			[ '/', '/' ],
			[ '\\?', '?' ]
		]
	};

	$.ime.register( hyEphonetic );
}( jQuery ) );
