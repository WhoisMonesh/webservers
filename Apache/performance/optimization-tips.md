# Apache Performance Optimization Tips

## 1. Choose the Right MPM
- **event**: Best for most modern setups (default on Apache 2.4)
- **prefork**: Needed for PHP with mod_php
- **worker**: Legacy threaded model

## 2. Adjust Configuration Parameters
```apache
# In httpd.conf or apache2.conf
StartServers            4
MinSpareServers         4
MaxSpareServers         8
MaxRequestWorkers       150
MaxConnectionsPerChild  10000
```

## 3. Enable KeepAlive
```apache
KeepAlive On
KeepAliveTimeout 5
MaxKeepAliveRequests 100
```

## 4. Disable Unnecessary Modules
```bash
# Example for Debian/Ubuntu
sudo a2dismod autoindex status cgi
```

## 5. Use Content Delivery Networks (CDN)
Offload static assets to CDN:
```html
<script src="https://cdn.example.com/jquery.min.js"></script>
```

## Monitoring Tools
```bash
# Real-time monitoring
apachetop -f /var/log/apache2/access.log

# Generate load for testing
ab -n 1000 -c 100 http://example.com/
```