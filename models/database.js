// class란 무엇인가요? = property(데이터) + action(함수)
// 모듈화 -> 함수, 클래스

/*
 * 1. 반복적으로 사용하는 변수(property) 혹은 함수(Action)를 담아 놓는 곳. -> 모듈화
 * 2. 내부 Scope를 만든다.
 * 3. instance를 생성할 수 있다. (붕어빵 틀 - 붕어빵)
 * const 붕어빵1 = new Database(밀가루 = 50g, 팥 = 1g)
 * const 붕어빵2 = new Database(밀가루 = 50g, 팥 = 1g)
 * const 붕어빵3 = new Database(밀가루 = 50g, 슈크림 = 1g)
 */

class QueryResultSet {
	constructor(result) {
		this.result = result
	}

	getLastInsertedId() {
		return this.result.insertId;
	}

	fetchOne() {
		const [row] = this.result;

		return row
	}

	isExist() {
		return Object.values(this.result[0])[0] === '0' ? false : true
	}

}


// Wrapper Class (SOLID - Opend Closed Principle)
class Database {
	constructor(db) {
		this.db = db
	}

	query(sql, params) {
		return QueryResultSet(this.db.query(sql, params))
	}
}

module.exports = Database
