package angellox.crmapi.dao;

import angellox.crmapi.models.Cliente;

import java.util.List;

public interface ClienteDao {
    Cliente registrar(Cliente cliente);
    List<Cliente> listaClientes();
    Cliente buscarCliente(Long id);
    boolean eliminar(Long id);
}
