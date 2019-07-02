import * as promClient from 'prom-client'
import * as nexChrome from './chrome'

interface promGaugesType {
  status: promClient.Gauge,
  size: promClient.Gauge,
  waitingTime: promClient.Gauge,
  latency: promClient.Gauge,
  dnsTime: promClient.Gauge,
  connectTime: promClient.Gauge,
}

const monitorGauges: promGaugesType = {
  status: new promClient.Gauge({
    name: 'urlmonitor_status_gauge',
    help: 'status code gauge',
    labelNames: ['url', 'contentType']
  }),
  connectTime: new promClient.Gauge({
    name: 'urlmonitor_connectTime_gauge',
    help: 'connectTime gauge',
    labelNames: ['url', 'contentType']
  }),
  dnsTime: new promClient.Gauge({
    name: 'urlmonitor_dnsTime_gauge',
    help: 'dns Time gauge',
    labelNames: ['url', 'contentType']
  }),
  latency: new promClient.Gauge({
    name: 'urlmonitor_latency_gauge',
    help: 'latency gauge',
    labelNames: ['url', 'contentType']
  }),
  size: new promClient.Gauge({
    name: 'urlmonitor_size_gauge',
    help: 'size gauge',
    labelNames: ['url', 'contentType']
  }),
  waitingTime: new promClient.Gauge({
    name: 'urlmonitor_waitingTime_gauge',
    help: 'waitingTime gauge',
    labelNames: ['url', 'contentType']
  }),
}

export function SetGauges(params: nexChrome.NetworkStatus) {
  monitorGauges.connectTime.set({
    url: params.name,
    contentType: params.contentType,
  }, params.connectTime)
  monitorGauges.dnsTime.set({
    url: params.name,
    contentType: params.contentType,
  }, params.dnsTime)
  monitorGauges.latency.set({
    url: params.name,
    contentType: params.contentType,
  }, params.latency)
  monitorGauges.size.set({
    url: params.name,
    contentType: params.contentType,
  }, params.size)
  monitorGauges.status.set({
    url: params.name,
    contentType: params.contentType,
  }, params.status)
  monitorGauges.waitingTime.set({
    url: params.name,
    contentType: params.contentType,
  }, params.waitingTime)
}
