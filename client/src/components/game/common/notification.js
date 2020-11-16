import moment from 'moment'

export default class Notification {
    constructor(message, type, object) {
        this.message = message;
        this.type = type;
        this.object = object;
        this.createdDate = new moment();
    }
}