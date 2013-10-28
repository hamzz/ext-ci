Ext.define('HamzProject.model.MenuTree', {
    extend: 'Ext.data.Model',
    idProperty: 'Id',
    fields: [
        { name: 'id', type: 'int', useNull: true },
        { name: 'parentitemid', type: 'string' },
        { name: 'text', type: 'string' },
        { name: 'url', type: 'string' },
	{ name: 'leaf', type: 'bool' }
        //{ name: 'CssClass', type: 'string' },
        //{ name: 'leaf', type: 'bool', convert: function (v, r) { return !r.raw.HasChildren; } }
    ],
    
});