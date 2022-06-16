Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',
/*
    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},
	*/
	
	data: { items: [
        { 
			id: '254', 
			name: "Sample 1", 
			datecreated: "2020-12-01", 
			status: "Status three",
			datelast:"2020-12-04T13:15:10", 
			history:{ items: [
				{id:"123",docid:254,status:"Status one",date:"2020-12-01T11:00:00"},
				{id:"124",docid:254,status:"Status two",date:"2020-12-02T12:00:00"},
				{id:"125",docid:254,status:"Status three",date:"2020-12-04T13:15:10"}
			] }
		},
        { 
			id: '255', 
			name: "Sample 2",  
			datecreated: "2020-12-02",
			status: "Status one", 
			datelast:"2020-12-02T12:20:20", 
			history:{ items: [
				{id:"126",docid:255,status:"Status one",date:"2020-12-02T12:20:20"}
			] }
		}
    ]},

	
	
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
