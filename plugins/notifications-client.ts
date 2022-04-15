import Vue from 'vue'
import Notification from 'vue-notification';

declare module 'vue-notification' {
    interface Vue{
        $notifiy: void
    }
}

Vue.use(Notification);