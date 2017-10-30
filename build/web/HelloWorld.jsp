<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%!
    private String nome = "Teste";

    private String metodoA() {
        return "Fabio Dippold";
    }

%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1> <% out.println("Ola mundo!!!!"); %> </h1>
        <br>
        <% 
          int dia = Integer.parseInt((new SimpleDateFormat("dd")).format(new Date()));
          out.println("<br>Hoje é dia " + dia); 
          out.println(this.metodoA());
          out.println(this.nome);
          
        %>
    </body>
</html>
