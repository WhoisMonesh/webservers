<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Tomcat Example App</title>
</head>
<body>
    <h1>Welcome to Tomcat!</h1>
    <p>Server Time: <%= new java.util.Date() %></p>
    <p>Servlet Container: <%= application.getServerInfo() %></p>
    
    <h2>JSP Examples</h2>
    <ul>
        <li><a href="hello">Servlet Example</a></li>
        <li><a href="jdbc-test">JDBC Test</a></li>
    </ul>
</body>
</html>