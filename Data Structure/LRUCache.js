'use strict';
/*

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
set(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

*/

function LRUCache(capacity) {
	this._items = {};
	this._length = 0;
	this._capacity = capacity;
	this._head = null;
	this._tail = null;
}

LRUCache.prototype = {
	_Node: function(value) {
		this.value = value;
		this.next = null;
	},

	get: function(key) {
		if (this.hasItem(key)) {
			var node = this._items[key].entry;
			this.changePosition(node);
			return this._items[key];
		} else {
			return -1;
		}
	},

	set: function(key, value) {
		if (!this.hasItem(key)) {            // insert new element
			var node = new this._Node(key);

			if (this._length < this._capacity) {   // no overflow
				if (this._length === 0) {
					this._head = node;
					this._tail = node;
				} else {
					this._tail.next = node;
					this._tail = this._tail.next;
				}
				this._length++;
			} else {						  // overflow
				var headKey = this._head.value;
				delete this._items[headKey];
				this._head = this._head.next;
				this._tail.next = node;
				this._tail = this._tail.next;
			}

		} else {							 // update exist element
			var node = this._items[key].entry;
			this.changePosition(node);
		}

		this._items[key] = { value: value, entry: node};
	},

	changePosition: function(node) {
		var current = this._head;
		if (node === this._head) {
			this._tail.next = this._head;
			this._head = this._head.next;
			this._tail = this._tail.next;
			this._tail.next = null;
		} else if (node !== this._tail) {
			while (current.next !== node) {
				current = current.next;
			}
			this._tail.next = current.next;
			current.next = current.next.next;
			this._tail = this._tail.next;
			this._tail.next = null;
		}
	},

	hasItem: function(key) {
		return this._items.hasOwnProperty(key);
	},

	keys: function() {
		var keys = [];
		for (var k in this._items) {
			keys.push(k);
		}
		return keys;
	}
}

var a = new LRUCache(5);
a.set('one', 1);
a.set('two', 2);
a.set('three', 3);
a.set('four', 4);
a.set('five', 5);
a.set('six', 6);
console.log(a);

