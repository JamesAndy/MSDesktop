async function asyncFunction() {
    let conn;
    try {
    conn = await pool.getConnection();

    var sbSQL = new StringBuffer();
    var html = new StringBuffer();

    var searchData = $('#exampleInput').val();
    console.log("searchData = "+searchData);


    sbSQL.append(" SELECT ");
    sbSQL.append(" OBJID, ");
    sbSQL.append(" TEKQ, ");
    sbSQL.append(" QUESTIONE_DATETIME, ");
    sbSQL.append(" QUESTIONER_UNIT, ");
    sbSQL.append(" QUESTIONER, ");
    sbSQL.append(" QUESTIONE_APP, ");
    sbSQL.append(" QUESTIONE_TYPE, ");
    sbSQL.append(" QUESTIONE_DESCRIPTION, ");
    sbSQL.append(" QUESTIONE_PROCESS, ");
    sbSQL.append(" RESOLVE_MAN, ");
    sbSQL.append(" PKUDF_GETBS101_TYPEDESE('SYS_ISSUE_STATUS',STATUS) STATUS, ");
    sbSQL.append(" RESOLVE_DATETIME ");
    sbSQL.append(" FROM SYS_ISSUE WHERE RESOLVE_MAN = 'LESLEY' ");

    
    const rows = await conn.query(sbSQL.toString());
    rows.forEach(function(row,index){
        
        html.append('<tr>');
        html.append('<th scope="col">'+(index+1)+'</th>');
        html.append('<td>'+row.TEKQ+'</td>');
        html.append('<td>'+row.QUESTIONE_DATETIME+'</td>');
        html.append('<td>'+row.QUESTIONER_UNIT+'</td>');
        html.append('<td>'+row.QUESTIONER+'</td>');
        html.append('<td>'+row.QUESTIONE_APP+'</td>');
        html.append('<td>'+row.QUESTIONE_TYPE+'</td>');
        html.append('<td>'+row.QUESTIONE_DESCRIPTION+'</td>');
        html.append('<td>'+row.QUESTIONE_PROCESS+'</td>');
        html.append('<td>'+row.RESOLVE_MAN+'</td>');
        html.append('<td>'+row.STATUS+'</td>');
        html.append('<td>'+row.RESOLVE_DATETIME+'</td>');
        html.append('</tr>');

    });
    document.querySelector('#table > tbody').innerHTML = html.toString();
    //console.log(rows); //[ {val: 1}, meta: ... ]
    // const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
    // console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

    } catch (err) {
        console.log(err);
    conn.end();
    throw err;
    } finally {
    if (conn) return conn.end();
    }
    }

el('action-btn').addEventListener('click', function(){
    var searchData = $('#exampleInput').val();
    console.log("searchData = "+searchData);
    asyncFunction();
    test();
},false);