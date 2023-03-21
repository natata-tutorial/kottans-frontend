# Capitalize Text

	const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
---
# Calculate Percent

	const calculatePercent = (value, total) => Math.round((value / total) * 100);
---
# Random Element

	const getRandomItem = (items) =>  items[Math.floor(Math.random() * items.length)];
---
# Remove Duplicate Elements

	const removeDuplicates = (arr) => [...new Set(arr)];
---
# Sort Elements By Certain Property

	const sortBy = (arr, key) => arr.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
---
# Check if Arrays/Objects are Equal

	const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
---
# Count Number of Occurrences

	const countOccurrences = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a), 0);
---
# Wait for a Certain Amount of Time

	const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
---
# Use the Pluck Property from Array of Objects

	const pluck = (objs, key) => objs.map((obj) => obj[key]);

	const users = [{ name: "Abe", age: 45 }, { name: "Jennifer", age: 27 }];
	pluck(users, 'name'); // ['Abe', 'Jennifer']

---
# Insert an Element at a Certain Position

	const insert = (arr, index, newItem) => [...arr.slice(0, index), newItem, ...arr.slice(index)];


