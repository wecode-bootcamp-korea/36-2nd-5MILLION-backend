class QueryResultSet {
  constructor(result) {
    this.result = result;
  }

  fetchOne() {
    const [row] = this.result;

    return row;
  }

  fetchAll() {
    return this.result;
  }

  getLastInsertedId() {
    return this.result.insertId;
  }

  getAffectedRows() {
		return this.result.affectedRows;
	}

  isExist() {
    return Object.values(this.result[0])[0] === "0" ? false : true;
  }

}

class Database {
  constructor(database) {
    this.database = database;
  }

  async query(sql, params) {
    const result = await this.database.query(sql, params);

    return new QueryResultSet(result);
  }
}

module.exports = Database;
