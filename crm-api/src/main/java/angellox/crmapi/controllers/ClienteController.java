package angellox.crmapi.controllers;

import java.util.*;
import angellox.crmapi.dao.ClienteDao;
import angellox.crmapi.models.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000/", methods = {
        RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
@RestController
public class ClienteController {

    @Autowired
    private ClienteDao clienteDao;

    @RequestMapping(value = "api/clientes", method = RequestMethod.POST)
    public Cliente registrarCliente(@RequestBody Cliente cliente) {
        return clienteDao.registrar(cliente);
    }

    @RequestMapping(value = "api/clientes")
    public List<Cliente> obtenerClientes() {
        return clienteDao.listaClientes();
    }

    @RequestMapping(value = "api/clientes/{id}")
    public Cliente obtenercliente(@PathVariable Long id){
        return clienteDao.buscarCliente(id);
    }

    @RequestMapping(value = "api/clientes/{id}", method = RequestMethod.PUT)
    public Cliente editarCliente(@RequestBody Cliente cliente) {
        return clienteDao.registrar(cliente);
    }

    @RequestMapping(value = "api/clientes/{id}", method = RequestMethod.DELETE)
    public boolean eliminarCliente(@PathVariable Long id) {
        return clienteDao.eliminar(id);
    }
}
