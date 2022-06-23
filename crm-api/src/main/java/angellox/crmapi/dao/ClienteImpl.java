package angellox.crmapi.dao;

import java.util.*;
import angellox.crmapi.models.Cliente;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;


@Repository
@Transactional
public class ClienteImpl implements ClienteDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Cliente registrar(Cliente cliente) {
        return entityManager.merge(cliente);
    }

    @Override
    public List<Cliente> listaClientes() {
        String query = "FROM Cliente";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Cliente buscarCliente(Long id) {
        return entityManager.find(Cliente.class, id);
    }

    @Override
    public boolean eliminar(Long id) {
        Cliente cliente = this.buscarCliente(id);

        if(cliente != null) {
            entityManager.remove(cliente);
            return true;
        }
        return false;
    }
}
