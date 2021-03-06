<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>JQuery Reviews</title>
        <meta charset="UTF-8">
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
            <div class="row">
                <div class="col-md-5 col-md-offset-4">
                    <div class="panel">
                        <div class="panel-body">
                            <form id="formLogin" action="signin" method="post">
                                <div class="form-group">
                                    <label class="control-label" for="usuario">Usuário</label>
                                    <input type="text" class="form-control" id="usuario" name="login" autofocus required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="senha">Senha</label>
                                    <input type="password" class="form-control" id="senha" name="passwd" required>
                                </div>
                                <button type="submit" class="btn btn-primary btn-block">entrar</button>
                            </form>
                            ${msg}
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
