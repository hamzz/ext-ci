Ext.define('HamzProject.controller.Surface', {
    extend: 'Ext.app.Controller',

    views: ['Surface'],

    refs: [{
        ref: 'surface',
        selector: 'Surface'
    }],
	
	init: function() {
        this.control({
            'Surface > toolbar > button[action=logout]': {
                click: this.logout
            }
        });
    },
	
	logout: function() {
        document.location.href = '/ciext_new/auth/logout';
    }
});