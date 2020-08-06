import Vue from 'vue'
import globalFunction from '~/assets/js/globalFunction'

Vue.mixin({
	methods: {
        getDataWithAxios (method, reqpath, paramsToSend, printNotification) {
            return globalFunction.getDataWithAxios(method, reqpath, paramsToSend, printNotification)
        },
        printNotification(typeSelected, titleSelected, messageSelected){
            globalFunction.printNotification(typeSelected, titleSelected, messageSelected)
        }
	}
})
