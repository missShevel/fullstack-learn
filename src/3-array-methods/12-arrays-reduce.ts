const arr: number[] = [1,2,3,4,5];

const sum: number = arr.reduce((prev, curr) => prev + curr, 0);
console.log(sum);

const mult: number = arr.reduce((prev, curr) => prev * curr, 1);
console.log(mult);

type UserRecord = {
	id: number
	name: string,
};

// start array
const arr2: UserRecord[] = [
	{
		id: 11,
		name: 'John'
	},
	{
		id: 42,
		name: 'Olha'
	},
	{
		id: 31,
		name: 'Pasha'
	}
];
const hashTable: Record<number, UserRecord> = arr2.reduce((prev, curr) => {
        return {
            ...prev,
            [curr.id]: curr 
        }
    }, {});

// const hashTable = arr2.reduce((prev, curr) => ({...prev,[curr.id]: curr}), {}); can we do it in one line?
console.log(hashTable);

export {}