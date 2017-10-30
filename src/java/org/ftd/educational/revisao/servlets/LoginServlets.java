/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.ftd.educational.revisao.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.List;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.ftd.educational.catolica.prog4.daos.UserDAO;
import org.ftd.educational.catolica.prog4.entities.User;

/**
 *
 * @author vinicius.rebello
 */
@WebServlet(name = "LoginServlets", urlPatterns = {"/signin"})
public class LoginServlets extends HttpServlet {
    
    final String PERSISTENCE_UNIT_NAME = "persistenciaPU";

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        
        String usuario = request.getParameter("login");
        String senha = request.getParameter("passwd");
        
        System.out.println("login: " + usuario);
        System.out.println("senha: " + senha);
        
        EntityManagerFactory factory = Persistence.createEntityManagerFactory(PERSISTENCE_UNIT_NAME);
        
        UserDAO userDao = new UserDAO(factory);

        User user;
        try{
            user = userDao.findUser(usuario, senha);
            
            if((user != null)){
                HttpSession session = request.getSession(true);
                session.setAttribute("userid", Long.toString(user.getId()));
                session.setAttribute("username", user.getName());
                request.getRequestDispatcher("WEB-INF/views/HelloWorld.jsp").forward(request, response);
            }
        }catch(Exception e){
            request.setAttribute("msg", "A Senha informada é inválida ou seu usuário está bloqueado!");
            request.getRequestDispatcher("index.jsp").forward(request, response);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
