# Apache Tomcat Installation on Linux

## 1. Prerequisites
```bash
sudo apt update
sudo apt install openjdk-11-jdk
java -version  # Verify installation
```

## 2. Download Tomcat
```bash
wget https://downloads.apache.org/tomcat/tomcat-9/v9.0.65/bin/apache-tomcat-9.0.65.tar.gz
tar -xvzf apache-tomcat-9.0.65.tar.gz
sudo mv apache-tomcat-9.0.65 /opt/tomcat
```

## 3. Create System User
```bash
sudo useradd -r -m -U -d /opt/tomcat -s /bin/false tomcat
sudo chown -R tomcat: /opt/tomcat
```

## 4. Systemd Service Setup
Create `/etc/systemd/system/tomcat.service`:
```ini
[Unit]
Description=Apache Tomcat Web Application Container
After=network.target

[Service]
Type=forking
User=tomcat
Group=tomcat

Environment="JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64"
Environment="CATALINA_PID=/opt/tomcat/temp/tomcat.pid"
Environment="CATALINA_HOME=/opt/tomcat"
Environment="CATALINA_BASE=/opt/tomcat"

ExecStart=/opt/tomcat/bin/startup.sh
ExecStop=/opt/tomcat/bin/shutdown.sh

RestartSec=10
Restart=always

[Install]
WantedBy=multi-user.target
```

## 5. Start and Enable Tomcat
```bash
sudo systemctl daemon-reload
sudo systemctl start tomcat
sudo systemctl enable tomcat
```

## 6. Verify Installation
Access `http://your-server-ip:8080` in browser