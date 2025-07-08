# Apache SSL Certificate Setup Guide

## 1. Generate CSR and Private Key
```bash
openssl req -new -newkey rsa:2048 -nodes -keyout example.com.key -out example.com.csr
```

## 2. Install Certificates
Place files in these locations:
- Certificate: `/etc/ssl/certs/example.com.crt`
- Private Key: `/etc/ssl/private/example.com.key`
- CA Bundle: `/etc/ssl/certs/example.com.ca-bundle`

## 3. Verify File Permissions
```bash
chmod 400 /etc/ssl/private/example.com.key
chown root:root /etc/ssl/private/example.com.key
```

## 4. Test Configuration
```bash
apachectl configtest
systemctl restart apache2
```

## 5. Verify SSL Configuration
```bash
openssl s_client -connect example.com:443 -servername example.com
```

## Automated Certificate Renewal (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-apache
sudo certbot --apache
```