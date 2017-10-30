<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page session="true" %>
<%!
    private String nome = "";
    
%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JQuery Reviews</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <link href="assets/css/bootstrap.min.css" rel="stylesheet">
        <link href="assets/css/material-kit.css" rel="stylesheet">
        <link href="assets/css/material-kit.css.map" rel="stylesheet">
        <link href="assets/css/master.css" rel="stylesheet">
    </head>
    <body>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">JqueryRevisao</a>
                </div>
            </div>
        </nav>
        
        <div class="wrapper"></div>
        
        <div class="container-fluid">
            <div class="row">
                <div class="col col-xs-12">
                    <div class="alert alert-primary">
                        <div class="container-fluid">
                            <div class="alert-icon">
                                <i class="material-icons">info_outline</i>
                            </div>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true"><i class="material-icons">clear</i></span>
                            </button>
                            <% 
                            int dia = Integer.parseInt((new SimpleDateFormat("dd")).format(new Date()));
                            out.println("<br>Hoje é dia " + dia);
                            %>
                            ${username}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="assets/js/jquery.min.js" type="text/javascript"></script>
        <script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="assets/js/material.min.js"></script>
        <script src="assets/js/material-kit.js" type="text/javascript"></script>
        <script src="assets/js/index.js"></script>
    </body>
</html>
