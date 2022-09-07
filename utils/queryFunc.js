const whereClause = (clause) => {
    let sql = "";
    if(clause.length != 0) {
        sql += `WHERE CASE 
                    WHEN ${clause} IS NULL THEN i.name IS NOT NULL
                    WHEN ${clause} IS NOT NULL THEN i.name = "${clause}" END`
    } else if(clause === "instructors" || sql.length != 0) {
        sql += ` AND CASE 
        WHEN ${clause} IS NULL THEN i.name IS NOT NULL
        WHEN ${clause} IS NOT NULL THEN i.name = "${clause}" END`
    }

let list = []

const classTypeFilter = (classTypeIds) => {
    if (classTypeIds.length != 0) {
        list.push(`t.id IN ${classTypeIds}`)
    }    
}

    return sql;
}
