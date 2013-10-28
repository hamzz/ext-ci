Ext.define('HamzProject.store.MenuTree', {
    extend: 'Ext.data.TreeStore',
    model: 'HamzProject.model.MenuTree',
    requires: ['HamzProject.model.MenuTree'],
    defaultRootId: '',
    expanded: true,
    proxy: {
        type: 'custProxy',
        api: {
	    //create: 'movies/create', 
            read: 'kerangka/read',
            //update: 'movies/update',
            //destroy: 'movies/destroy',
        },
        //reader: {
        //    type: 'json',
        //    root: 'items',
        //    totalProperty: 'total',
        //    successProperty: 'success'
        //},
        //writer: {
        //    type: 'json',
        //    writeAllFields: true,
        //    encode: true,
        //    root: 'items'
        //}
    }
});