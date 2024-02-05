const db = require("../config/db");
class Ypost{
    constructor (thumbimage,title,subtitle,description,postdate,profile,cname){
this.thumbimage =thumbimage,
this.title = title,
this.subtitle =subtitle,
this.description = description,
this.postdate = postdate,
this.profile = profile,
this.cname = cname
    }
    createYpost(){
        let query = `insert into ypost(thumbimage,title,sybtitle,description,postdate,profile) values ?`;
        return db.execute(query);
    }
    static getYpost(){
        let query = `select * from ypost`;
        return db.execute(query);
    }
}
module.exports = Ypost;