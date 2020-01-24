/**
 * 存放一些常用的涵式
 */

/**
 * 資料庫_mariadb
 */
/*宣告資料庫連線*/
const mariadb = parent.require('mariadb'); 
const pool = mariadb.createPool({
    host: 'localhost',
    port: '3306', 
    user:'fwjdba', 
    password: 'fwjdba**831554',
    database:'fwjdba',
    connectionLimit: 5
});

/**
 * 按鈕事件監控
 */
function el(selector) {
    return document.getElementById(selector);
}

/**
 * StringBuffer操作
 */
function StringBuffer() {
    this.__strings__ = new Array;
}

StringBuffer.prototype.append = function (str) {
    this.__strings__.push(str);
};

StringBuffer.prototype.toString = function () {
    return this.__strings__.join("");
};