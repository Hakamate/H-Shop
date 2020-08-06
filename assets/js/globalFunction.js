import Vue from 'vue'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:3333/api/'


const globalFunction = {
    async getDataWithAxios (method, reqpath, paramsToSend = null, printNotification = true) {
      try {
            if (method.toLowerCase() === "post") {
              const res = await axios.post(baseUrl + reqpath, {
                params: paramsToSend,
              });
              if(printNotification !== false) this.printNotification('success',res.data.status, res.data.message)
              return res.data
            } 
            
            else {
              const res = await axios.get(baseUrl + reqpath, {
                params: paramsToSend,
              });
              if(printNotification !== false) this.printNotification('success', res.data.status, res.data.message)
              return res.data
            }
          } catch (e) {
            if (e.message === "Network Error")
              this.printNotification('error','Error', "Try it again in few minutes, There is a problem with our Server")
            else
              this.printNotification('error','Error', e.response.data.message)
          }
    },

    printNotification(typeSelected, titleSelected, messageSelected){
      Vue.notify({
        group: "notification",
        title: titleSelected,
        type: typeSelected,
        text: messageSelected,
      });
    }
}

export default globalFunction