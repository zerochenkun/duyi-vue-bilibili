import Vue from 'vue'
import App from './App.vue'
import channel from './services/channel.js'

async function test() {
  var channels = await channel.getChannels();
  console.log('channels: ', channels);
}

test();


// async function test(){
//   const channelData = await channel.getChannels()
//   console.log(channel.getChannels());
//   console.log('channelData: ', channelData);
// }
// test()
// channel.getChannels()


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
