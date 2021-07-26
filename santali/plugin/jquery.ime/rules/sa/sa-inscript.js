( function ( $ ) {
	'use strict';

	var saInScript = {
		id: 'sa-inscript',
		name: 'Sanskrit InScript',
		description: 'Inscript keyboard for Sanskrit script',
		date: '2012-10-16',
		author: 'Junaid P V',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ 'X', 'ँ' ],
			[ 'x', 'ं' ],
			[ '_', 'ः' ],
			[ 'D', 'अ' ],
			[ 'E', 'आ' ],
			[ 'F', 'इ' ],
			[ 'R', 'ई' ],
			[ 'G', 'उ' ],
			[ 'T', 'ऊ' ],
			[ '\\+', 'ृ' ],
			[ 'S', 'ए' ],
			[ 'W', 'ऐ' ],
			[ 'A', 'ओ' ],
			[ 'Q', 'औ' ],
			[ 'k', 'क' ],
			[ 'K', 'ख' ],
			[ 'i', 'ग' ],
			[ 'I', 'घ' ],
			[ 'U', 'ङ' ],
			[ '\\;', 'च' ],
			[ '\\:', 'छ' ],
			[ 'p', 'ज' ],
			[ 'P', 'झ' ],
			[ '\\}', 'ञ' ],
			[ '\'', '', 'ट' ],
			[ '"', 'ठ' ],
			[ '\\[', '','ड' ],
			[ '\\{', '','ढ' ],
			[ 'C', 'ण' ],
			[ 'l', 'त' ],
			[ 'L', 'थ' ],
			[ 'o', 'द' ],
			[ 'O', 'ध' ],
			[ 'v', 'न' ],
			[ 'h', 'प' ],
			[ 'H', 'फ' ],
			[ 'y', 'ब' ],
			[ 'Y', 'भ' ],
			[ 'c', 'म' ],
			[ '\\?', '','य' ],
			[ 'j', 'र' ],
			[ 'n', 'ल' ],
			[ 'N', 'ळ' ],
			[ 'b', 'व' ],
			[ 'M', 'श' ],
			[ '\\<', '','ष' ],
			[ 'm', 'स' ],
			[ 'u', 'ह' ],
			[ '\\]', '','़' ],
			[ 'e', 'ा' ],
			[ 'f', 'ि' ],
			[ 'r', 'ी' ],
			[ 'g', 'ु' ],
			[ 't', 'ू' ],
			[ '\\=', '','ृ' ],
			[ '\\\\', 'ॄ' ],
			[ 's', 'े' ],
			[ 'w', 'ै' ],
			[ 'a', 'ो' ],
			[ 'q', 'ौ' ],
			[ 'd', '्' ],
			[ '\\|', 'ॠ' ],
			[ '/', 'य' ],
			[ '\\>', '।' ],
			[ '0', '','०' ],
			[ '1', '','१' ],
			[ '2', '२' ],
			[ '3', '३' ],
			[ '4', '४' ],
			[ '5', '५' ],
			[ '6', '६' ],
			[ '7', '७' ],
			[ '8', '८' ],
			[ '9', '९' ],
			[ '\\@', 'ॅ' ],
			[ '\\#', '','्र' ],
			[ '\\$', '','र्' ],
			[ '\\%', '','ज्ञ' ],
			[ '\\^', '','त्र' ],
			[ '\\&', 'क्ष' ],
			[ '\\*', 'श्र' ],
			[ '\\(', '\u200D' ],
			[ '\\)', '\u200C' ] ],

		patterns_x: [
			[ 'F', 'ऌ' ],
			[ '\\>', 'ऽ' ],
			[ 'X', 'ॐ' ],
			[ 'e', '\u0951' ],
			[ 'd', '\u0952' ],
			[ 'R', 'ॡ' ],
			[ 'f', 'ॢ' ],
			[ 'r', 'ॣ' ],
			[ '\\.', '॥' ],
			[ '\\@', '','ॅ' ],
			[ '4', '₹' ] ]

	};

	$.ime.register( saInScript );
}( jQuery ) );
