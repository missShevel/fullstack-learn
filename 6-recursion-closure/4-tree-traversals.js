const company = {
	management: [ { name: 'John1' }, { name: 'John2' } ],
  development: {
    qa: [ { name: '1' }, { name: '2' } ],
    developers: {
      frontend: [ { name: '3'}, {name: '4' }],
      backend: [ {name: '5' }, {name: '6' }]
    }
  }
}

function printNames(obj) {
    for(let entry of Object.values(obj)) {
        if (Array.isArray(entry)) {
            entry.forEach((el) => {
                console.log(el.name);
            })
        } else {
            return printNames(entry);
        }
    }
}

printNames(company);