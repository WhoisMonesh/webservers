# Apache Tomcat Configuration

This directory contains configuration examples and setup guides for Apache Tomcat.

## Directory Structure
- `installation/`: OS-specific installation guides
- `server-config/`: Server configuration files
- `webapps/`: Example web applications

## Common Commands
```bash
# Start Tomcat
./catalina.sh run

# Stop Tomcat
./shutdown.sh

# Deploy WAR file
cp app.war $CATALINA_HOME/webapps/
```

## Security Recommendations
1. Always change default shutdown port (8005)
2. Remove unused webapps (docs, examples, etc.)
3. Secure manager and host-manager apps
4. Regularly update Tomcat and Java

## Performance Tuning
1. Adjust connector settings in server.xml
2. Configure proper JVM memory settings
3. Enable compression for text responses
4. Use NIO or NIO2 connectors for better performance

## Documentation Links
- [Official Tomcat Documentation](https://tomcat.apache.org/tomcat-9.0-doc/index.html)
- [Tomcat Security Considerations](https://tomcat.apache.org/tomcat-9.0-doc/security-howto.html)