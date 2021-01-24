import moment from "moment";

export default{
    convertStrDateToPattern(strDate , pattern, local){
        return moment(strDate).locale(local).format(pattern);
    }
}