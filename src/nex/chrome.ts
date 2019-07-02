import * as ChromeLauncher from 'chrome-launcher'
import * as CDP from 'chrome-remote-interface'
import * as nexProm from './prometheus'
const chromePort: number = 9222
const chromeFlags: string[] = [
  '--disable-gpu',
  '--headless',
  '--no-sandbox'
]
export interface NetworkStatus {
  name: string,
  contentType: string,
  status: number,
  size: number,
  waitingTime: number,
  latency: number,
  dnsTime: number,
  connectTime: number,
}
async function headlessChrome(option) {
  return ChromeLauncher.launch(option)
}
async function accessUrl(launcher, targetUrl) {
  CDP(protocol => {
    setTimeout(() => { protocol.close(); launcher.kill() }, 5000);
    const { Page, Network } = protocol;
    Promise.all([Page.enable(), Network.enable()]).then(function () {
      Page.navigate({ url: targetUrl }).then(function () {
        Network.responseReceived(res => {
          nexProm.SetGauges(responseToNetworkStatus(res))
        })
      })
    })
  })
}
function responseToNetworkStatus(res) {
  let timing = res.response.timing
  if (!timing) {
    var result: NetworkStatus = {
      name: String(res.response.url),
      contentType: String(res.response.headers['Content-Type']),
      status: Number(res.response.status),
      size: Number(res.response.headers['Content-Length']),
      waitingTime: NaN,
      latency: NaN,
      dnsTime: NaN,
      connectTime: NaN,
    }
  } else {
    var result: NetworkStatus = {
      name: String(res.response.url),
      contentType: String(res.response.headers['Content-Type']),
      status: Number(res.response.status),
      size: Number(res.response.headers['Content-Length']),
      waitingTime: Number(timing.receiveHeadersEnd - timing.sendEnd),
      latency: Number(timing.receiveHeadersEnd),
      dnsTime: Number(timing.dnsEnd - timing.dnsStart),
      connectTime: Number(timing.dnsEnd - timing.dnsStart),
    }
  }
  return result
}
export function Run(targetUrl: string) {
  headlessChrome({ port: chromePort, chromeFlags: chromeFlags }).then(launcher => {
    accessUrl(launcher, targetUrl)
  })
}