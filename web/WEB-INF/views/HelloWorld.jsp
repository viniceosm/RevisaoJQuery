<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%!
    private String nome = "";

    private String metodoA() {
        return "Vinícius Miiller Rebello";
    }

%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JQuery Reviews</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <link href="assets/css/bootstrap.min.css" rel="stylesheet">
        <link href="assets/css/material-kit.css" rel="stylesheet">
        <link href="assets/css/material-kit.css.map" rel="stylesheet">
        <link href="assets/css/master.css" rel="stylesheet">
    </head>
    <body>
        <div class="wrapper">
            <div class="header"></div>
        </div>
        
        <div class="container">
            <h1> <% out.println("Olá mundo!!!!"); %> </h1>
            <br>
            <% 
              int dia = Integer.parseInt((new SimpleDateFormat("dd")).format(new Date()));
              out.println("<br>Hoje é dia " + dia); 
              out.println(this.metodoA());
              out.println(this.nome);
            %>
        </div>
        
        <script src="assets/js/jquery.min.js" type="text/javascript"></script>
        <script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="assets/js/material.min.js"></script>
        <script src="assets/js/material-kit.js" type="text/javascript"></script>
        <script src="assets/js/index.js"></script>
    </body>
</html>
