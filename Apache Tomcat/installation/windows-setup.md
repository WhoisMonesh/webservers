# Apache Tomcat Installation on Windows

## 1. Prerequisites
- Install Java JDK 8 or 11
- Set JAVA_HOME environment variable

## 2. Download and Install
1. Download Tomcat ZIP from [Apache Tomcat site](https://tomcat.apache.org)
2. Extract to `C:\Program Files\Apache\Tomcat9`

## 3. Configure Environment Variables
1. Create `CATALINA_HOME` variable pointing to Tomcat directory
2. Add `%CATALINA_HOME%\bin` to PATH

## 4. Install as Service
```cmd
cd %CATALINA_HOME%\bin
service.bat install
```

## 5. Start Tomcat
```cmd
net start Tomcat9
```

## 6. Verify Installation
Access `http://localhost:8080` in browser

## 7. Configure Manager Access
Edit `%CATALINA_HOME%\conf\tomcat-users.xml`:
```xml
<role rolename="manager-gui"/>
<user username="admin" password="securepassword" roles="manager-gui"/>
```