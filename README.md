prometheus-exporter-chrometools
====

Chromeのdevtoolを使ったURL監視用のexporterです
ChromeのdevtoolのNetworkページに表示されているデータを取得してprometheusに渡します
iframeやjsの発火、表示順によるユーザビリティの低下をモニタリングできます

## Usage

```
make webui
```

## Demo

exsample.comの例

```
# HELP urlmonitor_status_gauge status code gauge
# TYPE urlmonitor_status_gauge gauge
urlmonitor_status_gauge{url="http://ww1.exsample.com/?sub1=03132a94-9c8a-11e9-a1b0-617fdec101c8",contentType="text/html; charset=UTF-8"} 200
urlmonitor_status_gauge{url="http://img.sedoparking.com/js/jquery-1.11.3.custom.min.js",contentType="application/x-javascript"} 200
urlmonitor_status_gauge{url="http://www.google.com/adsense/domains/caf.js",contentType="text/javascript; charset=UTF-8"} 200
urlmonitor_status_gauge{url="http://www.gstatic.com/domainads/tracking/caf.gif?ts=1562045220274&rid=3746519",contentType="image/gif"} 200
urlmonitor_status_gauge{url="https://www.google.com/afs/ads/i/iframe.html",contentType="undefined"} 200
urlmonitor_status_gauge{url="https://www.google.com/adsense/domains/caf.js",contentType="undefined"} 200
urlmonitor_status_gauge{url="http://ww1.exsample.com/search/fb.php?ses=af4a069087d5a1f501562045219b9b40377077aafd&ec=24",contentType="text/html; charset=UTF-8"} 200

# HELP urlmonitor_connectTime_gauge connectTime gauge
# TYPE urlmonitor_connectTime_gauge gauge
urlmonitor_connectTime_gauge{url="http://ww1.exsample.com/?sub1=03132a94-9c8a-11e9-a1b0-617fdec101c8",contentType="text/html; charset=UTF-8"} 7.010999999999999
urlmonitor_connectTime_gauge{url="http://img.sedoparking.com/js/jquery-1.11.3.custom.min.js",contentType="application/x-javascript"} 12.446
urlmonitor_connectTime_gauge{url="http://www.google.com/adsense/domains/caf.js",contentType="text/javascript; charset=UTF-8"} 2.8
urlmonitor_connectTime_gauge{url="http://www.gstatic.com/domainads/tracking/caf.gif?ts=1562045220274&rid=3746519",contentType="image/gif"} 7.175
urlmonitor_connectTime_gauge{url="https://www.google.com/afs/ads/i/iframe.html",contentType="undefined"} 0
urlmonitor_connectTime_gauge{url="https://www.google.com/adsense/domains/caf.js",contentType="undefined"} 0
urlmonitor_connectTime_gauge{url="http://ww1.exsample.com/search/fb.php?ses=af4a069087d5a1f501562045219b9b40377077aafd&ec=24",contentType="text/html; charset=UTF-8"} 0

# HELP urlmonitor_dnsTime_gauge dns Time gauge
# TYPE urlmonitor_dnsTime_gauge gauge
urlmonitor_dnsTime_gauge{url="http://ww1.exsample.com/?sub1=03132a94-9c8a-11e9-a1b0-617fdec101c8",contentType="text/html; charset=UTF-8"} 7.010999999999999
urlmonitor_dnsTime_gauge{url="http://img.sedoparking.com/js/jquery-1.11.3.custom.min.js",contentType="application/x-javascript"} 12.446
urlmonitor_dnsTime_gauge{url="http://www.google.com/adsense/domains/caf.js",contentType="text/javascript; charset=UTF-8"} 2.8
urlmonitor_dnsTime_gauge{url="http://www.gstatic.com/domainads/tracking/caf.gif?ts=1562045220274&rid=3746519",contentType="image/gif"} 7.175
urlmonitor_dnsTime_gauge{url="https://www.google.com/afs/ads/i/iframe.html",contentType="undefined"} 0
urlmonitor_dnsTime_gauge{url="https://www.google.com/adsense/domains/caf.js",contentType="undefined"} 0
urlmonitor_dnsTime_gauge{url="http://ww1.exsample.com/search/fb.php?ses=af4a069087d5a1f501562045219b9b40377077aafd&ec=24",contentType="text/html; charset=UTF-8"} 0

# HELP urlmonitor_latency_gauge latency gauge
# TYPE urlmonitor_latency_gauge gauge
urlmonitor_latency_gauge{url="http://ww1.exsample.com/?sub1=03132a94-9c8a-11e9-a1b0-617fdec101c8",contentType="text/html; charset=UTF-8"} 851.337
urlmonitor_latency_gauge{url="http://img.sedoparking.com/js/jquery-1.11.3.custom.min.js",contentType="application/x-javascript"} 30.961
urlmonitor_latency_gauge{url="http://www.google.com/adsense/domains/caf.js",contentType="text/javascript; charset=UTF-8"} 60.287
urlmonitor_latency_gauge{url="http://www.gstatic.com/domainads/tracking/caf.gif?ts=1562045220274&rid=3746519",contentType="image/gif"} 60.342
urlmonitor_latency_gauge{url="https://www.google.com/afs/ads/i/iframe.html",contentType="undefined"} 123.382
urlmonitor_latency_gauge{url="https://www.google.com/adsense/domains/caf.js",contentType="undefined"} 50.232
urlmonitor_latency_gauge{url="http://ww1.exsample.com/search/fb.php?ses=af4a069087d5a1f501562045219b9b40377077aafd&ec=24",contentType="text/html; charset=UTF-8"} 272.486

# HELP urlmonitor_size_gauge size gauge
# TYPE urlmonitor_size_gauge gauge
urlmonitor_size_gauge{url="http://ww1.exsample.com/?sub1=03132a94-9c8a-11e9-a1b0-617fdec101c8",contentType="text/html; charset=UTF-8"} Nan
urlmonitor_size_gauge{url="http://img.sedoparking.com/js/jquery-1.11.3.custom.min.js",contentType="application/x-javascript"} Nan
urlmonitor_size_gauge{url="http://www.google.com/adsense/domains/caf.js",contentType="text/javascript; charset=UTF-8"} Nan
urlmonitor_size_gauge{url="http://www.gstatic.com/domainads/tracking/caf.gif?ts=1562045220274&rid=3746519",contentType="image/gif"} 43
urlmonitor_size_gauge{url="https://www.google.com/afs/ads/i/iframe.html",contentType="undefined"} Nan
urlmonitor_size_gauge{url="https://www.google.com/adsense/domains/caf.js",contentType="undefined"} Nan
urlmonitor_size_gauge{url="http://ww1.exsample.com/search/fb.php?ses=af4a069087d5a1f501562045219b9b40377077aafd&ec=24",contentType="text/html; charset=UTF-8"} 0

# HELP urlmonitor_waitingTime_gauge waitingTime gauge
# TYPE urlmonitor_waitingTime_gauge gauge
urlmonitor_waitingTime_gauge{url="http://ww1.exsample.com/?sub1=03132a94-9c8a-11e9-a1b0-617fdec101c8",contentType="text/html; charset=UTF-8"} 581.008
urlmonitor_waitingTime_gauge{url="http://img.sedoparking.com/js/jquery-1.11.3.custom.min.js",contentType="application/x-javascript"} 10.756
urlmonitor_waitingTime_gauge{url="http://www.google.com/adsense/domains/caf.js",contentType="text/javascript; charset=UTF-8"} 51.822
urlmonitor_waitingTime_gauge{url="http://www.gstatic.com/domainads/tracking/caf.gif?ts=1562045220274&rid=3746519",contentType="image/gif"} 45.817
urlmonitor_waitingTime_gauge{url="https://www.google.com/afs/ads/i/iframe.html",contentType="undefined"} 123.322
urlmonitor_waitingTime_gauge{url="https://www.google.com/adsense/domains/caf.js",contentType="undefined"} 49.528
urlmonitor_waitingTime_gauge{url="http://ww1.exsample.com/search/fb.php?ses=af4a069087d5a1f501562045219b9b40377077aafd&ec=24",contentType="text/html; charset=UTF-8"} 272.21999999999997
```