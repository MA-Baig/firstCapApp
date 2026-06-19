sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/firstcapui/firstcapui/test/integration/pages/BooksList",
	"com/firstcapui/firstcapui/test/integration/pages/BooksObjectPage"
], function (JourneyRunner, BooksList, BooksObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/firstcapui/firstcapui') + '/test/flpSandbox.html#comfirstcapuifirstcapui-tile',
        pages: {
			onTheBooksList: BooksList,
			onTheBooksObjectPage: BooksObjectPage
        },
        async: true
    });

    return runner;
});

