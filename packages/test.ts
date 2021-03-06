/**
 * complete logs
 *
 * @export
 * @class Test
 */
export class Test {
	constructor() {
		this.process();
	}

	/**
	 * delegate event
	 *
	 * @private
	 * @memberof Test
	 */
	private delegate(): void {
		// document.getElementById('test-id').onclick = (event: any): any => {
		// 	const newEvent: any = event || window.event;
		// 	const target: any = newEvent.target || newEvent.scrElement;
		// 	console.log(target, newEvent);
		// };

		// 合并对象
		const a: Set<any> = new Set([1, 2, 3]);
		const b: Set<any> = new Set([4, 5, 6, 7]);
		const union: Set<any> = new Set([...a, ...b]);

		// 交集
		const intersect: Set<any> = new Set(
			[...a].filter((x: number): any => {
				return b.has(x);
			})
		);

		// 差集
		const difference: Set<any> = new Set(
			[...a].filter((x: number): any => {
				return !b.has(x);
			})
		);

		console.log(union, intersect, difference);
	}

	/**
	 * 扁平化ARRAY
	 *
	 * @private
	 * @memberof Test
	 */

	private flatArray(arr: Array<any> = [1, 3, 4, [32, 32, 2, 1, 'ddss']]): void {
		let result: any = [];
		for (let index: number = 0; index < arr.length; index++) {
			const element: any = arr[index];
			if (Array.isArray(element)) {
				// 如果遍历的元素为数组，继续递归
				result = result.concat(this.flatArray(element));
			} else {
				result.push(element);
			}
		}

		return result;
	}

	/**
	 * mobile view port
	 *
	 * @private
	 * @returns {string}
	 * @memberof Test
	 */
	private getDeviceWidthContent(): string {
		return '<meta name="viewport" content="width=device=width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scaable=no"';
	}

	/**
	 * get most
	 *
	 * @private
	 * @param {Array<number>} [arr=[111, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 55, 5, 66, 6, 6, 6, 3, 4, 5, 8, 9, 0, 345, 3]]
	 * @returns {*}
	 * @memberof Test
	 */
	private getMost(arr: Array<number> = [111, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 55, 5, 66, 6, 6, 6, 3, 4, 5, 8, 9, 0, 345, 3]): any {
		const map: Map<string, any> = new Map();
		arr.forEach((item: any): any => {
			if (map.has(item)) {
				map.set(item, map.get(item) + 1);
			} else {
				map.set(item, 1);
			}
		});

		let [maxVals, maxNum]: Array<any> = [[arr[0]], map.get(arr[0].toString())];
		map.forEach((count: any, item: any): any => {
			if (count > maxNum) {
				maxVals = [item];
				maxNum = count;
			} else {
				maxVals.push(item);
			}
		});

		return maxVals;
	}

	/**
	 * process
	 *
	 * @private
	 * @memberof Test
	 */
	private process(): void {
		// delegate event
		// this.delegate();
		// console.log(this.flatArray());
		// console.log(this.unique());
		// console.log(this.trimStr());
		// console.log(this.startcombine());
		console.log(this.getMost());
	}

	/**
	 * random sort
	 *
	 * @private
	 * @param {Array<number>} [arr=[1,2,3,4,5,6,7,8,9]]
	 * @returns {Array<number>}
	 * @memberof Test
	 */
	private randomSort(arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]): Array<number> {
		return arr.sort((a: number, b: number): any => {
			return Math.random() - 0.5;
		});
	}

	/**
	 * remove same fields
	 *
	 * @private
	 * @param {Array<number>} [arr=[1,2,3,2,3,2,3,4,3,4,3,4,3]]
	 * @returns {Array<number>}
	 * @memberof Test
	 */
	private removeSameFields(arr: Array<number> = [1, 2, 3, 2, 3, 2, 3, 4, 3, 4, 3, 4, 3]): Array<number> {
		const uniqueEntries: Array<number> = [...new Set(arr)];
		console.log(uniqueEntries);

		return uniqueEntries;
	}

	/**
	 * combine
	 *
	 * @private
	 * @param {string} [str='abdd3fsfjlkfjfkjsl4jfd']
	 * @returns {string}
	 * @memberof Test
	 */
	private startcombine(str: string = 'abdd3fsfjlkfjfkjsl4jfd'): any {
		if (str.length === 1) {
			return [str];
		}

		const result: Array<any> = [];
		// tslint:disable-next-line:forin
		for (let i: number = 0; i < str.length; i++) {
			for (const s of this.startcombine(str.slice(0, i) + str.slice(1 + +i))) {
				result.push(str[i] + s);
			}
		}

		return [...new Set(result)];
	}

	/**
	 * trim
	 *
	 * @private
	 * @param {string} [str=' ad  ds ']
	 * @returns {string}
	 * @memberof Test
	 */
	private trimStr(str: string = ' xxaddsxx '): string {
		return str.replace(/(^s+)|(s+$)/gi, '');
	}

	/**
	 * for unique
	 *
	 * @private
	 * @param {Array} [arr=[]]
	 * @returns {*}
	 * @memberof Test
	 */
	private unique(arr: Array<any> = [1, 1, 23, 3, 4, 5, 54, 5, 3, 323, 5, 33, 2, 2, 2, 2, 4]): any {
		const appeared: any = new Set();

		// filter()方法创建一个新的数组，新数组中元素通过检查指定数组中符合什么样件的所有元素组成
		return arr.filter((item: any): any => {
			const id: any = item + JSON.stringify(item);

			if (appeared.has(id)) {
				return false;
			} else {
				appeared.add(id);

				return true;
			}
		});
	}
}

export default new Test();
