Ext.define('HamzProject.store.Movies', {
    extend: 'Ext.data.Store',
    model: 'HamzProject.model.Movie',
    autoLoad: true,
    remoteSort: true,
    pageSize: 45,
    sorters: [{
		property: 'id',
		direction: 'desc'
    }]
});