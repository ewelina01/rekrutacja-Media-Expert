/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Id',  dataIndex: 'id', editor: 'textfield' },
        { text: 'Name', dataIndex: 'name', flex: 1, editor: 'textfield' },
        { text: 'DateCreated', dataIndex: 'datecreated', flex: 1,  editor: 'datefield' },
        { text: 'Status', dataIndex: 'status', flex: 1, editor: 'textfield' },
        { text: 'DateLast', dataIndex: 'datelast', flex: 1, editor: 'textfield' },
        { text: 'History', dataIndex: 'history', flex: 1, editor: 'textfield' }
    ],
	
	selModel: {
       type: 'cellmodel'
    },
	
	plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },

    listeners: {
        select: 'onItemSelected'
    }
});
