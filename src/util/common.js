import moment from "moment";

export default{
    convertStrDateToPattern(strDate , pattern, local){
        console.log(local);
        console.log(moment(strDate).format(pattern));
        return moment(strDate).locale(local).format(pattern);
    }
}